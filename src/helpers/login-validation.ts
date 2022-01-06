import { translations } from './translations';

const isGiven = (value: string) => value.length > 0;

const isEmail = (value: string) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  return pattern.test(value);
};

const hasLetterAndNumber = (value: string) => {
  const pattern = new RegExp(/^(?=.*[0-9])(?=.*[A-Za-z])/);
  return pattern.test(value);
};

export const validateEmail = (email: string) => {
  if (!isGiven(email)) {
    return translations.pt.login.error.missingEmail;
  }
  if (!isEmail(email)) {
    return translations.pt.login.error.invalidEmail;
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (!isGiven(password)) {
    return translations.pt.login.error.missingPassword;
  }
  if (password.length < 7) {
    return translations.pt.login.error.smallPassword;
  }
  if (!hasLetterAndNumber(password)) {
    return translations.pt.login.error.simplePassword;
  }
  return '';
};
