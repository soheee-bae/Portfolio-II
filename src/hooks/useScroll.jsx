import { useState, useEffect } from 'react';

const ids = ['home', 'about', 'contact', 'project'];

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(ids[0]);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = async () => {
        try {
          let position = await scrollHandler();
          if (position) setCurrentPosition(position);
        } catch (err) {
          console.log(err);
        }
        setScroll(window.pageYOffset);
      };
    }
  }, []);

  const scrollTriggered = scroll > 20;

  return { scrollTriggered, scroll, currentPosition };
};

function scrollHandler() {
  return new Promise((res) => {
    const app = document.getElementById('appContent');
    const appPosition = window.pageYOffset + app?.offsetHeight;
    let components = ids.map((id) => {
      let component = document.getElementById(id);
      let position = component?.offsetTop + component?.offsetHeight;
      return position - appPosition;
    });

    const min = Math.min(...components.filter((num) => num > 0));

    components.forEach((comp, indx) => {
      if (min === comp) {
        return res(ids[indx]);
      }
    });
  });
}
