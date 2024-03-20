import { useGetBasketQuery } from "../../../redux/api/basket/Basket";
import scss from "./Basket.module.scss";

const Basket = () => {
	const {data} =  useGetBasketQuery();
	return (
		<div className={scss.basketPages}>
			<div className="container">
				<div className={scss.content}>
					{data?.map((item) => (
						<div key={item._id}>
							<img src={item.photoUrl} alt={item.productName} />
							<p>{}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Basket;
