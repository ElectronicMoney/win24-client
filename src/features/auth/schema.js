import { object, string, ref } from 'yup';

export const loginSchema = object({
  username: string().required("The Phone Number field is Required!"),
  password: string().required("The Password field is Required!"),
}).required();


export const adminLoginSchema = object({
  username: string().required("The Username field is Required!"),
  password: string().required("The Password field is Required!"),
}).required();


export const registerSchema = object({
  name: string().required("The Name field is Required!"),
  username: string().required("The Phone Number field is Required!")
  .test("number", `This number has been registered by another user`, 
  (value) => value  !== "+6398000000"
  ),
  password: string().required("The Password field is Required!")
  .min(6, 'Your password is too short.'),
  confirmPassword: string().required("Please Confirm Your Password!")
  .oneOf([ref('password')], 'The password fields must be the same!')

}).required();