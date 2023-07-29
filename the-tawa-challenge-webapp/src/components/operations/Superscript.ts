export const SuperscriptGenerator = (number: number) => {
  let superscript = "ᵗʰ";

  const remainder = number % 10;
  const secondDigit = number % 100;

  if (remainder === 1 && secondDigit !== 11) {
    superscript = "ˢᵗ";
  } else if (remainder === 2 && secondDigit !== 12) {
    superscript = "ⁿᵈ";
  } else if (remainder === 3 && secondDigit !== 13) {
    superscript = "ʳᵈ";
  }

  return superscript;
};
