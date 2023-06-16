import { Sun, Moon } from "../../icons";
import "./Icons.css";

function Icons() {
  return (
    <div className="Icons">
      <p class="open" children={<Sun />} />
      <p class="close" children={<Moon />} />
    </div>
  );
}

export default Icons;
