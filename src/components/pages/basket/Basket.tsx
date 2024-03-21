import { useGetBasketQuery } from "../../../redux/api/basket/Basket";
import scss from "./Basket.module.scss";

const Basket = () => {
	const { data } = useGetBasketQuery();
	return (
		<div className={scss.basketPages}>
			<div className="container">
				<div className={scss.content}>
					{data?.map((item) => (
						<>
							<div className={scss.basketCard} key={item._id}>
								<img src={item.product.photoUrl} alt={item.productName} />
								<h2>{item.product.productName}</h2>
								<p>{item.product.price} $</p>
								<div className={scss.productAddPluesAndMinues}>
									<button>+</button>
									<p>{item.product.quantity} шт</p>
									<button>-</button>
								</div>
							</div>
							<div className={scss.buttonDivAddProduct}>
								<button>Купить</button>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Basket;
