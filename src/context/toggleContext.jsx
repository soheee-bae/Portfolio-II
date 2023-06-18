import { useSpring } from '@react-spring/core';
import React, { useState } from 'react';

export const ToggleContext = React.createContext({
  toggle: 0,
  setToggle: () => undefined,
  x: 0,
  isLightMode: true
});

function ToggleContextProvider({ children }) {
  const [toggle, setToggle] = useState(0);

  const [{ x }] = useSpring(
    {
      x: toggle,
      config: { mass: 5, tension: 400, friction: 100, precision: 0.0001 }
    },
    [toggle]
  );

  const isLightMode = toggle === 0;

  return (
    <ToggleContext.Provider
      value={{
        toggle,
        setToggle,
        x,
        isLightMode
      }}>
      {children}
    </ToggleContext.Provider>
  );
}

export default ToggleContext;
export { ToggleContextProvider };
