import Image from "next/image";

function LoadXmbIcons({ iconObj }) {
  return (
    <div className="icon-square">
      <Image
        src={iconObj.image}
        alt={iconObj.text}
        width={200}
        height={200}
        className="icon-image"
        priority={iconObj.active}
      />
      <span>{iconObj.text}</span>
    </div>
  );
}

export default LoadXmbIcons;
