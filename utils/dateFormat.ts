export default function getDateFormat(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear(); // 2023
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 06
  const day = date.getDate().toString().padStart(2, '0'); // 18

  const resultString = year + '-' + month + '-' + day; // 2023-06-18

  return resultString;
}
