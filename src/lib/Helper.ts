import moment from 'moment';

export function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const number = /^\d{10}$/;
  return number.test(phoneNumber);
};

export const extraSpaceRemove = (text: string): string => {
  let newText = text.replace(/[^A-Z0-9]/g, '');
  return newText;
};

export const dateFormate = (date: string): string => {
  const validDate = moment(date).format('DD MMM YYYY');
  return validDate;
};
