import Image from "next/image";

function XMBcontent({ iconObj }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);
  if (activeIdx === -1) return null;

  switch (iconObj.items[activeIdx].type) {
    case "text":
      return <p>this content is text haha</p>;

    case "link":
      return <p>this content is link haha</p>;

    case "pdf":
      return <p>this content is pdf haha</p>;

    default:
      return null;
  }
}

export default XMBcontent;
