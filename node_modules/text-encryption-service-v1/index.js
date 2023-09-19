// index.js

// Function to encrypt text using a Caesar cipher
function encrypt(text, shift) {
    if (typeof text !== 'string' || typeof shift !== 'number') {
      throw new Error('Invalid input. Text should be a string, and shift should be a number.');
    }
  
    const encryptedText = text
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const isUpperCase = char === char.toUpperCase();
          const offset = isUpperCase ? 65 : 97;
          const encryptedCode = ((code - offset + shift) % 26) + offset;
          return String.fromCharCode(encryptedCode);
        }
        return char;
      })
      .join('');
  
    return encryptedText;
  }
  
  // Function to decrypt text encrypted with a Caesar cipher
  function decrypt(encryptedText, shift) {
    // Decryption is the reverse of encryption, so we reuse the 'encrypt' function
    return encrypt(encryptedText, -shift);
  }
  
  module.exports = {
    encrypt,
    decrypt,
  };
  