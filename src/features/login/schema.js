import { object, string } from 'yup';

export const schema = object({
  username: string().required("The Phone Number field is Required!"),
  password: string().required("The Password field is Required!"),
}).required();
