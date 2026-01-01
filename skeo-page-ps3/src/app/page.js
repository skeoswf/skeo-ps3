"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import LoadXmbIcons from "../../components/main_array";
import LoadSecondXMB from "../../components/secondary_array";
import { xmbIcons as initialIcons } from "../../xmb_icon_arrays/main_array_data";

export default function Home() {
  const [xmbIcons, setXmbIcons] = useState(initialIcons);

  const containerRef = useRef(null);
  const iconRefs = useRef([]);

  // measure where the active icon is, and store it in a CSS var on the container
  const updateVerticalPosition = useCallback(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const activeIndex = xmbIcons.findIndex((i) => i.active);
    const activeEl = iconRefs.current[activeIndex];
    if (!activeEl) return;

    const activeRect = activeEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();

    // left edge of active icon relative to container
    const x = activeRect.left - containerRect.left;

    containerEl.style.setProperty("--active-x", `${x}px`);
    containerEl.style.setProperty("--row-bottom", `${activeRect.bottom - containerRect.top}px`);
  }, [xmbIcons]);

  // run after DOM updates so measurements are correct (important)
  useLayoutEffect(() => {
    updateVerticalPosition();
  }, [updateVerticalPosition]);


  // keep it correct on resize
  useEffect(() => {
    window.addEventListener("resize", updateVerticalPosition);
    return () => window.removeEventListener("resize", updateVerticalPosition);
  }, [updateVerticalPosition]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "a" ||
        e.key === "d"
      ) {
        setXmbIcons((prev) => {
          const currentIndex = prev.findIndex((i) => i.active);
          const direction = e.key === "ArrowLeft" || e.key === "a" ? -1 : 1;
          const newIndex = (currentIndex + direction + prev.length) % prev.length;

          return prev.map((icon, index) => {
            const isActive = index === newIndex;

            return {
              ...icon,
              active: isActive,
              items: icon.items.map((item, i) => ({
                ...item,
                active: isActive && i === 0,
              })),
            };
          });
        });
      } else if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "w" ||
        e.key === "s"
      ) {
        setXmbIcons((prev) => {
          const currentSubIconIndex = prev.findIndex(
            (icon) => icon.items.findIndex((item) => item.active) !== -1
          );
          if (currentSubIconIndex === -1) return prev;

          const currentSubIconItems = prev[currentSubIconIndex].items;
          const activeItemIndex = currentSubIconItems.findIndex((item) => item.active);

          const direction = e.key === "ArrowUp" || e.key === "w" ? -1 : 1;
          const newIndex =
            (activeItemIndex + direction + currentSubIconItems.length) %
            currentSubIconItems.length;

          return prev.map((icon, index) => {
            if (index === currentSubIconIndex) {
              return {
                ...icon,
                items: icon.items.map((item, idx) => ({
                  ...item,
                  active: idx === newIndex,
                })),
              };
            }
            return icon;
          });
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="XMB-container" ref={containerRef}>
      <div className="XMB-horizontal">
        {xmbIcons.map((icon, idx) => (
          <div
            key={icon.id}
            ref={(el) => (iconRefs.current[idx] = el)}
            className="XMB-icon-wrap"
          >
            <LoadXmbIcons iconObj={icon} />
          </div>
        ))}
      </div>

      <div className="XMB-vertical">
        {xmbIcons.map((icon) => (
          <LoadSecondXMB key={icon.id} iconObj={icon} />
        ))}
      </div>
    </div>
  );
}
