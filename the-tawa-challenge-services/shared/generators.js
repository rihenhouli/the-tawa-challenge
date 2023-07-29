function generateReference(prefix, sequentialNumber) {
    const paddedNumber = String(sequentialNumber).padStart(4, '0');
      const reference = prefix + paddedNumber;
    return reference;
  }
  
  module.exports = {
    generateReference: generateReference
  };