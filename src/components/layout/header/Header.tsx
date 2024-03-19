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
import { Bounce, ToastContainer, toast } from "react-toastify";
import {
	useGetProductsQuery,
	usePostProductsMutation,
} from "../../../redux/api/product";
// import { useGetProducFavoriteQuery } from "../../../redux/api/FavoriteProduct/FavoriteProduct";
import { useNavigate } from "react-router";
import {
	useGetBasketQuery,
	usePatchBasketMinuesMutation,
	usePatchBasketMutation,
	usePutPluesMutation,
} from "../../../redux/api/basket/Basket";
import { Modal2 } from "../../Ul/modal2/Modal2";

// import CustomForm from "../../Ul/customForm/CustomForm";

export const Header: FC<{
	setIsStyleResult: (value: boolean) => void;
}> = ({ setIsStyleResult }) => {
	// const [patchBasket] =  usePatchBasketMutation();
	const [putPlues] = usePutPluesMutation();
	const [isPlues, setIsPlues] = useState();
	const { data: basketProducts = [] } = useGetBasketQuery();
	const [patchBasket] = usePatchBasketMutation();
	const [patchBasketMinues] =  usePatchBasketMinuesMutation();
	console.log(basketProducts);

	const handleProducMinues = async (id: number) => {
		const newProduct = {
			quantityToDecrease: +1,
		};
		await patchBasketMinues({newProduct, id})
	}

	// interface QuantityResult {
	// 	quantityToDecrease: number | string
	// }

	const handlePluesProduc = async (id: number) => {
		const newProduc = {
			quantityToDecrease: -1,
		};
		await patchBasket({ newProduc, id });
	};

	const pluesProduc = async (id: number) => {
		console.log(id);

		const newProduc = {
			quantityToDecrease: 1,
		};
		// setIsPlues(quantity + 1)
		await putPlues({ newProduc, id });
	};

	// const basketPluseProducts = async (id: number, quantity: string | number) => {
	// 	console.log(quantity);

	// 	await patchBasket(id, quantity);
	// };

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

		await postProducts({
			productName,
			price,
			quantity,
			photoUrl,
		});
		// if (result) {
		// 	toast.success("🦄 Wow so easy!", {
		// 		position: "top-center",
		// 		autoClose: 3000,
		// 		hideProgressBar: false,
		// 		closeOnClick: true,
		// 		pauseOnHover: true,
		// 		draggable: true,
		// 		progress: undefined,
		// 		theme: "dark",
		// 		transition: Bounce,
		// 	});
		// }
		toast.success("🦄 Wow so easy!", {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Bounce,
		});
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
		navigate("/");
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
			<ToastContainer />
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
					<Modal2>
						<>
							<p
								style={{
									color: " rgb(18, 19, 20)",
									fontWeight: "400",
									fontSize: "1.2rem",
								}}>
								Корзина
							</p>
							{basketProducts.map((item: any) => (
								<div className={scss.basketProducContainer} key={item._id}>
									<div className={scss.BasketProductsCards}>
										<img
											style={{ width: "100px", height: "auto" }}
											src={item.product.photoUrl}
											alt={item.product.productName}
										/>
										<div className={scss.contentsProducts}>
											<div className={scss.producTexts}>
												<p>{item.product.productName}</p>
												<p>{item.product.price} $</p>
											</div>
											<div className={scss.buttonsIsProducts}>
												<button onClick={() => handleProducMinues(item.product._id)}>-</button>
												<span>{item.product.quantity}</span>
												<button
													onClick={() =>
														handlePluesProduc(
															item.product._id
															// item.product.quantity
														)
													}>
													+
												</button>
											</div>
											<button
												className={scss.buttonAddProduc}
												onClick={() =>
													// basketPluseProducts(
													// 	item.product._id,
													// 	item.product.quantity
													// )
													pluesProduc(item.product._id)
												}>
												Купить
											</button>
										</div>
									</div>
									<div className={scss.divProductsPrice}>
										<h3>Итого:</h3>
										<p>{item.product.price} $</p>
									</div>
								</div>
							))}
							<button onClick={() => setIsOpenModalBasket(false)}>
								Modal Noo
							</button>
						</>
					</Modal2>,
					document.getElementById("modal") as any
				)}
		</>
	);
};
