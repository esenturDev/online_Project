// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { FC } from "react";
// import { usePostProductsMutation } from "../../../redux/api/product";
// // import { ProductsInputResult } from "../../../utils/ProductsValidetes";
// // import Button, { ButtonProps } from "../button/Button";
// import scss from "./CustomForm.module.scss";
// // import { Field, Form, Formik } from "formik";
// const CustomForm: FC<{
// 	setIsOpenModal: (value: boolean) => void;
// }> = ({ setIsOpenModal }) => {
// 	// const [postProducts] = usePostProductsMutation();
// 	// const handlePostProducts = async (values: any) => {
// 	// 	const { productName, price, quantity, photoUrl } = values;
// 	// 	console.log("text");

// 	// 	await postProducts({ productName, price, quantity, photoUrl });
// 	// 	// setIsOpenModal(false);
// 	// };
// 	// const buttonSubmitResult: ButtonProps = {
// 	// 	type: "submit",
// 	// 	variant: "primary",
// 	// 	color: "blue",
// 	// 	width: "300px",
// 	// };
// 	return (
// 		// <div className={scss.formsHeaderContainer}>
// 		// 	<div className={scss.modalContent1}>
// 		// 		<h3>Добавить новую позицию</h3>
// 		// 		{/* <img
// 		// 			onClick={() => setIsOpen(false)}
// 		// 			src={logoClone}
// 		// 			alt="logo Modal Noo!!"
// 		// 		/> */}
// 		// 	</div>
// 		// 	<Formik
// 		// 		initialValues={{
// 		// 			productName: "",
// 		// 			quantity: "",
// 		// 			price: "",
// 		// 			photoUrl: "",
// 		// 		}}
// 		// 		onSubmit={handlePostProducts}
// 		// 		validationSchema={ProductsInputResult}>
// 		// 		{({ errors, touched }) => {
// 		// 			return (
// 		// 				<Form className={scss.form}>
// 		// 					<div className={scss.formAndLabelAndInput}>
// 		// 						<label htmlFor="productName">Название товара</label>
// 		// 						<Field
// 		// 							className={scss.inputs}
// 		// 							id={"productName"}
// 		// 							name={"productName"}
// 		// 							type="text"
// 		// 							placeholder="Название товара"
// 		// 						/>
// 		// 						{touched.productName && errors.productName ? (
// 		// 							<div style={{ color: "red" }}>{errors.productName}</div>
// 		// 						) : null}
// 		// 					</div>
// 		// 					<div className={scss.formAndLabelAndInput}>
// 		// 						<label htmlFor="productName">Цена</label>
// 		// 						<Field
// 		// 							className={scss.inputs}
// 		// 							id={"price"}
// 		// 							name={"price"}
// 		// 							type="text"
// 		// 							placeholder="Название товара"
// 		// 						/>
// 		// 						{touched.price && errors.productName ? (
// 		// 							<div style={{ color: "red" }}>{errors.productName}</div>
// 		// 						) : null}
// 		// 					</div>
// 		// 					<div className={scss.formAndLabelAndInput}>
// 		// 						<label htmlFor="quantity">Количество в запасе</label>
// 		// 						<Field
// 		// 							className={scss.inputs}
// 		// 							id={"quantity"}
// 		// 							name={"quantity"}
// 		// 							type="text"
// 		// 							placeholder="Количество в запасе"
// 		// 						/>
// 		// 						{touched.quantity && errors.quantity ? (
// 		// 							<div style={{ color: "red" }}>{errors.quantity}</div>
// 		// 						) : null}
// 		// 					</div>
// 		// 					<div className={scss.formAndLabelAndInput}>
// 		// 						<label htmlFor="photoUrl">Изображение</label>
// 		// 						<Field
// 		// 							className={scss.inputs}
// 		// 							id={"photoUrl"}
// 		// 							name={"photoUrl"}
// 		// 							type="text"
// 		// 							placeholder="Photo"
// 		// 						/>
// 		// 						{touched.photoUrl && errors.photoUrl ? (
// 		// 							<div style={{ color: "red" }}>{errors.photoUrl}</div>
// 		// 						) : null}
// 		// 					</div>
// 		// 					<div className={scss.buttonsIsForms}>
// 		// 						<button onClick={() => setIsOpenModal(false)}>Отменить</button>
// 		// 						<Button {...buttonSubmitResult}>Сохранить</Button>
// 		// 					</div>
// 		// 				</Form>
// 		// 			);
// 		// 		}}
// 		// 	</Formik>
// 		// </div>
// 	);
// };

// export default CustomForm;
