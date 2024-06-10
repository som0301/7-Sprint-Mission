
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

export function elapseTimeCal(targetTime) {
  const currentTime = Date.now();
  const elapseTime = currentTime - Date.parse(targetTime);
  const elapseDay = Math.floor(elapseTime / 1000 / 3600 / 24);
  const elapseHour = Math.floor(elapseTime / 1000 / 3600 % 24);

  return [elapseDay, elapseHour];
}

export default createErrorTag;
