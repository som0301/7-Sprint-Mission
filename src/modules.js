import { createContext, useContext } from 'react';

export function createErrorTag(alert, target, tagName) {
  alert = document.createElement(tagName);
  alert.classList.add('error');
  target.parentElement.append(alert);
  target.classList.add('login-input-error');
  return alert;
}

export const classModuleName = (className = '', styles) => {
  if(!className) {
    throw new Error('className을 전달해야합니다');
  }

  const splitNames = className.split(' ');

  if (splitNames.length === 1) return `${styles[className]}`;

  const moduleNames = splitNames
    .map((e) => {
      const newName = `${styles[e]}`;
      return newName;
    })
    .join(' ');

  return moduleNames;
};

export function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}


const GlobalContext = createContext();

export const GlobalProvider = ({children, value}) => {
  return (
    <GlobalContext.Provider value={{ globalVar: value}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext);

export default createErrorTag;
