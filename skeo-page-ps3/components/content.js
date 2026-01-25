import { useState, useEffect, useMemo } from "react";

function XMBcontent({ iconObj }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);
  if (activeIdx === -1) return null;

  const activeItem = iconObj.items[activeIdx].type;

  // one selector index for image/video sets
  const [activeAssetIdx, setActiveAssetIdx] = useState(0);

  // reset whenever you move to a different sub-item (photoset/videoset/etc.)
  useEffect(() => {
    setActiveAssetIdx(0);
  }, [activeIdx]);

  switch (activeItem) {
    case "text":
      return (
        <p className="textContent">{iconObj.items[activeIdx].text_content}</p>
      );

    case "link":
      return (
        <div className="linkstack-container">
          <p className="linkDescription">
            {iconObj.items[activeIdx].text_description}
          </p>
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
      const safeIdx = Math.min(activeAssetIdx, Math.max(assets.length - 1, 0));
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
            {assets.map((asset, index) => (
              <div
                key={asset.src}
                className={`photo-select ${index === safeIdx ? "active" : ""}`}
                onClick={() => setActiveAssetIdx(index)}
              />
            ))}
          </div>
        </>
      );
    }

    case "video": {
      // same asset array shape as image, just video srcs
      const assets = iconObj.items[activeIdx]?.asset ?? [];
      const safeIdx = Math.min(activeAssetIdx, Math.max(assets.length - 1, 0));
      const currentSrc = assets[safeIdx]?.src;

      return (
        <>
          <div className="video-container">
            {currentSrc ? (
              <video
                key={currentSrc} // forces reload when switching videos
                className="video-player"
                src={currentSrc}
                controls
                playsInline
                preload="metadata"
              />
            ) : null}
          </div>

          <div className="photo-select-container">
            {assets.map((asset, index) => (
              <div
                key={asset.src}
                className={`photo-select ${index === safeIdx ? "active" : ""}`}
                onClick={() => setActiveAssetIdx(index)}
              />
            ))}
          </div>
        </>
      );
    }

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
