import React, { useState } from "react";
import "./Home.css";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";
import Scene from "../../components/Scene";
import { Moon, Sun } from "../../icons";

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
        backgroundColor: x.to([0, 1], ["#c9ffed", "#ff2558"]),
      }}>
      <p class="open" children={<Sun />} />
      <p class="close" children={<Moon />} />
      <Scene x={x} set={set} />
    </a.div>
  );
}

export default Home;
