"use client";

import { useState, useEffect } from "react";
import LoadXmbIcons from "../../components/main_array";
import { xmbIcons as initialIcons } from "../../xmb_icon_arrays/main_array_data";

export default function Home() {
  const [xmbIcons, setXmbIcons] = useState(initialIcons);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setXmbIcons(prev => {
          const currentIndex = prev.findIndex(i => i.active);
          const direction = e.key === "ArrowLeft" ? -1 : 1;
          const newIndex = (currentIndex + direction + prev.length) % prev.length;

          return prev.map((icon, index) => ({
            ...icon,
            active: index === newIndex
          }));
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="XMB-horizontal">
      {xmbIcons.map(icon => (
        <LoadXmbIcons key={icon.id} iconObj={icon} />
      ))}
    </div>
  );
}
