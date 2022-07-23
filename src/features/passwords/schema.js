import { object, string } from 'yup';

export const schema = object({
  username: string().required("The Phone Number field is Required!"),
}).required();
