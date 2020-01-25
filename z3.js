class Validator {
    isEmail(email) {
      return /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(email);
    }
    
    isDomain(domain) {
      return /\w+\.\w+/.test(domain);
    }
    
    isDate(date) {
      return /\d{2}\d{2}\{4}/.test(date);
    }
    
    isPhone(phone) {
      return /[+]\d+\s/.test(phone);
    }
  }
  
  
  var validator = new Validator();
  
  console.log(validator.isEmail('phphtml@mail.ru'));
  console.log(validator.isDomain('phphtml.net'));
  console.log(validator.isDate('12.05.2020'));
  console.log(validator.isPhone('+375 (29) 817-68-92'));