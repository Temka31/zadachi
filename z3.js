class Validator {
  isEmail(email) {
    return email.includes("@");
  }
  
  isDomain(domain) {
    return domain.includes(".");
  }
  
  isDate(date) {
    return date.includes(".");
  }
  
  isPhone(phone) {
    return phone.includes("+7");
  }
}


var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+79258866706'));