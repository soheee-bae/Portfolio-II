import { useState, useEffect } from 'react';

const ids = ['home', 'about', 'contact', 'project'];

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(ids[0]);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = async () => {
        let position = await scrollHandler();
        console.log('position : ' + position);
        if (position) setCurrentPosition(position);
        setScroll(window.pageYOffset);
      };
    }
  }, []);

  const scrollTriggered = scroll > 20;

  return { scrollTriggered, scroll, currentPosition };
};

async function scrollHandler() {
  const app = document.getElementById('app');
  const appPosition = window.pageYOffset + app?.offsetHeight;
  let components = ids.map((id) => {
    let component = document.getElementById(id);
    let position = component?.offsetTop + component?.offsetHeight;
    return position - appPosition;
  });
  console.log(components);

  const min = Math.min(...components.filter((num) => num > 0));

  console.log(min);
  components.forEach((comp, indx) => {
    if (min === comp) {
      console.log('result :' + ids[indx]);
      return ids[indx];
    }
  });
}
