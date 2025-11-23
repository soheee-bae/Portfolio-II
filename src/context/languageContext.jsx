import React, { useState } from 'react';

export const LanguageContext = React.createContext({
  language: 'kor',
  setLanguage: () => undefined
});

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState('kor');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage
      }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
export { LanguageContextProvider };
