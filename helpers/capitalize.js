// @flow

// thanks to this Stack Overflow post for this function: https://stackoverflow.com/questions/4878756/javascript-how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
const capitalize = (location: string): string => {
  return location.toLowerCase().replace(/(^| )(\w)/g, (char: string) => {
    return char.toUpperCase();
  });
}

export default capitalize
