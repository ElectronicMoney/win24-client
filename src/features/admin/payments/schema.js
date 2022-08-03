import { object, string } from 'yup';

export const schema = object({
  account_name: string().required("The Account Name field is Required!"),
  account_number: string().required("The Account Number field is Required!"),
  bank_name: string().required("The Bank Name field is Required!"),

}).required();
