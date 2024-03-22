/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router";
import scss from "./LoginPages.module.scss";
import { Field, Form, Formik } from "formik";
import Button, { ButtonProps } from "../../Ul/button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
			toast.success("🦄 Wow so easy!");
		} else {
			console.error("login failed:", response.error);
		}
	};
	const buttonInitialValue: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "blue",
		width: "348px",
	};
	return (
		<>
			<div className={scss.loginPages}>
				<div className="container">
					<div className={scss.content}>
						<Formik
							initialValues={{ email: "", password: "" }}
							onSubmit={handleLoginUsers}
							validationSchema={LoginInputResult}>
							{({ errors, touched }) => {
								return (
									<Form className={scss.dovForm}>
										<div className={scss.contentsLoginPages}>
											<img
												style={{ width: "130px", height: "auto" }}
												src="https://www.istore.kg/static/_image/istore_logo.svg"
												alt="online store  photo login"
											/>
											<p>Вступление для продолжения</p>
											<p>Авторизация</p>
										</div>
										<div className={scss.inputAndButtons}>
											<label>Email</label>
											<Field
												className={scss.inputs}
												id={"email"}
												name={"email"}
												type="email"
												placeholder="Email"
											/>
											{touched.email && errors.email ? (
												<div style={{ color: "red" }}>{errors.email}</div>
											) : null}
											<label>Password</label>
											<Field
												className={scss.inputs}
												id={"password"}
												name={"password"}
												type="password"
												placeholder="Password"
											/>
											{touched.password && errors.password ? (
												<div style={{ color: "red" }}>{errors.password}</div>
											) : null}
											<Button {...buttonInitialValue}>Продолжить</Button>
											<button
												className={scss.buttonRegister}
												onClick={() => navigate("/registr")}>
												Регистрация
											</button>
											<button className={scss.buttonicon}>
												<img
													style={{ width: "20px", height: "auto" }}
													src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%23EA4335'%20d='M24%209.5c3.54%200%206.71%201.22%209.21%203.6l6.85-6.85C35.9%202.38%2030.47%200%2024%200%2014.62%200%206.51%205.38%202.56%2013.22l7.98%206.19C12.43%2013.72%2017.74%209.5%2024%209.5z'/%3e%3cpath%20fill='%234285F4'%20d='M46.98%2024.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58%202.96-2.26%205.48-4.78%207.18l7.73%206c4.51-4.18%207.09-10.36%207.09-17.65z'/%3e%3cpath%20fill='%23FBBC05'%20d='M10.53%2028.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92%2016.46%200%2020.12%200%2024c0%203.88.92%207.54%202.56%2010.78l7.97-6.19z'/%3e%3cpath%20fill='%2334A853'%20d='M24%2048c6.48%200%2011.93-2.13%2015.89-5.81l-7.73-6c-2.15%201.45-4.92%202.3-8.16%202.3-6.26%200-11.57-4.22-13.47-9.91l-7.98%206.19C6.51%2042.62%2014.62%2048%2024%2048z'/%3e%3cpath%20fill='none'%20d='M0%200h48v48H0z'/%3e%3c/svg%3e"
													alt="logo google"
												/>
												<span>Google</span>
											</button>
											<button className={scss.buttonicon}>
												<img
													style={{ width: "20px", height: "auto" }}
													src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='21'%3e%3cpath%20fill='%23f25022'%20d='M1%201h9v9H1z'/%3e%3cpath%20fill='%2300a4ef'%20d='M1%2011h9v9H1z'/%3e%3cpath%20fill='%237fba00'%20d='M11%201h9v9h-9z'/%3e%3cpath%20fill='%23ffb900'%20d='M11%2011h9v9h-9z'/%3e%3c/svg%3e"
													alt="logo google"
												/>
												<span>Microsoft</span>
											</button>
											<button className={scss.buttonicon}>
												<img
													style={{ width: "20px", height: "auto" }}
													src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.498%209.667a3.86%203.86%200%200%201%201.838-3.238%203.951%203.951%200%200%200-3.113-1.683c-1.31-.138-2.58.784-3.247.784-.68%200-1.708-.77-2.814-.748A4.146%204.146%200%200%200%202.673%206.91c-1.508%202.611-.383%206.45%201.062%208.56.723%201.034%201.567%202.189%202.673%202.148%201.082-.045%201.486-.69%202.792-.69%201.293%200%201.672.69%202.8.664%201.161-.02%201.893-1.039%202.59-2.082a8.55%208.55%200%200%200%201.184-2.412%203.73%203.73%200%200%201-2.276-3.431ZM11.367%203.358a3.8%203.8%200%200%200%20.87-2.723A3.866%203.866%200%200%200%209.734%201.93a3.616%203.616%200%200%200-.892%202.621c.98.01%201.91-.43%202.524-1.193Z'%20fill='%23000'/%3e%3c/svg%3e"
													alt="logo google"
												/>
												<span>Apple</span>
											</button>
											<button className={scss.buttonicon}>
												<img
													style={{ width: "20px", height: "auto" }}
													src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='70%2070%20130%20130'%3e%3cstyle%3e.st0{fill:%23e01e5a}.st1{fill:%2336c5f0}.st2{fill:%232eb67d}.st3{fill:%23ecb22e}%3c/style%3e%3cpath%20class='st0'%20d='M99.4%20151.2c0%207.1-5.8%2012.9-12.9%2012.9-7.1%200-12.9-5.8-12.9-12.9%200-7.1%205.8-12.9%2012.9-12.9h12.9v12.9zM105.9%20151.2c0-7.1%205.8-12.9%2012.9-12.9s12.9%205.8%2012.9%2012.9v32.3c0%207.1-5.8%2012.9-12.9%2012.9s-12.9-5.8-12.9-12.9v-32.3z'/%3e%3cpath%20class='st1'%20d='M118.8%2099.4c-7.1%200-12.9-5.8-12.9-12.9%200-7.1%205.8-12.9%2012.9-12.9s12.9%205.8%2012.9%2012.9v12.9h-12.9zM118.8%20105.9c7.1%200%2012.9%205.8%2012.9%2012.9s-5.8%2012.9-12.9%2012.9H86.5c-7.1%200-12.9-5.8-12.9-12.9s5.8-12.9%2012.9-12.9h32.3z'/%3e%3cpath%20class='st2'%20d='M170.6%20118.8c0-7.1%205.8-12.9%2012.9-12.9%207.1%200%2012.9%205.8%2012.9%2012.9s-5.8%2012.9-12.9%2012.9h-12.9v-12.9zM164.1%20118.8c0%207.1-5.8%2012.9-12.9%2012.9-7.1%200-12.9-5.8-12.9-12.9V86.5c0-7.1%205.8-12.9%2012.9-12.9%207.1%200%2012.9%205.8%2012.9%2012.9v32.3z'/%3e%3cpath%20class='st3'%20d='M151.2%20170.6c7.1%200%2012.9%205.8%2012.9%2012.9%200%207.1-5.8%2012.9-12.9%2012.9-7.1%200-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2%20164.1c-7.1%200-12.9-5.8-12.9-12.9%200-7.1%205.8-12.9%2012.9-12.9h32.3c7.1%200%2012.9%205.8%2012.9%2012.9%200%207.1-5.8%2012.9-12.9%2012.9h-32.3z'/%3e%3c/svg%3e"
													alt="logo google"
												/>
												<span>Slack</span>
											</button>
											<div></div>
										</div>
									</Form>
								);
							}}
						</Formik>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default LoginPages;
