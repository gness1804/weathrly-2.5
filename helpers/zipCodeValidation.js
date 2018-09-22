// @flow

const zipCodeIsValid = (zip: string): boolean => {
  const parsedZip = parseInt(zip, 10);
  if (!parsedZip || typeof parsedZip !== 'number' || zip.length !== 5) {
    return false;
  }
  return true;
};

export default zipCodeIsValid;
