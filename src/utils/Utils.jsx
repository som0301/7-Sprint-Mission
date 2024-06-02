// 숫자를 쉼표로 구분하여 반환
export function getCommasToNumber(number) {
  return number.toLocaleString();
}

// 숫자만 입력 및 숫자 쉼표로 구분하여 반환
export function getFormatNumber(number) {
  return number.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

// 페이지 수 배열로 얻기
export function getPageNumberArray(number, index = 1) {
  const numbers = [];
  for (let i = index; i <= number; i++) {
    numbers.push(i);
  }
  return [...numbers];
}

// 링크 스타일(기본은 color)
export function getLinkStyle({
  isActive = false,
  linkColorProp = "color",
  linkColor = "var(--activate-button-blue)",
}) {
  return {
    [linkColorProp]: isActive ? linkColor : "",
  };
}

// 여러 페이지 일 때 지정 페이지면 해당 배열 구하기
export const getPageRange = (currentPage, totalPageSize, maximumRange) => {
  let startPage = 1;

  if (maximumRange <= currentPage) {
    startPage = Math.floor((currentPage - 1) / maximumRange) * maximumRange + 1;
  }

  let remainPage = totalPageSize - startPage + 1;
  const pages = Array.from(
    { length: Math.min(maximumRange, remainPage) },
    (item, index) => index + startPage
  );

  return pages;
};
