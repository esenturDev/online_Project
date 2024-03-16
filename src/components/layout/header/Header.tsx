/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { createPortal } from "react-dom";
import Modal from "../../Ul/modal/Modal";
import logo1 from "../../../assets/photos/Button - Войти (1).png";
import logo2 from "../../../assets/photos/Button - Избранное (2).png";

export const Header: FC<{
	setIsStyleResult: () => void;
}> = ({ setIsStyleResult }) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	return (
		<>
			<header>
				<div className="container">
					<div className={scss.content}>
						<img
							src="https://www.istore.kg/static/_image/istore_logo.svg"
							alt="logo"
						/>
						<p>
							Магазин техники <br /> Apple в Бишкеке
						</p>
						<p>
							пр. Манаса, 40 (пер. ул. Киевская) <br />
							Пн - Вс 10:00 - 20:00
						</p>
						<p>
							+996 (555) 802 000 <br />
							+996 (505) 802 000
						</p>
						<div className={scss.buttons}>
							<button>
								<img src={logo1} alt="logo1" />
							</button>
							<button>
								<img src={logo2} alt="logo1" />
							</button>
							<button>
								<img
									className={scss.img}
									src="https://www.istore.kg/static/img/union.svg"
									alt="logo1"
								/>
								<p className={scss.p}>Корзина</p>
							</button>
						</div>
					</div>
				</div>
			</header>
			{isOpenModal &&
				createPortal(
					<Modal>
						<h1>hello</h1>
					</Modal>,
					document.getElementById("modal") as any
				)}
		</>
	);
};
