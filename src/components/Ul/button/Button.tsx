import { FC, ButtonHTMLAttributes } from "react";
// import scss from './Button.module.scss';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	color?: string;
	width: string;
}

const Button: FC<ButtonProps> = ({
	children,
	variant = "primary",
	color,
	width,
	...rest
}) => {
	return (
		<button
			className={`btn ${
				variant === "primary" ? "btn-primary" : "btn-secondary"
			}`}
			{...rest}
			style={{
				backgroundColor: color,
				width,
				height: "32px",
				borderRadius: "8px",
				border: "nome",
			}}>
			{children}
		</button>
	);
};

export default Button;
