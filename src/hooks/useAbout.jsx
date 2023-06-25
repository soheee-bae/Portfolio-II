import { useState } from 'react';

export const useAbout = () => {
  //skill, education, career
  const [aboutSection, setAboutSection] = useState(null);

  return { setAboutSection, aboutSection };
};
