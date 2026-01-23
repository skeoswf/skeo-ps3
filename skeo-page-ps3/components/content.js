import Image from "next/image";

function XMBcontent({ iconObj }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);
  if (activeIdx === -1) return null;
  let activeItem = iconObj.items[activeIdx].type

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
          >
            {iconObj.items[activeIdx].text_content}
          </a>
        </div>
      );

    case "pdf":
      return (
        <p>this content is pdf haha</p>
      );

    case "about":
      return (
        <div className="linkstack-container">
          <p className="aboutContent">{iconObj.items[activeIdx].text_content}</p>
          <a
            href={iconObj.items[activeIdx].link}
            className="linkstack-buttons resume-button"
            target="_blank"
          >
            resume
          </a>
        </div>
      );

    case "image":
      return (
        <p>this content is image haha</p>
      )

    case "video":
      return (
        <p>this content is video haha</p>
      )

    case "linkstack":
      return (
        <div className="linkstack-container">
          {iconObj.items[activeIdx].links.map((link) =>
          (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              className="linkstack-buttons"
            >
              {link.text_content}
            </a>
          ))}
        </div>
      )

    default:
      return null;
  }
}

export default XMBcontent;
