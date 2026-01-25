import Image from "next/image";
import { useState, useEffect } from "react";

function XMBcontent({ iconObj }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);
  if (activeIdx === -1) return null;

  const activeItem = iconObj.items[activeIdx].type;

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  useEffect(() => {
    setActivePhotoIdx(0);
  }, [activeIdx]);

  switch (activeItem) {
    case "text":
      return (
        <p className="textContent">{iconObj.items[activeIdx].text_content}</p>
      );

    case "link":
      return (
        <div className="linkstack-container">
          <p className="linkDescription">{iconObj.items[activeIdx].text_description}</p>
          <a
            href={iconObj.items[activeIdx].link}
            className="linkstack-buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            {iconObj.items[activeIdx].text_content}
          </a>
        </div>
      );

    case "pdf":
      return <p>this content is pdf haha</p>;

    case "about":
      return (
        <div className="linkstack-container">
          <p className="aboutContent">{iconObj.items[activeIdx].text_content}</p>
          <a
            href={iconObj.items[activeIdx].link}
            className="linkstack-buttons resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>
      );

    case "image": {
      const assets = iconObj.items[activeIdx]?.asset ?? [];
      const safeIdx = Math.min(activePhotoIdx, Math.max(assets.length - 1, 0));
      const currentSrc = assets[safeIdx]?.src;

      return (
        <>
          <div
            className="image-container"
            style={{
              backgroundImage: currentSrc ? `url(${currentSrc})` : "none"
            }}
          />

          <div className="photo-select-container">
            {assets.map((photo, index) => (
              <div
                key={photo.src}
                className={`photo-select ${index === safeIdx ? "active" : ""}`}
                onClick={() => setActivePhotoIdx(index)}
              />
            ))}
          </div>
        </>
      );
    }

    case "video":
      return <p>this content is video haha</p>;

    case "linkstack":
      return (
        <div className="linkstack-container">
          {iconObj.items[activeIdx].links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="linkstack-buttons"
            >
              {link.text_content}
            </a>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default XMBcontent;
