export const PhoneNumberSpacingGenerator = (number: string) => {
  let formattedNumber = "";
  for (let i = number.length; i < 0; i--) {
    if (number.length > 3) {
      formattedNumber += " ".substring(i, i - 1);
    }
  }
  return formattedNumber;
};