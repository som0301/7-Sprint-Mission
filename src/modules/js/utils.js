export function getDeviceType(width) {
  if (width >= 1200) return "desktop";
  if (width >= 768) return "tablet";

  return "mobile";
}

export function attachSubjectParticle(name) {
  const lastWord = hasFinalConsonant(name);
  const result = name + (lastWord === 0 ? "가" : "이");
  return result;
}

export function attachObjectParticle(name) {
  const lastWord = hasFinalConsonant(name);
  const result = name + (lastWord === 0 ? "를" : "을");
  return result;
}

function hasFinalConsonant(name) {
  const charCode = name.charCodeAt(name.length - 1);
  const consonantCode = (charCode - 44032) % 28;

  return consonantCode;
}

export function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
