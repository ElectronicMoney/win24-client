import { object, string, ref } from 'yup';

export const schema = object({
  search: string(),
})


export const userSchema = object({
  name: string().required("The Name field is Required!"),
  username: string().required("The Username field is Required!")
  .test("number", `This Username has been registered by another user`, 
  (value) => value  !== "+6398000000"
  ),
  password: string().required("The Password field is Required!")
  .min(6, 'Your password is too short.'),
  confirmPassword: string().required("Please Confirm Your Password!")
  .oneOf([ref('password')], 'The password fields must be the same!'),
  role: string().required("The Role field is Required!"),

}).required();
