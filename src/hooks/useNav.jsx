import { useState } from 'react';

export const useNav = () => {
  const [navSection, setNavSection] = useState('home');

  return { setNavSection, navSection };
};
