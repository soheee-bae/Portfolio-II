import React, { useState, useEffect } from 'react';

export const CursorContext = React.createContext({
  textEnter: () => undefined,
  textLeave: () => undefined,
  variant: null,
  cursorVariant: ''
});

function CursorContextProvider({ children }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      text: ''
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      text: 'Click me!'
    },
    about: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      text: '🎯, 📓, 💻 중 하나를 클릭해주세요!'
    }
  };

  const variant = variants[cursorVariant];

  const textEnter = (variant) => {
    setCursorVariant(variant);
  };
  const textLeave = () => setCursorVariant('default');

  return (
    <CursorContext.Provider
      value={{
        textEnter,
        textLeave,
        variant,
        cursorVariant
      }}>
      {children}
    </CursorContext.Provider>
  );
}

export default CursorContext;
export { CursorContextProvider };
