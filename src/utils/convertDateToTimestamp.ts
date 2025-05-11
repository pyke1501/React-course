/* pure component
- input (optional)
- output
*/

// 2020-03-12 -> 312321312
export const convertDateToTimestamp = (date: string) => {
  const myDate = date.split("-");
  const newDate = new Date(Number(myDate[2]), Number(myDate[1]) - 1, Number(myDate[0]));
  return newDate.getTime()
}