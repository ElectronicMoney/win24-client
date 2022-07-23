import { object, string } from 'yup';
import currency from "currency.js"
import { formatMoney } from '../../utils';


export const schema = object({
  amount: string().test("amount", `The minimum amount you can Withdraw is ${formatMoney(100)}`, 
  (value) => currency(value)  >= 100,
  )
  .required("The Amount is Required!")
  .transform((currentValue) => currency(currentValue).toString()),
  paymentType: string().required(),
  accountName: string().required("The Account Name is Required!"),
  accountNumber: string().required("The Account Number is Required!"),
  bankName: string().required("The Bank Name is Required!")

}).required();
