import Image from "next/image";
import styles from "./page.module.css";
import { xmbIcons } from "../../xmb_icon_arrays/main_array_data.js";

import LoadXmbIcons from "../../components/main_array";


export default function Home() {
  return (


    <div className="XMB-horizontal">
      {xmbIcons.map((icon) => (
        <LoadXmbIcons key={icon.id} iconObj={icon} />
      ))}
    </div>
  );
}
