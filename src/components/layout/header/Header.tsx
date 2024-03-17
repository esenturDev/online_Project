/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { createPortal } from "react-dom";
import Modal from "../../Ul/modal/Modal";
import logo1 from "../../../assets/photos/Button - Войти (1).png";
import logo2 from "../../../assets/photos/Button - Избранное (2).png";
import { ProductsInputResult } from "../../../utils/ProductsValidetes";
import Button, { ButtonProps } from "../../Ul/button/Button";
import { Field, Form, Formik } from "formik";
import { usePostProductsMutation } from "../../../redux/api/product";

// import CustomForm from "../../Ul/customForm/CustomForm";

export const Header: FC<{
	setIsStyleResult: () => void;
}> = ({ setIsStyleResult }) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [postProducts] = usePostProductsMutation();
	const handlePostProducts = async (values: any) => {
		const { productName, price, quantity, photoUrl } = values;
		console.log("text");

		await postProducts({ productName, price, quantity, photoUrl });
		setIsOpenModal(false);
	};
	const buttonSubmitResult: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "black",
		width: "300px",
	};
	return (
		<>
			<header>
				<div className="container">
					<div className={scss.content}>
						<img
							src="https://www.istore.kg/static/_image/istore_logo.svg"
							alt="logo"
						/>
						<p>
							Магазин техники <br /> Apple в Бишкеке
						</p>
						<p>
							пр. Манаса, 40 (пер. ул. Киевская) <br />
							Пн - Вс 10:00 - 20:00
						</p>
						<p>
							+996 (555) 802 000 <br />
							+996 (505) 802 000
						</p>
						<div className={scss.buttons}>
							<button>
								<img src={logo1} alt="logo1" />
							</button>
							<button>
								<img src={logo2} alt="logo1" />
							</button>
							<button>
								<img
									className={scss.img}
									src="https://www.istore.kg/static/img/union.svg"
									alt="logo1"
								/>
								<p className={scss.p}>Корзина</p>
							</button>
							<button
								onClick={() => setIsOpenModal(true)}
								style={{ color: "blue" }}>
								Add Products
							</button>
						</div>
					</div>
				</div>
			</header>
			{isOpenModal &&
				createPortal(
					<Modal>
						{/* <CustomForm setIsOpenModal={setIsOpenModal}/> */}
						<div className={scss.formsHeaderContainer}>
							<div className={scss.modalContent1}>
								<h3>Добавить новую позицию</h3>
								{/* <img
					onClick={() => setIsOpen(false)}
					src={logoClone}
					alt="logo Modal Noo!!"
				/> */}
							</div>
							<Formik
								initialValues={{
									productName: "",
									quantity: "",
									price: "",
									photoUrl: "",
								}}
								onSubmit={handlePostProducts}
								validationSchema={ProductsInputResult}>
								{({ errors, touched }) => {
									return (
										<Form className={scss.form}>
											<div className={scss.formAndLabelAndInput}>
												<label htmlFor="productName">Название товара</label>
												<Field
													className={scss.inputs}
													id={"productName"}
													name={"productName"}
													type="text"
													placeholder="Название товара"
												/>
												{touched.productName && errors.productName ? (
													<div style={{ color: "red" }}>
														{errors.productName}
													</div>
												) : null}
											</div>
											<div className={scss.formAndLabelAndInput}>
												<label htmlFor="productName">Цена</label>
												<Field
													className={scss.inputs}
													id={"price"}
													name={"price"}
													type="text"
													placeholder="Название товара"
												/>
												{touched.price && errors.productName ? (
													<div style={{ color: "red" }}>
														{errors.productName}
													</div>
												) : null}
											</div>
											<div className={scss.formAndLabelAndInput}>
												<label htmlFor="quantity">Количество в запасе</label>
												<Field
													className={scss.inputs}
													id={"quantity"}
													name={"quantity"}
													type="text"
													placeholder="Количество в запасе"
												/>
												{touched.quantity && errors.quantity ? (
													<div style={{ color: "red" }}>{errors.quantity}</div>
												) : null}
											</div>
											<div className={scss.formAndLabelAndInput}>
												<label htmlFor="photoUrl">Изображение</label>
												<Field
													className={scss.inputs}
													id={"photoUrl"}
													name={"photoUrl"}
													type="url"
													placeholder="Photo"
												/>
												{touched.photoUrl && errors.photoUrl ? (
													<div style={{ color: "red" }}>{errors.photoUrl}</div>
												) : null}
											</div>
											<div className={scss.buttonsIsForms}>
												<button onClick={() => setIsOpenModal(false)}>
													Отменить
												</button>
												{/* <button onClick={handlePostProducts}>add</button> */}
												<Button {...buttonSubmitResult}>Сохранить</Button>
											</div>
										</Form>
									);
								}}
							</Formik>
						</div>
					</Modal>,
					document.getElementById("modal") as any
				)}
		</>
	);
};
