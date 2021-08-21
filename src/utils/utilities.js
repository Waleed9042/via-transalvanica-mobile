export function validate(type, text) {
  switch (type) {
    case 'phone':
      let exp1 = /^[+]*[0-9]+$/;
      if (exp1.test(text) && text.length === 13) {
        return true;
      }
      return false;
    case 'firstName':
      let exp2 = /^[a-zA-Z ]+$/;
      if ((exp2.test(text) && text.length <= 20) || text === '') {
        return true;
      }
      return false;
    case 'lastName':
      let exp3 = /^[a-zA-Z]+$/;
      if ((exp3.test(text) && text.length <= 20) || text === '') {
        return true;
      }
      return false;
    case 'email':
      let exp4 = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if (exp4.test(text) || text === '') {
        return true;
      }
      return false;
    case 'address1':
      if (text.length <= 50) {
        return true;
      }
      return false;
    case 'address2':
      if (text.length <= 50) {
        return true;
      }
      return false;
    case 'code':
      let exp5 = /^[0-9]+$/;
      if (exp5.test(text) && text.length === 5) {
        return true;
      }
      return false;
  }
}
