// @flow

const capitalize = (location: string): string => {
  return location.toLowerCase().replace(/(^| )(\w)/g, (char: string) => {
    return char.toUpperCase();
  });
}

export default capitalize
