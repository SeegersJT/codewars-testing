# Codewars Testing Project

Welcome to the Codewars Testing Project! This repository provides a structured way to implement and test JavaScript functions, particularly for Codewars challenges. It is designed to help you easily create, test, and validate your solutions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Example](#example)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features

- Easy-to-use structure for implementing and testing JavaScript functions.
- Example files provided to demonstrate how to write functions and corresponding tests.
- Integration with Mocha and Chai for seamless testing and assertions.

## Installation

To get started, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/codewars-testing.git
   cd codewars-testing
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

## Usage

This project is structured to allow easy addition of new challenges. Follow these steps to add your own tests:

1. **Add Your Function Implementation**

   - Create a new file for your function in the `src/challenges` directory. 
   - Implement your function and export it.

   ```javascript
   // Example: src/challenges/example.js
   function addNumbers(a, b) {
       return a + b;
   }
   export default addNumbers;
   ```

2. **Create a Test File**

   - Create a corresponding test file in the `src/tests` directory.
   - Use the provided template to write your tests, making sure to import your function.

   ```javascript
   // Example: src/tests/example.test.js
   import { expect } from 'chai';
   import addNumbers from '../challenges/example.js';

   describe("addNumbers Function Tests", () => {
       it("should return the sum of two positive numbers", () => {
           const result = addNumbers(5, 7);
           const expected = 12;
           expect(result).to.equal(expected);
       });
   });
   ```

## File Structure

Here’s a brief overview of the project structure:

```
codewars-testing/
│
├── package.json              # Project metadata and dependencies
├── src/
│   ├── challenges/           # Directory for function implementations
│   │   └── example.js        # Example function implementation
│   │
│   └── tests/                # Directory for test files
│       └── example.test.js   # Example test file
│
└── README.md                 # Project documentation
```

## Example

The project includes example files (`example.js` and `example.test.js`) that demonstrate how to create a function and test it. You can copy and modify these files for your own challenges.

## Running Specific Tests

To run the tests for your function, use the following command:

```bash
npm run test:example
```

You can replace `example` with the name of your test file.

## Running All Tests

To run all tests at once, use the following command:

```bash
npm run test
```

## ESLint Setup

This project uses [ESLint](https://eslint.org/) for JavaScript code linting. ESLint has been configured to help maintain code quality and enforce consistent coding styles. Here’s how to set it up for automatic linting:

### Automatic Linting on Save

To enable automatic linting on save in Visual Studio Code, follow these steps:

1. **Install ESLint Extension**:
   - Open Visual Studio Code.
   - Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl + Shift + X`.
   - Search for "ESLint" and install the official ESLint extension by Dirk Baeumer.

2. **Configure ESLint**:
   - In your Visual Studio Code settings, add the following configuration to enable auto-fixing on save:
     - Press `Ctrl + ,` to open the settings.
     - Search for "settings.json" and click on "Edit in settings.json".
     - Add the following configuration:

     ```json
     {
       "editor.codeActionsOnSave": {
         "source.fixAll.eslint": true
       },
       "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
     }
     ```

3. **Using ESLint**:
   - Now, every time you save your JavaScript files, ESLint will automatically lint your code and apply fixes where applicable.

### Note on ESLint Implementation

- ESLint has been implemented in this project with specific rules to ensure code quality. You can customize these rules in the `eslint.config.js` file located in the root of the project.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

Thank you for using the Codewars Testing Project! Happy coding!