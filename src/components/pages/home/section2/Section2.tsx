import { Link } from "react-router-dom";
import { usePostProducFavoriteMutation } from "../../../../redux/api/FavoriteProduct/FavoriteProduct";
import { usePostBasketMutation } from "../../../../redux/api/basket/Basket";
import {
	useDeleteProductsMutation,
	useGetProductsQuery,
} from "../../../../redux/api/product";
import scss from "./Section2.module.scss";
export const Section2 = () => {
	const { data } = useGetProductsQuery();
	const [deleteProducts] = useDeleteProductsMutation();
	const [postBasket] = usePostBasketMutation();
	const [postProducFavorite] = usePostProducFavoriteMutation();
	const handleDeleteProducts = async (id: number) => {
		await deleteProducts(id);
	};
	return (
		<div className={scss.section2}>
			<div className="container">
				<div className={scss.content}>
					{data?.map((item) => (
						<div className={scss.divCards} key={item._id}>
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
								<button onClick={() => postProducFavorite(item._id)}>
									add Favorite
								</button>
								<>
									<img onClick={() => postBasket(item._id)} src="https://www.istore.kg/static/img/union.svg" alt="logo" />
								</>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
