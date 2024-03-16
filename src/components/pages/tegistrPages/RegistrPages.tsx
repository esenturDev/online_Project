/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router";
import scss from "./RegistrPages.module.scss";
import { Field, Form, Formik } from "formik";
import { usePostRegisterUsersMutation } from "../../../redux/api/auth";
import Button, { ButtonProps } from "../../Ul/button/Button";
import { RegisterInputResult } from "../../../utils/RegisterValidetes";

export const RegistrPages = () => {
	const navigate = useNavigate();
	const [postRegisterUsers] = usePostRegisterUsersMutation();
	// const handleRegisterPost = async (values: string) => {
	// 	const { email, userName, password } = values;
	// 	const result = await postRegisterUsers({ email, userName, password });
	// 	if (result) {
	// 		navigate("/login");
	// 	}
	// };
  const handleRegisterPost = async (values: any) => {
		const { email, userName, password } = values;
		const result = await postRegisterUsers({ email, password, userName });
		if (result) {
			navigate("/login");
		}
	};

	const registerButtonProps: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "blue",
		width: "300px",
	};

	return (
		<div className={scss.registerPages}>
			<div className="container">
				<div className={scss.content}>
					{/* <Formik
						initialValues={{ email: "", userName: "", password: "" }}
						onSubmit={handleRegisterPost}
						validationSchema={RegisterInputResult}>
						{" "}
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
										<p style={{ color: "red" }}>{errors.email}</p>
									) : null}
									<Field
										id={"userName"}
										name={"userName"}
										type="userName"
										placeholder="userName"
									/>
									{touched.userName && errors.userName ? (
										<p style={{ color: "red" }}>{errors.userName}</p>
									) : null}
									<Field
										id={"password"}
										name={"password"}
										type="password"
										placeholder="password"
									/>
									{touched.password && errors.password ? (
										<p style={{ color: "red" }}>{errors.password}</p>
									) : null}
									<Button {...registerButtonProps}>Register</Button>
									<button onClick={() => navigate("/login")}>Login!</button>
								</Form>
							);
						}}
					</Formik> */}
					<Formik
						initialValues={{ email: "", userName: "", password: "" }}
						onSubmit={handleRegisterPost}
						validationSchema={RegisterInputResult}>
						{({ errors, touched }) => {
							return (
								<Form>
									<label htmlFor="firsName">Email</label>
									<Field
										id={"email"}
										name={"email"}
										type="email"
										placeholder="Email"
									/>
									{touched.email && errors.email ? (
										<div style={{ color: "red" }}>{errors.email}</div>
									) : null}
									<label htmlFor="userName">userName</label>
									<Field
										id={"userName"}
										name={"userName"}
										type="userName"
										placeholder="userName"
									/>
									{touched.userName && errors.userName ? (
										<div style={{ color: "red" }}>{errors.userName}</div>
									) : null}
									<label htmlFor="password">password</label>
									<Field
										id={"password"}
										name={"password"}
										type="password"
										placeholder="password"
									/>
									{touched.password && errors.password ? (
										<div style={{ color: "red" }}>{errors.password}</div>
									) : null}
									{/* <Link to="/login">У меня есть аккаунт, войти</Link> */}
									<Button {...registerButtonProps}>Зарегистрируйтесь</Button>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};
