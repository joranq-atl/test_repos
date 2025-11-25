// Main application file

const { Validator, formatString } = require("./helpers");

function processInput(input) {
  const formatted = formatString(input);
  return formatted;
}

function runApp() {
  const validator = new Validator();

  validator.addRule((data) => data.length > 0);
  validator.addRule((data) => data.length < 100);

  const input = "  hello world  ";
  const processed = processInput(input);

  const isValid = validator.validate(processed);
  const emailValid = validator.checkEmail("test@example.com");

  console.log(`Processed: ${processed}`);
  console.log(`Valid: ${isValid}`);
  console.log(`Email valid: ${emailValid}`);
}

runApp();
