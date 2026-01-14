import Image from "next/image";

function XMBcontent({ iconObj }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);
  if (activeIdx === -1) return null;

  switch (iconObj.items[activeIdx].type) {
    case "text":
      return (
        <p className="textContent">{iconObj.items[activeIdx].text_content}</p>
      );

    case "link":
      return (
        <p>this content is link haha</p>
      );

    case "pdf":
      return (
        <p>this content is pdf haha</p>
      );

    case "image":
      return (
        <p>this content is image haha</p>
      )

    case "video":
      return (
        <p>this content is video haha</p>
      )

    default:
      return null;
  }
}

export default XMBcontent;
