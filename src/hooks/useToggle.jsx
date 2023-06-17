import { useState } from "react";
import { useSpring } from "@react-spring/core";

export const useToggle = () => {
  const [toggle, set] = useState(0);

  const [{ x }] = useSpring(
    {
      x: toggle,
      config: { mass: 5, tension: 400, friction: 100, precision: 0.0001 },
    },
    [toggle]
  );

  return { toggle, set, x };
};
