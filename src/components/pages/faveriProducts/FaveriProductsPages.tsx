/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
	useGetProducFavoriteQuery,
	usePostProducFavoriteMutation,
} from "../../../redux/api/FavoriteProduct/FavoriteProduct";
import scss from "./FaveriProductsPages.module.scss";
import { Field, Form, Formik } from "formik";
import Button, { ButtonProps } from "../../Ul/button/Button";
import Modal from "../../Ul/modal/Modal";
import { ProductsInputResult } from "../../../utils/ProductsValidetes";
import {
	useEditProductsMutation,
	useGetProductsQuery,
	usePostProductsMutation,
} from "../../../redux/api/product";
import { createPortal } from "react-dom";
const FaveriProductsPages = () => {
	const { data: FaveriProduc = [] } = useGetProducFavoriteQuery();
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [productName, setProductName] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [quantity, setQuantity] = useState<string>("");
	const [photoUrl, setPhotoUrl] = useState<string>("");
	console.log(FaveriProduc);
	const [editProducts] = useEditProductsMutation();

	const editPtoduc = async (_id: number) => {
		// console.log(id);
		const newProduc = {
			productName,
			price,
			quantity,
			photoUrl,
			_id,
		}

		await editProducts(newProduc);
		setItemIdForms(false);
	};

	const [postProducFavorite] = usePostProducFavoriteMutation();
	const [itemIdFavorite, setItemIdFavorite] = useState<any>(null)
	const [itemIdForms, setItemIdForms] = useState<number | false>(false);
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

	const [postProducts] = usePostProductsMutation();
	const { data: producData = [] } = useGetProductsQuery();
	const handlePostProducts = async (values: any) => {
		const { productName, price, quantity, photoUrl } = values;
		console.log("text");

		await postProducts({ productName, price, quantity, photoUrl });
		setIsOpenModal(false);
	};
	const handleOpenModal = (id: number) => {
		setOpenModal(true);
		setItemIdFavorite(id)
	}
	const handleInputItemId = (id: number) => {
		setItemIdForms(id);
	};
	const buttonSubmitResult: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "black",
		width: "300px",
	};
	// const filtred = data?.filter((itemFilter) => itemFilter.productName )
	return (
		<>
			<div>
				<div className="container">
					<div className={scss.content}>
						{/* {data?.map((item) => (
            const {productName, photoUrl} = item.product
            <div key={item._id}>
              <img src={item.productName} alt={item.productName} />
              <h2>{item.productName}</h2>
            </div>
          ))} */}
						<button onClick={() => setIsOpenModal(true)}>Add Produc</button>
						{FaveriProduc?.map((item: any) => {
							// const { productName, photoUrl } = item.product
							return (
								<div key={item._id}>
									{itemIdForms === item.product._id ? (
										<>
											<input
												type="text"
												value={productName}
												onChange={(e) => setProductName(e.target.value)}
											/>
											<input
												type="text"
												value={price}
												onChange={(e) => setPrice(e.target.value)}
											/>
											<input
												type="text"
												value={quantity}
												onChange={(e) => setQuantity(e.target.value)}
											/>
											<input
												type="url"
												value={photoUrl}
												onChange={(e) => setPhotoUrl(e.target.value)}
											/>
											{/* <button onClick={() => }>Save</button> */}
											<button onClick={() => setItemIdForms(false)}>
												Concel
											</button>
											<button onClick={() => editPtoduc(item.product._id)}>
												Save
											</button>
										</>
									) : (
										<>
											<img
												style={{ width: "100px", height: "100px" }}
												src={item.product.photoUrl}
												alt={item.product.productName}
											/>
											<h2>{item.product.productName}</h2>
											<button
												onClick={() => handleOpenModal(item.product._id)}>
												delete
											</button>
											<button
												style={{ color: "green", backgroundColor: "red" }}
												onClick={() => handleInputItemId(item.product._id)}>
												Edit Produc
											</button>
										</>
									)}
								</div>
							);
						})}
						{producData.map((itemProduc) => (
							<div style={{ marginTop: "100px" }} key={itemProduc._id}>
								<img src={itemProduc.photoUrl} alt={itemProduc.productName} />
								<h2>{itemProduc.productName}</h2>
							</div>
						))}
					</div>
				</div>
			</div>
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
				{openModal && createPortal(
					<>
					<Modal>
						<button onClick={() => setOpenModal(false)}>Noo</button>
						<button onClick={() => postProducFavorite(itemIdFavorite)}>delete</button>
					</Modal>
					</>,
					document.getElementById('modal') as any
				)}
		</>
	);
};

export default FaveriProductsPages;
