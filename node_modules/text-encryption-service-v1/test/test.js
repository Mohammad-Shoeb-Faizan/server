// test/test.js

const { encrypt, decrypt } = require('../index');

const text = 'Hello, World!';
const shift = 3;

const encryptedText = encrypt(text, shift);
console.log('Encrypted:', encryptedText);

const decryptedText = decrypt(encryptedText, shift);
console.log('Decrypted:', decryptedText);

// Test invalid input
try {
  encrypt(123, shift);
} catch (error) {
  console.error('Error:', error.message);
}
