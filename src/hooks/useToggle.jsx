import { useState } from 'react';
import { useSpring } from '@react-spring/core';
import { useEffect } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(0);

  const [{ x }] = useSpring(
    {
      x: toggle,
      config: { mass: 5, tension: 400, friction: 100, precision: 0.0001 }
    },
    [toggle]
  );

  useEffect(() => {
    setToggle(toggle);
    console.log('useEffect');
  }, [toggle]);

  const isLightMode = toggle === 0;

  return { toggle, setToggle, x, isLightMode };
};
