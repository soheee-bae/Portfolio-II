import React, { useState } from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";

import Scene from "../../components/Scene/Scene";
import Overlay from "../../components/Overlay/Overlay";
import Icons from "../../components/Icons/Icons";

import "./Home.css";

function Home() {
  const [toggle, set] = useState(0);

  const [{ x }] = useSpring(
    {
      x: toggle,
      config: { mass: 5, tension: 400, friction: 100, precision: 0.0001 },
    },
    [toggle]
  );

  return (
    <a.div
      className="homeContainer"
      style={{
        backgroundColor: x.to([0, 1], ["#DEE2E6", "#343A40"]),
      }}>
      <Icons />
      <Scene x={x} set={set} />
      <Overlay />
    </a.div>
  );
}

export default Home;
