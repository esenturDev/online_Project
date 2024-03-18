/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { createPortal } from "react-dom";
import Modal from "../../Ul/modal/Modal";
import logo1 from "../../../assets/photos/Button - Войти (1).png";
import logo2 from "../../../assets/photos/Button - Избранное (2).png";
import { ProductsInputResult } from "../../../utils/ProductsValidetes";
import Button, { ButtonProps } from "../../Ul/button/Button";
import { Field, Form, Formik } from "formik";
import {
	useGetProductsQuery,
	usePostProductsMutation,
} from "../../../redux/api/product";
// import { useGetProducFavoriteQuery } from "../../../redux/api/FavoriteProduct/FavoriteProduct";
import { useNavigate } from "react-router";
import {
	useGetBasketQuery,
	usePatchBasketMutation,
} from "../../../redux/api/basket/Basket";

// import CustomForm from "../../Ul/customForm/CustomForm";

export const Header: FC<{
	setIsStyleResult: (value: boolean) => void;
}> = ({ setIsStyleResult }) => {
	const { data: basketProducts = [] } = useGetBasketQuery();
	const [patchBasket] = usePatchBasketMutation();
	console.log(basketProducts);

	const basketPluseProducts = async (id: number) => {
		await patchBasket(id);
	};

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [isOpenModalBasket, setIsOpenModalBasket] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);
	const navigate = useNavigate();
	// const { data } = useGetProducFavoriteQuery();
	const { data } = useGetProductsQuery();
	const [postProducts] = usePostProductsMutation();
	const handlePostProducts = async (values: any) => {
		const { productName, price, quantity, photoUrl } = values;
		console.log("text");

		await postProducts({ productName, price, quantity, photoUrl });
		setIsOpenModal(false);
	};
	function result() {
		const filtred = data?.filter((itemId) => itemId.isFavorite === true);
		if (filtred) {
			setCount(count + 1);
			localStorage.setItem("count", JSON.stringify(count));
		}
		if (!filtred) {
			if (count === 0) {
				setCount(0);
				localStorage.setItem("countResult", JSON.stringify(count));
			} else {
				setCount((prev) => prev - 1);
				localStorage.setItem("countNoo", JSON.stringify(count));
			}
		}
	}
	function removeUsers() {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuthUsers");
		navigate("/")
	}
	useEffect(() => {
		result();
	}, [setCount]);

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
							<button onClick={removeUsers}>
								<img src={logo1} alt="logo1" />
							</button>
							<button onClick={() => navigate("/favorites-products")}>
								<img src={logo2} alt="logo1" />
								<p>{count}</p>
							</button>
							<button onClick={() => setIsOpenModalBasket(true)}>
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
							<button
								style={{ color: "black", backgroundColor: "pink" }}
								onClick={() => setIsStyleResult(true)}>
								Режим черный
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
			{isOpenModalBasket &&
				createPortal(
					<Modal>
						{basketProducts.map((item: any) => (
							<div key={item._id}>
								<img
									style={{ width: "100px", height: "auto" }}
									src={item.product.photoUrl}
									alt={item.product.productName}
								/>
								<p style={{ color: "black" }}>{item.product.productName}</p>
								<p style={{ color: "black" }}>{item.product.price}</p>
								<p style={{ color: "black" }}>{item.product.quantity}</p>
								<button onClick={() => basketPluseProducts(item.product._id)}>
									-
								</button>
							</div>
						))}
					</Modal>,
					document.getElementById("modal") as any
				)}
		</>
	);
};
