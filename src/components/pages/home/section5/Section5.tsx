import scss from "./Section5.module.scss";

export const Section5 = () => {
	return (
		<div className={scss.section5}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.textsDiv}>
						<h2>Статьи и новости</h2>
						<p>Оставайтесь всегда в курсе событий</p>
						<a href="#">подробнее</a>
					</div>
					<div className={scss.divContentsPhotoAndTexts}>
						<div className={scss.photosAndTextDiv}>
							<img
								src="https://www.istore.kg/media/articles/quick-start.webp"
								alt="photo is phone"
							/>
							<div className={scss.divTexts}>
								<p>15.12.20</p>
								<h2>Функция «Быстрое начало»</h2>
								<p className={scss.p}>
									Использование функции «Быстрое начало» <br /> для переноса
									данных на новое устройство <br /> iPhone, iPad или iPod touch
								</p>
                <a href="#">подробнее</a>
							</div>
						</div>
						<div className={scss.photosAndTextDiv}>
							<img
								src="https://www.istore.kg/media/articles/transfer_V3fDMQZ.webp"
								alt="photo is phone"
							/>
							<div className={scss.divTexts}>
								<p>15.12.20</p>
								<h2>Функция «Быстрое начало»</h2>
								<p className={scss.p}>
									Использование функции «Быстрое начало» <br /> для переноса
									данных на новое устройство <br /> iPhone, iPad или iPod touch
								</p>
                <a href="#">подробнее</a>
							</div>
						</div>
						<div className={scss.photosAndTextDiv}>
							<img
								src="https://www.istore.kg/media/articles/backupss.webp"
								alt="photo is phone"
							/>
							<div className={scss.divTexts}>
								<p>15.12.20</p>
								<h2>Функция «Быстрое начало»</h2>
								<p className={scss.p}>
									Использование функции «Быстрое начало» <br /> для переноса
									данных на новое устройство <br /> iPhone, iPad или iPod touch
								</p>
                <a href="#">подробнее</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
