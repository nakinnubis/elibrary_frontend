export const dateFunc = (dat) => {
  let result = new Date(dat).toDateString().substr(3).trim()
  return result;
}