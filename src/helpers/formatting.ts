interface ParseDateOptions {
  format: 'yyyy-mm-dd' | 'dd/mm/yyyy';
}

const isPositive = (value: string) => {
  return Number(value) > 0;
};

export const toDate = (textDate: string) => {
  const today = new Date();
  let [dd, mm, yyyy] = textDate.split('/');

  dd = isPositive(dd) ? dd : today.getDate().toString().padStart(2, '0');
  mm = isPositive(mm) ? mm : (today.getMonth() + 1).toString().padStart(2, '0');
  yyyy = isPositive(yyyy) ? yyyy : today.getFullYear().toString().padStart(4, '0');

  return new Date(`${mm}/${dd}/${yyyy}`);
};

export const parseDate = (date: Date, options: ParseDateOptions) => {
  const dd = date.getDate().toPrecision().padStart(2, '0');
  const mm = (date.getMonth() + 1).toPrecision().padStart(2, '0');
  const yyyy = date.getFullYear().toPrecision().padStart(4, '0');

  if (options.format === 'yyyy-mm-dd') {
    return `${yyyy}-${mm}-${dd}`;
  } else if (options.format === 'dd/mm/yyyy') {
    return `${dd}/${mm}/${yyyy}`;
  }
  return '';
};

export const onlyDigits = (value: string) => {
  return value.replace(/\D/g, '');
};
