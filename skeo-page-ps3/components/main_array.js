import Image from "next/image";
import LoadSecondXMB from "./secondary_array";


function LoadXmbIcons({ iconObj }) {
  return (
    <div className={`icon-square ${iconObj.active ? "active-icon" : ""}`}>
      <Image
        src={iconObj.image}
        alt={iconObj.text}
        width={120}
        height={120}
        className="icon-image"
        unoptimized={true}
      />
      <span className="icon-square-text">{iconObj.text}</span>

    </div>
  );
}

export default LoadXmbIcons;
