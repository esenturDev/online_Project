import scss from "./Section1.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const array = [
	{
		img: "https://www.istore.kg/media/mainpageslider/iPhone-15-Pro-PC.webp",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/Apple-Watch-Series-9.webp",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/Apple-Watch-Ultra-2-PC_ZXmtH5k.webp",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/macbook_2650x680.jpg",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/IMG_1678.JPG",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/iPhone-15-PC.webp",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/MacBook_Air_-_3.png",
	},
];
export const Section1 = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 1, spacing: 5 },
			},
			"(min-width: 700px)": {
				slides: { perView: 1, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 1, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	});
	return (
		<section className={scss.section1}>
			<div ref={sliderRef} className="keen-slider">
				{array.map((item, index) => (
					<div
						key={index}
						className="keen-slider__slide number-slide1">
						<div className={scss.cards}>
							<img src={item.img} alt="logo" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
