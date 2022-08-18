import { object, string } from 'yup';
import currency from "currency.js"
import { formatMoney } from '../../utils';


export const schema = object({
  bet_amount: string().required("The Amount You want to bet is Required!")
  .test("bet_amount", `The minimum amount you can bet is ${formatMoney(0.1)}`, 
  (value) => currency(value)  >= 0.1,
  )
  .transform((currentValue) => currency(currentValue).toString()),
}).required();
