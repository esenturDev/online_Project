import { useNavigate, useParams } from "react-router";
import scss from "./ProducId.module.scss";
import { useGetItenIdProducQuery } from "../../../redux/api/product";
import vidoeIsIphone from "../../../assets/vid/large_2x.mp4";
import vidoeIsIphone2 from "../../../assets/vid/large_2x (1).mp4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import {
	usePatchBasketMinuesMutation,
	usePatchBasketMutation,
	usePutPluesMutation,
} from "../../../redux/api/basket/Basket";
const ProducId = () => {
	const [buyProduc] = usePutPluesMutation();
	const [patchBasketMinues] = usePatchBasketMinuesMutation();
	const [patchBasket] = usePatchBasketMutation();

	const handlePluesProduc = async (id: number) => {
		const newProduc = {
			quantityToDecrease: -1,
		};
		toast.success("🦄 Product quantity added successfully!");
		await patchBasket({ newProduc, id });
	};

	const handleProducMinues = async (id: number) => {
		const newProduct = {
			quantityToDecrease: +1,
		};
		toast.success("🦄 Product quantity decline successfully!");
		await patchBasketMinues({ newProduct, id });
	};

	const handleProducBuy = async (id: number) => {
		const newProduc = {
			quantityToDecrease: 1,
		};
		toast.success("🦄 Product purchased successfully!");
		await buyProduc({ newProduc, id });
	};
	const [isPhotoProducResultColor1, setIsPhotoProducResultColor1] =
		useState(true);
	const [isPhotoProducResultColor2, setIsPhotoProducResultColor2] =
		useState(false);
	const [isPhotoProducResultColor3, setIsPhotoProducResultColor3] =
		useState(false);
	const [buttonActive, setButtonActive] = useState<boolean>(true);
	const [buttonActive1, setButtonActive1] = useState<boolean>(false);
	const [buttonActive2, setButtonActive2] = useState<boolean>(false);
	const navigate = useNavigate();
	const { id } = useParams();
	console.log(id);
	const { data } = useGetItenIdProducQuery(id!);
	// console.log(itemIdProduc);
	console.log(data);

	return (
		<div className={scss.ProducId}>
			<ToastContainer />
			<div className="container">
				<div className={scss.content}>
					<div className={scss.producItemId}>
						{isPhotoProducResultColor1 === true ? (
							<img src={data?.photoUrl} alt="logo" />
						) : null}
						{isPhotoProducResultColor2 === true ? (
							<img
								src="https://cdn02.plentymarkets.com/zj90a4jbte75/item/images/214210/full/RTP061413.jpg"
								alt="logo"
							/>
						) : null}
						{isPhotoProducResultColor3 === true ? (
							<img
								src="https://i.ebayimg.com/images/g/K2UAAOSwV4NjUY97/s-l400.jpg"
								alt="logo"
							/>
						) : null}
						<div className={scss.contentProduc}>
							<div className={scss.products}>
								<p onClick={() => navigate("/home")}>назад</p>
								<p className={scss.p}>{data?.productName}</p>
							</div>
							<div className={scss.productsColor}>
								<p>Цвет</p>
								<div className={scss.divPhotosColor}>
									<div
										onClick={() => {
											setIsPhotoProducResultColor1(true);
											setIsPhotoProducResultColor2(false);
											setIsPhotoProducResultColor3(false);
										}}
										className={scss.divPhotoColorResult1}></div>
									<div
										onClick={() => {
											setIsPhotoProducResultColor2(true);
											setIsPhotoProducResultColor1(false);
											setIsPhotoProducResultColor3(false);
										}}
										className={scss.divPhotoColorResult2}></div>
									<div
										onClick={() => {
											setIsPhotoProducResultColor3(true);
											setIsPhotoProducResultColor1(false);
											setIsPhotoProducResultColor2(false);
										}}
										className={scss.divPhotoColorResult3}></div>
								</div>
							</div>
							<div className={scss.memoryIphone}>
								<p>Память</p>
								<div className={scss.memoryButtons}>
									<button
										onClick={() => {
											setButtonActive(true);
											setButtonActive1(false);
											setButtonActive2(false);
										}}
										className={
											buttonActive === true
												? `${scss.buttonactive}`
												: `${scss.buttonNoActive}`
										}>
										128 gb
									</button>
									<button
										onClick={() => {
											setButtonActive1(true);
											setButtonActive(false);
											setButtonActive2(false);
										}}
										className={
											buttonActive1 === true
												? `${scss.buttonactive}`
												: `${scss.buttonNoActive}`
										}>
										256 gb
									</button>
									<button
										onClick={() => {
											setButtonActive2(true);
											setButtonActive(false);
											setButtonActive1(false);
										}}
										className={
											buttonActive2 === true
												? `${scss.buttonactive}`
												: `${scss.buttonNoActive}`
										}>
										512 gb
									</button>
									<button onClick={() => handlePluesProduc(data?._id)}>
										+
									</button>
									<button onClick={() => handleProducMinues(data?._id)}>
										-
									</button>
								</div>
							</div>
							<div className={scss.producPriceDiv}>
								<p>{data?.price} $</p>
								<p>{data?.quantity} шт</p>
								<div className={scss.buttonDiv}>
									<button
										className={scss.buttonisAddProduc}
										onClick={() => handleProducBuy(data?._id)}>
										Купить
									</button>
									<button>Оформить в кредит</button>
									<button>Забронировать</button>
								</div>
							</div>
						</div>
					</div>
					<div className={scss.divContents2}>
						<h2>Описание</h2>
						<div className={scss.GetInformedDivIsPhone}>
							<h3>Цвет насквозь и насквозь. Прочный со всех сторон .</h3>
							<iframe src={vidoeIsIphone}></iframe>
						</div>
						<div className={scss.divRecomentProducts}>
							<div className={scss.productsDiv}>
								<p>
									Получите скидку при покупке <br /> iPhone 14 Pro или 14 Pro
									Max,
									<br /> воспользовавшись услугой Trade-In.
								</p>
								<a href="#">Подробнее</a>
								<img
									src="https://www.istore.kg/media/documents/2023-08-28/trade_in__fh1d4l94tiye_large_2x.jpg"
									alt="logo"
								/>
							</div>
							<div className={scss.productsDiv}>
								<p>
									Воспользуйтесь нашей <br /> накопительной картой. <br />{" "}
									Кэшбэк с каждой покупки.
									<br /> воспользовавшись услугой Trade-In.
								</p>
								<a href="#">Подробнее</a>
								<img
									className={scss.img}
									src="https://www.istore.kg/media/documents/2023-08-28/istore.svg"
									alt="logo"
								/>
							</div>
							<div className={scss.productsDiv}>
								<p>
									Оформите в рассрочку. <br /> Выгодные условия в <br /> Банках
									«MBANK» и <br />
									«DemirBank»
									<br /> воспользовавшись услугой Trade-In.
								</p>
								<a href="#">Подробнее</a>
								<img
									src="https://www.istore.kg/media/documents/2023-08-28/visa-cards_xkme4G1.webp"
									alt="logo"
								/>
							</div>
						</div>
						<div className={scss.recomedProducIsPhoneDiv}>
							<p>Чип A16 Bionic. Проверенный на практике мощный процессор.</p>
							<iframe src={vidoeIsIphone2}></iframe>
						</div>
					</div>
				</div>
				T
			</div>
		</div>
	);
};

export default ProducId;
