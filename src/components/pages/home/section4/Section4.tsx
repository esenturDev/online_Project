import scss from "./Section4.module.scss";

const Section4 = () => {
	return (
		<div className={scss.section4}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.section4DivPhotos}>
						<img
							src="https://www.istore.kg/media/main_page/ipadprom2_vq1Wna2.webp"
							alt="logo"
						/>
						<img
							src="https://www.istore.kg/media/main_page/macbookair15_TBW9s3n.webp"
							alt="logo"
						/>
					</div>
					<div className={scss.section4DivPhotos}>
						<img
							src="https://www.istore.kg/media/main_page/istorecard_HR5kwV0.webp"
							alt="logo"
						/>
            <img src="https://www.istore.kg/media/main_page/airpodspro_RELgGXl.webp" alt="logo" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section4;
