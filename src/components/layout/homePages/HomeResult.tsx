import scss from "./HomeResult.module.scss";
import logo from "../../../assets/photos/trust_crypt2 1.png";
import logo2 from "../../../assets/photos/Country.png";
import logo3 from "../../../assets/photos/Frame right (photo).png";
import logo4 from "../../../assets/photos/Slides.png";
import logo5 from "../../../assets/photos/Rectangle 67.png";
import logo6 from "../../../assets/photos/Rectangle 68.png";
import logo7 from "../../../assets/photos/Group 1176.png";
import logo8 from "../../../assets/photos/Group 1176 (1).png";
import logo9 from "../../../assets/photos/Icon_01.png";
import logo10 from "../../../assets/photos/Icon_check.png";
import logo11 from "../../../assets/photos/Protect_icon.png";
import { useNavigate } from "react-router";
const HomeResult = () => {
	const navigate = useNavigate();

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
						<div>
							<button onClick={() => navigate("/login")}>Login</button>
						</div>
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
						<section className={scss.section2}>
							<div className={scss.section1ContentDiv}>
								<h2>
									Кибербезопасность нового <br /> поколения
								</h2>
								<p>
									Масштабируемая защита от самых сложных <br /> киберугроз,
									учитывающая потребности <br /> вашего бизнеса.
								</p>
							</div>
							<img src={logo4} alt="photos" />
						</section>
						<section className={scss.section3}>
							<div className={scss.section3Div1}>
								<img src={logo5} alt="photo is code" />
								<p>
									Нашу жизнь невозможно представить без компьютеров, смартфонов,
									а значит и <br /> нужного для их работы ПО. Всего этого не
									было бы без кодинга. Хотя это не новый <br /> термин, но люди
									всё еще плохо понимают, что он означает.
								</p>
								<p>
									Издание Business Insider опубликовало краткое руководство по
									кодингу. Мы <br /> подготовили адаптированный перевод
									материала.
								</p>
							</div>
							<div className={scss.divContentsAndPhotos}>
								<div className={scss.cards}>
									<img src={logo6} alt="logo6" />
									<div className={scss.cardsDivContent}>
										<h2>
											Следующая часть Mass <br /> Effect перешла в ранню...
										</h2>
										<p>
											Студия BioWare поделилась <br /> прогрессом создания
											следующей <br /> игры из серии Mass Effect...
										</p>
										<button>Просмотреть</button>
									</div>
								</div>
								<div className={scss.cards}>
									<img src={logo7} alt="logo6" />
									<div className={scss.cardsDivContent}>
										<h2>
											Что такое фишинг и как от <br /> него защититься?
										</h2>
										<p>
											Первые фишинговые атаки появились <br /> в конце прошлого
											века, а сейчас, по <br /> оценкам Google, жертвами
											фишига...
										</p>
										<button>Просмотреть</button>
									</div>
								</div>
								<div className={scss.cards}>
									<img src={logo8} alt="logo6" />
									<div className={scss.cardsDivContent}>
										<h2>
											Что такое <br /> кибербезопасность?
										</h2>
										<p>
											Кибербезопасность (ее иногда <br /> называют компьютерной{" "}
											<br />
											безопасностью) – это совокупность...
										</p>
										<button>Просмотреть</button>
									</div>
								</div>
							</div>
						</section>
					</main>
					<footer>
						<section className={scss.sectionFooter}>
							<h2>Наши продукты направлены на вашу безопасность. </h2>
							<p>
								Мы придерживаемся в своей работе простого принципа: <br />
								детектировать и блокировать любую вредоносную атаку.
							</p>
							<div className={scss.footerDivCards}>
								<div className={scss.divCard}>
									<img src={logo9} alt="logo9" />
									<p>Анонимность</p>
								</div>
								<div>
									<img src={logo10} alt="logo10" />
									<p>
										Проверка на наличие <br /> угроз
									</p>
								</div>
								<div>
									<img src={logo11} alt="logo11" />
									<p>Обнаружение и <br /> предотвращение аттак</p>
								</div>
							</div>
						</section>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default HomeResult;
