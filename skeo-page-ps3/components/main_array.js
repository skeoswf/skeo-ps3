import Image from "next/image.js";

function LoadXmbIcons({ iconObj }) {
  return (

    <div className="icon-square">
      <Image className="icon-image" src={iconObj.image} alt={iconObj.text}></Image>
      <p>{iconObj.text}</p>
    </div>
  )
};

export default LoadXmbIcons;
