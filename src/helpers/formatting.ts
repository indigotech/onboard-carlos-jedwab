const isPositive = (value: string) => {
  return Number(value) > 0;
};

export const toDate = (textDate: string) => {
  const today = new Date();

  let dd = textDate.split('/')[0];
  dd = isPositive(dd) ? dd : today.getDate().toPrecision().padStart(2, '0');

  let mm = textDate.split('/')[1];
  mm = isPositive(mm) ? mm : (today.getMonth() + 1).toPrecision().padStart(2, '0');

  let yyyy = textDate.split('/')[2];
  yyyy = isPositive(yyyy) ? yyyy : today.getFullYear().toPrecision().padStart(4, '0');

  const mmddyyyy = mm + '/' + dd + '/' + yyyy;
  return new Date(mmddyyyy);
};

export const toText = (date: Date) => {
  const dd = date.getDate().toPrecision().padStart(2, '0');
  const mm = (date.getMonth() + 1).toPrecision().padStart(2, '0');
  const yyyy = date.getFullYear().toPrecision().padStart(4, '0');
  const ddmmyyyy = dd + '/' + mm + '/' + yyyy;
  return ddmmyyyy;
};

export const onlyDigits = (value: string) => {
  return value.replace(/\D/g, '');
};
