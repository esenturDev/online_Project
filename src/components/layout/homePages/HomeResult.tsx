import scss from "./HomeResult.module.scss";
import logo from "../../../assets/photos/trust_crypt2 1.png";
import logo2 from "../../../assets/photos/Country.png";
import logo3 from "../../../assets/photos/Frame right (photo).png";
const HomeResult = () => {
	return (
		<div className={scss.homeResult}>
			<div className="container">
				<div className={scss.content}>
					<header>
						<div className={scss.divContent1}>
							<img src={logo} alt="logo" />
							<span>Trustcrypt</span>
						</div>
						<nav>
							<ul>
								<li>Главная</li>
								<li>Продукты</li>
								<li>Блог</li>
								<li>Контакты</li>
								<div className={scss.ulDiv2}>
									<img src={logo2} alt="logo" />
									<select name="" id="">
										<option value="RU">RU</option>
										<option value="RU">ENG</option>
										<option value="RU">KGZ</option>
									</select>
								</div>
							</ul>
						</nav>
					</header>
					<main>
						<section className={scss.section1}>
							<div className={scss.section1ContentDiv}>
								<h2>
									Передовая кибербезопасность <br /> для любой компании{" "}
								</h2>
								<p>
									Защитите ваш бизнес от всех видов киберугроз <br /> с помощью
									решений мирового класса.{" "}
								</p>
								<button>Подробнее</button>
							</div>
							<img src={logo3} alt="photos" />
						</section>
					</main>
					<footer>footer</footer>
				</div>
			</div>
		</div>
	);
};

export default HomeResult;
