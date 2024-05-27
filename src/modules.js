import { createContext, useContext } from 'react';

export function createErrorTag(alert, target, tagName) {
  alert = document.createElement(tagName);
  alert.classList.add('error');
  target.parentElement.append(alert);
  target.classList.add('login-input-error');
  return alert;
}

export const classModuleName = (className = '', styles) => {
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

export function reactiveItemCount({handleSetMediaState}) {
  const mediaQueryMobile = window.matchMedia('(min-width: 375px) and (max-width: 767px)');
  const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
  const mediaQueryDesktop = window.matchMedia('(min-width: 1201px)');
  
  function handleMediaQueryChange() {
    if (mediaQueryMobile.matches) {
      handleSetMediaState('mobile');
    } else if (mediaQueryTablet.matches) {
      handleSetMediaState('tablet');
    } else if (mediaQueryDesktop.matches) {
      handleSetMediaState('desktop');
    }
  }

  // 각 미디어 쿼리에 대해 이벤트 리스너 등록
  mediaQueryMobile.addEventListener('change', handleMediaQueryChange);
  mediaQueryTablet.addEventListener('change', handleMediaQueryChange);
  mediaQueryDesktop.addEventListener('change', handleMediaQueryChange);
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
