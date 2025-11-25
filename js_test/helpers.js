// Helper functions for JavaScript test

function formatString(str) {
  return str.trim().toUpperCase();
}

function validateEmail(email) {
  return email.includes("@");
}

class Validator {
  constructor() {
    this.rules = [];
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  validate(data) {
    let result = formatString(data);

    for (let rule of this.rules) {
      if (!rule(result)) {
        return false;
      }
    }

    return true;
  }

  checkEmail(email) {
    return validateEmail(email);
  }
}

module.exports = { formatString, validateEmail, Validator };
