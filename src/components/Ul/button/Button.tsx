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
			style={{ backgroundColor: color, width }}>
			{children}
		</button>
	);
};

export default Button;
