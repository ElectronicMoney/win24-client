import { object, string, ref } from 'yup';

export const schema = object({
  currentPassword: string().required("The Current Password field is Required!")
  .min(6, 'Your password is too short.'),
  newPassword: string().required("The New Password field is Required!")
  .min(6, 'Your password is too short.'),
  confirmPassword: string().required("Please Confirm Your Password!")
  .oneOf([ref('newPassword')], 'The new password fields must be the same!')

}).required();
