import { useState, useEffect } from "react";

function XMBcontent({ iconObj }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);
  if (activeIdx === -1) return null;

  const activeItem = iconObj.items[activeIdx].type;

  // one selector index for image/video sets
  const [activeAssetIdx, setActiveAssetIdx] = useState(0);

  // form state
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3627884a-0948-435b-81e7-4b94f3969f91");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("i got your message! i'll get back to ya as soon as i can");
      event.target.reset();

      setTimeout(() => 3000);// resets the form fields after successful submission
    } else {
      setResult("Error");
    }
  };

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
              backgroundImage: currentSrc ? `url(${currentSrc})` : "none",
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
                onLoadedMetadata={(e) => {
                  e.currentTarget.volume = 0.2;
                }}
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
          {iconObj.items[activeIdx].links?.map((link) => (
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

    case "song":
      return (
        <>
          <div
            className="embed-soundcloud"
            dangerouslySetInnerHTML={{
              __html: iconObj.items[activeIdx].embedded,
            }}
          />
          <div
            className="song-description"
          >
            {iconObj.items[activeIdx].text_content}
          </div>
        </>
      );

    case "songlist": {
      const songs = iconObj.items[activeIdx]?.songs_embedded ?? [];
      const safeIdx = Math.min(activeAssetIdx, Math.max(songs.length - 1, 0));
      const currentSong = songs[safeIdx];

      return (
        <>
          <div
            className="embed-soundcloud"
            dangerouslySetInnerHTML={{
              __html: currentSong?.embedded ?? "",
            }}
          />

          <div className="song-description">
            {currentSong?.text_content ?? ""}
          </div>

          <div className="song-select-container">
            {songs.map((song, index) => (
              <div
                key={index}
                className={`song-select ${index === safeIdx ? "active" : ""}`}
                onClick={() => setActiveAssetIdx(index)}
              />
            ))}
          </div>
        </>
      );
    }

    case "contact":
      return (
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="name" className="contact-box" required />
          <input type="email" name="email" placeholder="your email" className="contact-box" required />
          <textarea name="message" placeholder="what's up?" className="contact-box" required></textarea>
          <button type="submit" className="submit-button">submit</button>
          <p className={`contact-result ${result ? "show" : ""}`}>{result}</p>
        </form>
      );

    default:
      return null;
  }
}

export default XMBcontent;
