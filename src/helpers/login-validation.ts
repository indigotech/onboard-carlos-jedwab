const isGiven = (value: string) => value.length > 0;

const isEmail = (value: string) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  return pattern.test(value);
};

const isBiggerThan = (value: string, min: number) => value.length >= min;

const hasLetterAndNumber = (value: string) => {
  const pattern = new RegExp(/^(?=.*[0-9])(?=.*[A-Za-z])/);
  return pattern.test(value);
};

export const validateEmail = (email: string) => {
  if (!isGiven(email)) {
    return 'O email deve ser fornecido';
  }
  if (!isEmail(email)) {
    return 'Formato de email inválido';
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (!isGiven(password)) {
    return 'A senha deve ser fornecida';
  }
  if (!isBiggerThan(password, 7)) {
    return 'A senha deve ter no mínimo 7 caracteres';
  }
  if (!hasLetterAndNumber(password)) {
    return 'A senha deve ter letras e números';
  }
  return '';
};
