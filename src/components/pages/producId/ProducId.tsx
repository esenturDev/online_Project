import { useNavigate, useParams } from "react-router";
import scss from "./ProducId.module.scss";
import { useGetItenIdProducQuery } from "../../../redux/api/product";
const ProducId = () => {
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
						<img src={data?.photoUrl} alt="logo" />
						<div className={scss.contentProduc}>
							<div className={scss.products}>
								<p onClick={() => navigate("/home")}>назад</p>
								<p className={scss.p}>{data?.productName}</p>
							</div>
							<div className={scss.productsColor}>
                <p>Цвет</p>
                <div>
                  <div>

                  </div>
                  <div>

                  </div>
                  <div>

                  </div>
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
