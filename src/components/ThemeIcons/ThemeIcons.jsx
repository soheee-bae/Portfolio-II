import { a } from "@react-spring/web";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import "./ThemeIcons.css";

function Icons({ toggle }) {
  const color = toggle === 1 ? "#ADB5BD" : "#343A40";
  return (
    <a.div className="icons">
      <p
        class="open"
        children={<LightModeOutlinedIcon sx={{ color: color }} />}
      />
      <p
        class="close"
        children={<DarkModeOutlinedIcon sx={{ color: color }} />}
      />
    </a.div>
  );
}
export default Icons;
