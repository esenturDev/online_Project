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
						<div className={scss.contents}>
							<h2>Продукция</h2>
							<p>Mac</p>
							<p>iPad</p>
							<p>iPhone</p>
							<p>Watch</p>
							<p>Гаджеты</p>
						</div>
						<div className={scss.contents}>
							<h2>10 лет с Вами!</h2>
							<p>О нас</p>
							<p>Обратная связь</p>
						</div>
						<div className={scss.contents}>
							<h2>Контакты</h2>
							<div className={scss.iconAndtext}>
								<img src="https://istore.kg/static/img/pin.svg" alt="logo" />
								<a href="#">пр. Манаса, 40 (пер. ул. Киевская)</a>
							</div>
							<div className={scss.iconAndtext}>
								<img src="https://istore.kg/static/img/phone.svg" alt="logo" />
								<a href="#">
									+996 (555) 802 000 <br /> +996 (505) 802 000
								</a>
							</div>
							<div className={scss.iconAndtext}>
								<img src="https://istore.kg/static/img/mail.svg" alt="logo" />
								<a href="#">office@istore.kg</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section7;
