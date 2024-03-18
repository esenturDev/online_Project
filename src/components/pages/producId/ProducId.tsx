import { useParams } from "react-router";
import scss from "./ProducId.module.scss";
import { useGetItenIdProducQuery } from "../../../redux/api/product";
const ProducId = () => {
	const { id } = useParams();
	console.log(id);
  const {data} =  useGetItenIdProducQuery(id!);
  // console.log(itemIdProduc);
  console.log(data);
  
  
	return (
		<div className={scss.ProducId}>
			<div className="container">
				<div className={scss.content}>
          <div>
            <img src={data?.photoUrl} alt="logo" />
            <p>{data?.price}</p>
            {/* {data?.map((item) => (
              <div key={item._id}>
                <img src={item.photoUrl} alt={item.productName} />
                <h2 style={{color: 'black'}}>{item.productName}</h2>
              </div>
            ))} */}
          </div>
        </div>
			</div>
		</div>
	);
};

export default ProducId;
