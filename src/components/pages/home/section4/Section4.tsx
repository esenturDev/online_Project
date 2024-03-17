import scss from "./Section4.module.scss";

const Section4 = () => {
	return (
		<div className={scss.section4}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.producDiv}>
						<div className={scss.producContentDiv}>
							<div className={scss.textsDiv}>
								<h2>MacBook Air 15.3"</h2>
								<p>Поразительно тонкий и быстрый.</p>
							</div>
							<img
								src="https://www.istore.kg/media/main_page/mba15-midnight-gallery1-202306_vNtkpuE.webp"
								alt="logo"
							/>
						</div>
						<a href="#">выбрать</a>
					</div>
					<div className={scss.producDiv}>
						<div className={scss.producContentDiv}>
							<div className={scss.textsDiv}>
								<h2>Pitaka</h2>
								<p>Скидки на чехлы Pitaka !</p>
							</div>
							<img
								src="https://www.istore.kg/media/main_page/pitaka1_Tfxmnjo.webp"
								alt="logo"
							/>
						</div>
						<a href="#">выбрать</a>
					</div>
					<div className={scss.producDiv}>
						<div className={scss.producContentDiv}>
							<div className={scss.textsDiv}>
								<h2>Watch Ultra 2</h2>
								<p>Приключения ждут. выбрать</p>
							</div>
							<img
								src="https://www.istore.kg/media/main_page/12345.webp"
								alt="logo"
							/>
						</div>
						<a href="#">выбрать</a>
					</div>
					<div className={scss.producDiv}>
						<div className={scss.producContentDiv}>
							<div className={scss.textsDiv}>
								<h2>Apple TV 4K</h2>
								<p> Киношный во всех смыслах.</p>
							</div>
							<img
								src="https://www.istore.kg/media/main_page/apple-tv-4k-2022_ABsQgkR.webp"
								alt="logo"
							/>
						</div>
						<a href="#">выбрать</a>
					</div>
					<div className={scss.producDiv}>
						<div className={scss.producContentDiv}>
							<div className={scss.textsDiv}>
								<h2>HomePod</h2>
								<p> Глубокое звучание.</p>
							</div>
							<img
								src="https://www.istore.kg/media/main_page/homepod-select-midnight-202210.webp"
								alt="logo"
							/>
						</div>
						<a href="#">выбрать</a>
					</div>
					<div className={scss.producDiv}>
						<div className={scss.producContentDiv}>
							<div className={scss.textsDiv}>
								<h2>AirTag</h2>
								<p>Находчивые штучки.</p>
							</div>
							<img
								src="https://www.istore.kg/media/main_page/airtag-key_UydLkmV_DFLucfg.webp"
								alt="logo"
							/>
						</div>
						<a href="#">выбрать</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section4;
