import Image from "next/image";

function LoadXmbIcons({ iconObj }) {
  return (
    <div className="icon-square">
      <Image
        src={iconObj.image}
        alt={iconObj.text}
        width={100}
        height={100}
        className="icon-image"
        priority={iconObj.active}
      />
      <p>{iconObj.text}</p>
    </div>
  );
}

export default LoadXmbIcons;
