const checkValidity = (value: string, rules: any) => {
  let isValidMessage = null;

  if (!rules) {
    isValidMessage = null;
  }

  if (rules.required) {
    if (value.trim() === '') {
      isValidMessage = 'Required';
    }
  }

  if (rules.minLength) {
    if (value.length <= rules.minLength) {
      isValidMessage = 'should be more than 6 characters';
    }
  }

  if (rules.maxLength) {
    if (value.length >= rules.maxLength) {
      isValidMessage = 'should be less than 25 characters';
    }
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!pattern.test(value)) {
      isValidMessage = 'Email is not correct';
    }
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    if (!pattern.test(value)) {
      isValidMessage = 'Should be only numbers';
    }
  }

  return isValidMessage;
};

export default checkValidity;
