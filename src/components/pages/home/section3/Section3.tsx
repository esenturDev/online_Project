import scss from "./Section3.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const array = [
	{
		img: "https://www.istore.kg/media/main_page/14-pro-series_UPRWChp.webp",
	},
	{
		img: "https://www.istore.kg/media/main_page/15-pink.webp",
	},
	{
		img: "https://www.istore.kg/media/main_page/intro.webp",
	},
	{
		img: "https://www.istore.kg/media/main_page/ultra-2.webp",
	},
];
export const Section3 = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 1, spacing: 5 },
			},
			"(min-width: 700px)": {
				slides: { perView: 2, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 3, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	});
	return (
		<div className={scss.section3}>
			<div className="container">
				<div className={scss.content}>
					<div ref={sliderRef} className="keen-slider">
						{array.map((item, index) => (
							<div key={index} className="keen-slider__slide number-slide1">
								<div className={scss.cards}>
									<img src={item.img} alt="logo" />
								</div>
							</div>
						))}
					</div>
					<p style={{ color: "black" }}>section3</p>
				</div>
			</div>
		</div>
	);
};
