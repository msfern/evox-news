/* eslint-disable import/prefer-default-export */
export function formatDate(date) {
  const dateInstance = new Date(date);
  const day = dateInstance.getDate() < 10 ? `0${dateInstance.getDate()}` : dateInstance.getDate();
  const month = dateInstance.getMonth()+1 < 10 ? `0${dateInstance.getMonth()+1}` : dateInstance.getMonth()+1;
  const year = dateInstance.getFullYear();

  return `${day}/${month}/${year}`;
}
