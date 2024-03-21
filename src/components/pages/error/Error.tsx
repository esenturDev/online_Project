import scss from "./Error.module.scss";

const Error = () => {
	return (
		<div className={scss.errorPagesContainer}>
			<div className="container">
				<div className={scss.content}>
					<h1>404 |</h1> <h2>This page could not be found.</h2>
				</div>
			</div>
		</div>
	);
};

export default Error;
