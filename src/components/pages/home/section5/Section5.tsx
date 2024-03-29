import scss from "./Section5.module.scss";

export const Section5 = () => {
	return (
		<section className={scss.section4}>
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
						<img
							src="https://www.istore.kg/media/main_page/airpodspro_RELgGXl.webp"
							alt="logo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
