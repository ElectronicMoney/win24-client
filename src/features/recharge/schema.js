import { object, string } from 'yup';
import currency from "currency.js"
import { formatMoney } from '../../utils';


export const schema = object({
  amount: string().required("The Amount You want to Recharge is Required!")
  .test("amount", `The minimum amount you can Recharge is ${formatMoney(1)}`, 
  (value) => currency(value)  >= 1,
  )
  .transform((currentValue) => currency(currentValue).toString()),
  method: string().required(),
}).required();
