import { object, string } from 'yup';
import currency from "currency.js"
import { formatMoney } from '../../utils';


export const schema = object({
  amount: string().test("amount", `The minimum amount you can Withdraw is ${formatMoney(10)}`, 
  (value) => currency(value)  >= 10,
  )
  .required("The Amount is Required!")
  .transform((currentValue) => currency(currentValue).toString()),
  method: string().required(),
  account_name: string().required("The Account Name is Required!"),
  account_number: string().required("The Account Number is Required!"),
  bank_name: string().required("The Bank Name is Required!")

}).required();
