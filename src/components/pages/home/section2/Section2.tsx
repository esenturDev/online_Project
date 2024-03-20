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
import iconActiveHeart from "../../../../assets/photos/Vector (9).png";
import { useState } from "react";
import { Input } from "../../../Ul/input/Input";
import heartIcon from "../../../../assets/heart-3-line (1).svg";
export const Section2 = () => {
	const { data } = useGetProductsQuery();
	const [isheartIconStyle, setIsheartIconStyle] = useState<boolean | number>(
		false
	);
	const [style, setStyle] = useState<boolean>(true);
	const [styleNoo, setStyleNoo] = useState<string>("");
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
	};

	const handleEdit = async (_id: number) => {
		await editProducts({ _id, productName, price, quantity, photoUrl });
		setItemIdProducEdit(false);
	};

	const handleEditProduc = (id: number) => {
		setItemIdProducEdit(id);
	};

	// useEffect(() => {
	// 	const isheartIconStyleResult = data?.find((el) => el.isFavorite === true);
	// 	if (isheartIconStyleResult) {
	// 		setIsheartIconStyle(true);
	// 	} else {
	// 		setIsheartIconStyle(false);
	// 	}
	// }, [postProducFavorite]);

	const foverite = (id: number) => {
		setIsheartIconStyle(id);
		// setStyle(true);
	};

	return (
		<div className={scss.section2}>
			<div className="container">
				<div className={scss.content}>
					{data?.map((item) => (
						<div className={scss.divCards} key={item._id}>
							{item._id === itemIdProducEdit ? (
								<>
									<div>
										<Input
											type="text"
											value={productName}
											setData={setProductName}
										/>
										<Input type="text" value={price} setData={setPrice} />
										<Input type="text" value={quantity} setData={setQuantity} />
										<Input type="url" value={photoUrl} setData={setPhotoUrl} />
										<button onClick={() => setItemIdProducEdit(false)}>
											Cancel
										</button>
										<button onClick={() => handleEdit(item._id)}>Save</button>
									</div>
								</>
							) : (
								<>
									<Link className={scss.link} to={`/home/product/${item._id}`}>
										<img src={item.photoUrl} alt={item.productName} />
									</Link>
									<h2>{item.productName}</h2>
									<p>{item.price}</p>
									<p>{item.quantity}</p>
									<div className={scss.buttonsDiv}>
										<button onClick={() => handleDeleteProducts(item._id)}>
											delete
										</button>
										{isheartIconStyle === item._id &&
										item.isFavorite === true ? (
											<img
												onClick={() => {
													postProducFavorite(item._id);
													foverite(item._id);
													// setStyle(true);
												}}
												src={iconNooActiveHeart}
												alt="logo"
											/>
										) : (
											<img
												src={iconActiveHeart}
												alt="logo"
												onClick={() => {
													postProducFavorite(item._id);
													// setStyle(false);
													setIsheartIconStyle(false);
												}}
											/>
										)}
										{/* <button onClick={() => postProducFavorite(item._id)}>
											
										</button> */}
										<>
											<img
												onClick={() => handleEditProduc(item._id)}
												src={logo}
												alt="logo is Edit"
											/>
											<img
												onClick={() => postBasket(item._id)}
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
		</div>
	);
};
