"use client";

import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback
} from "react";

import LoadXmbIcons from "../../components/main_array";
import LoadSecondXMB from "../../components/secondary_array";
import { xmbIcons as initialIcons } from "../../xmb_icon_arrays/main_array_data";

export default function Home() {
  const [xmbIcons, setXmbIcons] = useState(initialIcons);
  const [xoffset, setxoffset] = useState(0)
  const [yoffset, setyoffset] = useState(0)

  // use ref lets use reference values not tied to state updates/ needed for rendering. changes in useRef do not cause re-renders
  // added reference to jsx for container.current and iconRefs.current. references strictly for dom measurements
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const activeSubItemRef = useRef(null);

  // measure where the active icon is, and store it in a CSS var on the container
  const updateVerticalPosition = useCallback(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const activeIndex = xmbIcons.findIndex((i) => i.active);
    if (activeIndex === -1) return;

    const activeIcon = xmbIcons[activeIndex];

    const activeSubIdx = activeIcon.items.findIndex((item) => item.active);
    containerEl.style.setProperty("--sub-active-idx", `${Math.max(activeSubIdx, 0)}`);

    const subEl = activeSubItemRef.current;
    if (subEl) {
      const h = subEl.getBoundingClientRect().height;
      containerEl.style.setProperty("--sub-step", `${h + 6}px`);
    }

    const activeEl = iconRefs.current[activeIndex];
    if (!activeEl) return;

    const activeRect = activeEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();

    // left edge of active icon relative to container
    const x = activeRect.left - containerRect.left;

    containerEl.style.setProperty("--row-top", `${activeRect.top - containerRect.top}px`);
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


          if (e.key === "ArrowLeft" || e.key === "a") {
            setxoffset(prev => (prev > 60 ? -540 : prev + 60));
          }

          if (e.key === "ArrowRight" || e.key === "d") {
            setxoffset(prev => (prev <= -540 ? 120 : prev - 60));
          }



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
          // -1 is returned by findIndex if no active item is found
          // find index of the currently active sub-icon item
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
    <div className="XMB-container" ref={containerRef} >
      <div className="XMB-horizontal">
        {xmbIcons.map((icon, idx) => (
          <div
            key={icon.id}
            ref={(el) => (iconRefs.current[idx] = el)}
            className="XMB-icon-wrap"
            style={{
              transform: `translate(${xoffset}px, ${yoffset}px)`
            }}
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

      {/* active + below items (rendered below the main icon row) */}
      <div className="XMB-vertical">
        {xmbIcons.map((icon) => (
          <LoadSecondXMB
            key={icon.id}
            iconObj={icon}
            mode="below"
            activeItemRef={activeSubItemRef}
          />
        ))}
      </div>
    </div>
  );
}
