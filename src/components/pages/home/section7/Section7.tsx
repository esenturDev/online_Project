import scss from "./Section7.module.scss";

const Section7 = () => {
	return (
		<div className={scss.section7}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.section7DivContent1}>
						<div className={scss.div1}>
							<img
								src="https://istore.kg/static/_image/istore_logo.png"
								alt="logo store photo"
							/>
							<p>Магазин техники Apple в Бишкеке</p>
						</div>
						<div className={scss.inconsWebSite}>
							<img
								src="https://istore.kg/static/img/instagram-filled.svg"
								alt="logo"
							/>
							<img
								src="https://istore.kg/static/img/facebook-filled.svg"
								alt="logo"
							/>
							<img
								src="https://istore.kg/static/img/youTube-filled.svg"
								alt="logo"
							/>
						</div>
						<div className={scss.div1}>
							<h3>Режим работы</h3>
							<p>Пн - Вс 10:00 - 20:00</p>
						</div>
					</div>
          <div className={scss.section7DivContent2}>
            
          </div>
				</div>
			</div>
		</div>
	);
};

export default Section7;
