import * as Yup from "yup";

export const LoginInputResult = Yup.object({
	email: Yup.string().email("Не каратный email").required("Обязательное поле"),
	password: Yup.string()
		.min(4, "Пароль должен содержать min 4 символов")
		.required("Обязательное поле"),
});
