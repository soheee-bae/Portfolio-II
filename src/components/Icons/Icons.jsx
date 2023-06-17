import { a } from "@react-spring/web";

import { Sun, Moon } from "../../icons";
import "./Icons.css";

function Icons({ toggle }) {
  const color = toggle === 1 ? "#ADB5BD" : "#343A40";
  return (
    <a.div className="icons">
      <p class="open" children={<Sun color={color} />} />
      <p class="close" children={<Moon color={color} />} />
    </a.div>
  );
}
export default Icons;
