import { useState, useEffect } from 'react';

const getDeviceConfig = (width) => {
  if (width < 576) {
    return 'sm';
  } else if (width >= 576 && width < 768) {
    return 'md';
  } else if (width >= 768 && width < 992) {
    return 'lg';
  } else if (width >= 992 && width < 1050) {
    return 'xl';
  } else if (width >= 1050 && width < 1200) {
    return 'xxl';
  } else if (width >= 1200) {
    return 'xxxl';
  }
};

const useBreakpoint = () => {
  const newWindow = typeof window !== 'undefined' && window;

  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(newWindow?.innerWidth));

  useEffect(() => {
    const calcInnerWidth = () => {
      setBrkPnt(getDeviceConfig(newWindow?.innerWidth));
    };

    newWindow?.addEventListener('resize', calcInnerWidth);
    return () => newWindow?.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
