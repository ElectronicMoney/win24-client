import { object, string } from 'yup';
import currency from "currency.js"
import { formatMoney } from '../../utils';


export const schema = object({
  amount: string().required("The Amount You want to Recharge is Required!")
  .test("amount", `The minimum amount you can Recharge is ${formatMoney(100)}`, 
  (value) => currency(value)  >= 100,
  )
  .transform((currentValue) => currency(currentValue).toString()),
  paymentType: string().required(),
}).required();
