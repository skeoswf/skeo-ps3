"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";

import LoadXmbIcons from "../../components/main_array";
import LoadSecondXMB from "../../components/secondary_array";
import XMBcontent from "../../components/content";
import { xmbIcons as initialIcons } from "../../xmb_icon_arrays/main_array_data";

export default function Home() {
  const [xmbIcons, setXmbIcons] = useState(initialIcons);
  const [xoffset, setxoffset] = useState(0);


  const containerRef = useRef(null);
  const activeSubItemRef = useRef(null);

  // the “slot” that stays fixed in the viewport (initial active index)
  const anchorIndexRef = useRef(initialIcons.findIndex((i) => i.active));

  const updateVerticalPosition = useCallback(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const activeIndex = xmbIcons.findIndex((i) => i.active);
    if (activeIndex === -1) return;

    const activeIcon = xmbIcons[activeIndex];

    // active sub-index (useful if you ever re-enable scrolling)
    const activeSubIdx = activeIcon.items.findIndex((item) => item.active);
    containerEl.style.setProperty("--sub-active-idx", `${Math.max(activeSubIdx, 0)}`);

    // keep sub-step accurate (only matters if you use it in CSS later)
    const subEl = activeSubItemRef.current;
    if (subEl) {
      const h = subEl.getBoundingClientRect().height;
      containerEl.style.setProperty("--sub-step", `${h + 30}px`);
    }
  }, [xmbIcons]);

  useLayoutEffect(() => {
    updateVerticalPosition();
  }, [updateVerticalPosition]);

  useEffect(() => {
    window.addEventListener("resize", updateVerticalPosition);
    return () => window.removeEventListener("resize", updateVerticalPosition);
  }, [updateVerticalPosition]);

  useEffect(() => {
    const handleKeyDown = (e) => {

      // prevents div from popping to top of page

      const navKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "a", "d", "w", "s"];
      if (navKeys.includes(e.key)) {
        e.preventDefault();
      }

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

          // keep active icon locked to the anchor slot
          setxoffset((anchorIndexRef.current - newIndex) * 120);

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

        return;
      }

      // up/down subitems
      if (
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

          const items = prev[currentSubIconIndex].items;
          const activeItemIndex = items.findIndex((item) => item.active);

          const direction = e.key === "ArrowUp" || e.key === "w" ? -1 : 1;
          const newIndex = (activeItemIndex + direction + items.length) % items.length;

          return prev.map((icon, index) => {
            if (index !== currentSubIconIndex) return icon;

            return {
              ...icon,
              items: icon.items.map((item, idx) => ({
                ...item,
                active: idx === newIndex,
              })),
            };
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
        {xmbIcons.map((icon) => (
          <div
            key={icon.id}
            className="XMB-icon-wrap"
            style={{ transform: `translate(${xoffset}px)` }}
          >
            <LoadXmbIcons iconObj={icon} />
          </div>
        ))}
      </div>

      <div className="XMB-vertical-above">
        {xmbIcons.map((icon) => (
          <LoadSecondXMB key={icon.id} iconObj={icon} mode="above" />
        ))}
      </div>

      <div className="XMB-vertical">
        {xmbIcons.map((icon) => (
          <LoadSecondXMB
            key={icon.id}
            iconObj={icon}
            mode="below"

          />
        ))}
      </div>

      {/* <div className="content-div">
        {xmbIcons.map((icon) => (
          <XMBcontent key={icon.id} iconObj={icon} />
        ))}
      </div> */}
    </div>
  );
}
