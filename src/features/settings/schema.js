import { object, string, ref } from 'yup';

export const schema = object({
  password: string().required("The Password field is Required!")
  .min(6, 'Your password is too short.'),
  confirmPassword: string().required("Please Confirm Your Password!")
  .oneOf([ref('password')], 'The password fields must be the same!')

}).required();
