/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProducFavoriteQuery } from "../../../redux/api/FavoriteProduct/FavoriteProduct";
import scss from "./FaveriProductsPages.module.scss";

const FaveriProductsPages = () => {
	const { data } = useGetProducFavoriteQuery();
  // const filtred = data?.filter((itemFilter) => itemFilter.productName )

	return (
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
					{data?.map((item: any) => {
						// const { productName, photoUrl } = item.product;
						return (
							<div key={item._id}>
								<img
									src={item.product.photoUrl}
									alt={item.product.productName}
								/>
								<h2>{item.product.productName}</h2>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FaveriProductsPages;
