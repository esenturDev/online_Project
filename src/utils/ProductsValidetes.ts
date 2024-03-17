import * as Yup from "yup";

export const ProductsInputResult = Yup.object({
	productName: Yup.string().required("Обязательное поле"),
	price: Yup.number()
		.min(3, "цена должен содержать max 3 символов")
		.required("Обязательное поле"),
	quantity: Yup.number()
		.min(2, "количество должен содержать min 2 символов")
		.required("Обязательное поле"),
	photoUrl: Yup.string()
		.url("url должен содержать")
		.required("Обязательное поле"),
});
