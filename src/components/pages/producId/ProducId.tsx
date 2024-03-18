import { useNavigate, useParams } from "react-router";
import scss from "./ProducId.module.scss";
import { useGetItenIdProducQuery } from "../../../redux/api/product";
import {  useState } from "react";
const ProducId = () => {
	const [isPhotoProducResultColor1, setIsPhotoProducResultColor1] =
		useState(true);
	const [isPhotoProducResultColor2, setIsPhotoProducResultColor2] =
		useState(false);
	const [isPhotoProducResultColor3, setIsPhotoProducResultColor3] =
		useState(false);
  
	const navigate = useNavigate();
	const { id } = useParams();
	console.log(id);
	const { data } = useGetItenIdProducQuery(id!);
	// console.log(itemIdProduc);
	console.log(data);



	return (
		<div className={scss.ProducId}>
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
									<button>128 gb</button>
									<button>256 gb</button>
									<button>512 gb</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProducId;
