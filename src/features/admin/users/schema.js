import { object, string } from 'yup';

export const schema = object({
  search: string(),
})


export const userSchema = object({
  name: string(),
  username: string()
  .test("number", `This Username has been registered by another user`, 
  (value) => value  !== "+6398000000"
  ),
  role: string(),

});
