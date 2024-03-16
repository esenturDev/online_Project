import * as Yup from "yup";

export const RegisterInputResult = Yup.object({
  email: Yup.string().email("Не каратный email").required("Обязательное поле"),
  userName: Yup.string().max(10, "Пароль должен содержать max 10 символов").required("Обязательное поле"),
  password: Yup.string().min(4, "Пароль должен содержать min 4 символов").required("Обязательное поле")
})