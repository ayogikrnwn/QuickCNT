export const replaceEmail = str => {
  if (str) {
    return str.replace('@gmail.com', '');
  }
};
export const stringToJson = str => {
  if (str) {
    return JSON.parse(str);
  }
};
