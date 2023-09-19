# Encrypt-Text Package

The **encrypt-text** package is a simple npm package for text encryption and decryption using a basic Caesar cipher algorithm. Please note that this package is intended for educational and demonstration purposes and should not be used for sensitive or secure data encryption.

## Installation

You can install the **encrypt-text** package in your Node.js project using npm:

```bash
npm install text-encryption-service-v1
```

## Usage

Once installed, you can use the package by requiring it in your JavaScript code:

```javascript
const { encrypt, decrypt } = require('encrypt-text');
```

### Encrypting Text

To encrypt a text using a Caesar cipher, use the `encrypt` function:

```javascript
const encryptedText = encrypt(text, shift);
```

- `text`: The text you want to encrypt (a string).
- `shift`: The shift value for the Caesar cipher (an integer).

### Decrypting Text

To decrypt an encrypted text using the same Caesar cipher, use the `decrypt` function:

```javascript
const decryptedText = decrypt(encryptedText, shift);
```

- `encryptedText`: The text previously encrypted using the `encrypt` function.
- `shift`: The same shift value used for encryption (an integer).

### Example

Here's an example of how to use the package:

```javascript
const { encrypt, decrypt } = require('encrypt-text');

const text = 'Hello, World!';
const shift = 3;

// Encrypt the text
const encryptedText = encrypt(text, shift);
console.log('Encrypted:', encryptedText);

// Decrypt the text
const decryptedText = decrypt(encryptedText, shift);
console.log('Decrypted:', decryptedText);
```

## Error Handling

The package provides basic error handling for invalid input. If you pass incorrect or invalid arguments to the functions, you will receive an error message.

## Security Considerations

Please be aware that the Caesar cipher used in this package is not suitable for secure data encryption. It is a simple demonstration of encryption principles. For secure applications, consider using industry-standard encryption libraries and algorithms.

## License

This package is released under the ISC License. You can find the full license details in the LICENSE file.

## Contributing

If you would like to contribute to this package or report issues, please visit the package's GitHub repository: [GitHub Repository](https://github.com/Mohammad-Shoeb-Faizan/encrypt-text)

## Contact

If you have any questions or need assistance, feel free to contact the package author at shoebfaizan71@gmail.com.

Enjoy using the **encrypt-text** package!
