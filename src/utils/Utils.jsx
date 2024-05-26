// 숫자를 쉼표로 구분하여 반환
export function getCommasToNumber(number) {
  return number.toLocaleString();
}

// 아이템 수에 따라 페이지 수 구할 때 나머지 있다면 올림
export function getCustomRound(number) {
  const decimalPart = number % 1;
  if (decimalPart >= 0.1) {
    return Math.ceil(number);
  } else {
    return Math.floor(number);
  }
}

// 페이지 수
export function getPageNumber(number) {
  const numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return [...numbers];
}

// 링크 스타일(기본은 color)
export function getLinkStyle({
  isActive,
  linkColorProp = "color",
  linkColor = "var(--blue)",
}) {
  return {
    [linkColorProp]: isActive ? linkColor : "",
  };
}
