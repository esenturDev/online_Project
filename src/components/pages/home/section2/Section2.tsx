import { Link } from "react-router-dom";
import { usePostProducFavoriteMutation } from "../../../../redux/api/FavoriteProduct/FavoriteProduct";
import { usePostBasketMutation } from "../../../../redux/api/basket/Basket";
import logo from "../../../../assets/photos/Vector (7).png";
import {
	useDeleteProductsMutation,
	useEditProducMutation,
	useGetProductsQuery,
} from "../../../../redux/api/product";
import scss from "./Section2.module.scss";
import iconNooActiveHeart from "../../../../assets/photos/Vector (9).png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import iconActiveHeart from "../../../../assets/photos/Vector (10).png";
import { useState } from "react";
import { Input } from "../../../Ul/input/Input";
// import heartIcon from "../../../../assets/heart-3-line (1).svg";
import iconDelete from "../../../../assets/photos/Vector (8).png";
export const Section2 = () => {
	const { data } = useGetProductsQuery();
	// const [isheartIconStyle, setIsheartIconStyle] = useState<boolean | number>(
	// 	false
	// );
	// const [style, setStyle] = useState<boolean>(true);
	// const [styleNoo, setStyleNoo] = useState<string>("");
	const [editProducts] = useEditProducMutation();
	const [itemIdProducEdit, setItemIdProducEdit] = useState<number | boolean>(
		false
	);

	const [deleteProducts] = useDeleteProductsMutation();
	const [postBasket] = usePostBasketMutation();
	const [postProducFavorite] = usePostProducFavoriteMutation();
	const [productName, setProductName] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [quantity, setQuantity] = useState<string>("");
	const [photoUrl, setPhotoUrl] = useState<string>("");
	const handleDeleteProducts = async (id: number) => {
		await deleteProducts(id);
		toast.success("🦄 Successfully delete Product");
	};

	const handleEdit = async (_id: number) => {
		await editProducts({ _id, productName, price, quantity, photoUrl });
		setItemIdProducEdit(false);
		toast.success("🦄 Successful The product has been updated!");
	};

	const handleEditProduc = (id: number) => {
		setItemIdProducEdit(id);
	};

	// const foverite = (id: number) => {
	// 	setIsheartIconStyle(id);
	// };

	return (
		<>
			<ToastContainer />
			<section className={scss.section2}>
				<div className="container">
					<div className={scss.content}>
						{data?.map((item) => (
							<div className={scss.divCards} key={item._id}>
								{item._id === itemIdProducEdit ? (
									<>
										<div className={scss.inputsDiv}>
											<Input
												type="text"
												value={productName}
												setData={setProductName}
											/>
											<Input type="text" value={price} setData={setPrice} />
											<Input
												type="text"
												value={quantity}
												setData={setQuantity}
											/>
											<Input
												type="url"
												value={photoUrl}
												setData={setPhotoUrl}
											/>
											<button className={scss.buttonForms2} onClick={() => setItemIdProducEdit(false)}>
												Cancel
											</button>
											<button className={scss.buttonForms2} onClick={() => handleEdit(item._id)}>Save</button>
										</div>
									</>
								) : (
									<>
										<Link
											className={scss.link}
											to={`/home/product/${item._id}`}>
											<img src={item.photoUrl} alt={item.productName} />
										</Link>
										<h2>{item.productName}</h2>
										<p>{item.price}</p>
										<p>{item.quantity}</p>
										<div className={scss.buttonsDiv}>
											<img
												onClick={() => handleDeleteProducts(item._id)}
												src={iconDelete}
												alt="Icon Delete"
											/>

											{item.isFavorite === true ? (
												<img
													onClick={() => {
														postProducFavorite(item._id);
														toast.success(
															"🦄 Successfully. added Product favorites!"
														);
													}}
													src={iconActiveHeart}
													alt="logo"
												/>
											) : (
												<img
													onClick={() => {
														postProducFavorite(item._id);
														toast.success(
															"🦄 The item was taken from the benefit of the Chosen One!"
														);
													}}
													src={iconNooActiveHeart}
													alt="logo"
												/>
											)}

											<>
												<img
													onClick={() => handleEditProduc(item._id)}
													src={logo}
													alt="logo is Edit"
												/>
												<img
													onClick={() => {
														postBasket(item._id)
														toast.success(
															"🦄 "
														);
													}}
													src="https://www.istore.kg/static/img/union.svg"
													alt="logo"
												/>
											</>
										</div>
									</>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
