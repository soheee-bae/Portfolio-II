import React from "react";
import { a } from "@react-spring/web";

import Scene from "../../components/Scene/Scene";
import Overlay from "../../components/Overlay/Overlay";
import Icons from "../../components/ThemeIcons/ThemeIcons";

import "./Home.css";
import { useToggle } from "../../hooks/useToggle";

function Home() {
  const { toggle, set, x } = useToggle();

  return (
    <a.div
      id="home"
      className="homeContainer"
      style={{
        backgroundColor: x.to([0, 1], ["#DEE2E6", "#343A40"]),
      }}>
      <Overlay toggle={toggle} />
      <a.div className="homeContent">
        <Scene x={x} set={set} />
        <Icons toggle={toggle} />
      </a.div>
    </a.div>
  );
}

export default Home;
