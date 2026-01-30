import Image from "next/image";

function LoadXmbIcons({ iconObj, onClick }) {


  return (
    <div
      className={`icon-square ${iconObj.active ? "active-icon" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{ cursor: "pointer" }}
    >
      <Image
        src={iconObj.image}
        alt={iconObj.text}
        width={120}
        height={120}
        className="icon-image"
        unoptimized
      />
      <span className="icon-square-text">{iconObj.text}</span>
    </div>
  );
}

export default LoadXmbIcons;
