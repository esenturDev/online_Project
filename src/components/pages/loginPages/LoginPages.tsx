/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router";
import scss from "./LoginPages.module.scss";
import { Field, Form, Formik } from "formik";
import Button, { ButtonProps } from "../../Ul/button/Button";
import { LoginInputResult } from "../../../utils/LoginValidetes";
import { usePostLoginUsersMutation } from "../../../redux/api/auth";
const LoginPages = () => {
	const [postLogin] = usePostLoginUsersMutation();
	const navigate = useNavigate();
	const handleLoginUsers = async (values: any) => {
		const { email, password } = values;
		const response = await postLogin({ email, password });
		if ("data" in response) {
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("isAuthUsers", response.data.token);
			navigate("/home");
		} else {
			console.error("login failed:", response.error);
		}
	};
	const buttonInitialValue: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "blue",
		width: "300px",
	};
	return (
		<div className={scss.loginPages}>
			<div className="container">
				<div className={scss.content}>
					<Formik
						initialValues={{ email: "", password: "" }}
						onSubmit={handleLoginUsers}
						validationSchema={LoginInputResult}>
						{({ errors, touched }) => {
							return (
								<Form>
									<Field
										id={"email"}
										name={"email"}
										type="email"
										placeholder="Email"
									/>
									{touched.email && errors.email ? (
										<div style={{ color: "red" }}>{errors.email}</div>
									) : null}
									<Field
										id={"password"}
										name={"password"}
										type="password"
										placeholder="Password"
									/>
									{touched.password && errors.password ? (
										<div style={{ color: "red" }}>{errors.password}</div>
									) : null}
									<Button {...buttonInitialValue}>Login</Button>
									<button onClick={() => navigate("/registr")}>Register</button>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default LoginPages;
