// @flow

const zipCodeIsValid = (zip: number): boolean => {
  const parsedZip = parseInt(zip, 10)
  if (!parsedZip || typeof parsedZip !== 'number' || zip.length !== 5) {
    return false
  }
  return true
}

export default zipCodeIsValid
