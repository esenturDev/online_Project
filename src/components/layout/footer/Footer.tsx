import scss from "./Footer.module.scss";
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={scss.content}>
					<p>Copyright 2013-2023 istore.kg все права защищены</p>
					<p>
						made in <span>MOORE STUDIO</span>
					</p>
					<p>Политика конфиденциальности</p>
					<p>Пользовательское соглашение</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
