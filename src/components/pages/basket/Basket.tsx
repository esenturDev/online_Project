import {
	useGetBasketQuery,
	usePatchBasketMinuesMutation,
	usePatchBasketMutation,
	usePutPluesMutation,
} from "../../../redux/api/basket/Basket";
import scss from "./Basket.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Basket = () => {
	const { data } = useGetBasketQuery();
	const [buyProduc] = usePutPluesMutation();
	const [patchBasketMinues] = usePatchBasketMinuesMutation();
	const [patchBasket] = usePatchBasketMutation();

	const handleProducBuy = async (id: number) => {
		const newProduc = {
			quantityToDecrease: 1,
		};
		await buyProduc({ newProduc, id });
		toast.success("🦄 Product purchased successfully!");
	};

	const handlePluesProduc = async (id: number) => {
		const newProduc = {
			quantityToDecrease: -1,
		};
		toast.success("🦄 Product quantity added successfully!");
		await patchBasket({ newProduc, id });
	};

	const handleBasketMinues = async (id: number) => {
		const newProduct = {
			quantityToDecrease: +1,
		};
		toast.success("🦄 Product quantity decline successfully!");
		await patchBasketMinues({ newProduct, id });
	};
	return (
		<div className={scss.basketPages}>
			<ToastContainer />
			<div className="container">
				<div className={scss.content}>
					{data?.map((item) => (
						<>
							<div className={scss.basketCard} key={item._id}>
								<img src={item.product.photoUrl} alt={item.productName} />
								<h2>{item.product.productName}</h2>
								<p>{item.product.price} $</p>
								<div className={scss.productAddPluesAndMinues}>
									<button onClick={() => handlePluesProduc(item.product._id)}>
										+
									</button>
									<p>{item.product.quantity} шт</p>
									<button onClick={() => handleBasketMinues(item.product._id)}>
										-
									</button>
								</div>
							</div>
							<div className={scss.buttonDivAddProduct}>
								<button onClick={() => handleProducBuy(item.product._id)}>
									Купить
								</button>
							</div>
						</>
					))}
				</div>
				t
			</div>
		</div>
	);
};

export default Basket;
