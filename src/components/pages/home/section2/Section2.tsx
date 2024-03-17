import { useDeleteProductsMutation, useGetProductsQuery } from "../../../../redux/api/product";
import scss from "./Section2.module.scss";

export const Section2 = () => {
	const { data } = useGetProductsQuery();
	const [deleteProducts] =  useDeleteProductsMutation();
	const handleDeleteProducts = async (id: number) => {
		await deleteProducts(id)
	}
	return (
		<div className={scss.section2}>
			<div className="container">
				<div className={scss.content}>
					{data?.map((item) => (
						<div key={item._id}>
							<img src={item.photoUrl} alt={item.productName} />
							<h2>{item.productName}</h2>
							<p>{item.price}</p>
							<button onClick={() => handleDeleteProducts(item._id)}>delete</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
