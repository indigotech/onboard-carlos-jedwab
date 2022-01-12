import { translations } from './translations';

const errorTranslations = translations.pt.error;

const isGiven = (value: string) => value.length > 0;

const isEmail = (value: string) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  return pattern.test(value);
};

const isPhone = (value: string) => {
  const pattern = new RegExp(
    /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/,
  );
  return pattern.test(value);
};

const isDate = (value: string) => {
  const pattern = new RegExp(
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  );
  return pattern.test(value);
};

const isFutureDate = (value: string) => {
  const dd = value.split('/')[0];
  const mm = value.split('/')[1];
  const yyyy = value.split('/')[2];
  const mmddyyyy = mm + '/' + dd + '/' + yyyy;
  const date = new Date(mmddyyyy);
  const now = new Date();
  return date > now;
};

const hasLetterAndNumber = (value: string) => {
  const pattern = new RegExp(/^(?=.*[0-9])(?=.*[A-Za-z])/);
  return pattern.test(value);
};

export const validateEmail = (email: string) => {
  if (!isGiven(email)) {
    return errorTranslations.missingEmail;
  }
  if (!isEmail(email)) {
    return errorTranslations.invalidEmail;
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (!isGiven(password)) {
    return errorTranslations.missingPassword;
  }
  if (password.length < 7) {
    return errorTranslations.smallPassword;
  }
  if (!hasLetterAndNumber(password)) {
    return errorTranslations.simplePassword;
  }
  return '';
};

export const validateName = (name: string) => {
  if (!isGiven(name)) {
    return errorTranslations.missingName;
  }
  return '';
};

export const validatePhone = (phone: string) => {
  if (!isGiven(phone)) {
    return errorTranslations.missingPhone;
  }
  if (!isPhone(phone)) {
    return errorTranslations.invalidPhone;
  }
  return '';
};

export const validateDate = (date: string) => {
  if (!isGiven(date)) {
    return errorTranslations.missingDate;
  }
  if (!isDate(date)) {
    return errorTranslations.invalidDate;
  }
  if (isFutureDate(date)) {
    return errorTranslations.futureDate;
  }
  return '';
};
