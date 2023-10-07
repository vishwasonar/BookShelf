import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import { DisplayFormError, LoginValidations } from "../common/validations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const defaultTheme = createTheme();

	interface values {
		email: String;
		password: String;
	}

	const initialValues: values = {
		email: "",
		password: "",
	};

	const navigate = useNavigate();

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem("user") || "{}");
	}, []);

	const handleLogin = (values: typeof initialValues) => {
		let user = JSON.parse(localStorage.getItem("user") || "{}");
		let existingUser = {};
		if (Object.keys(user).length === 0) {
			toast.error("User does not exist. Please Signup");
		} else if (Object.keys(user).length > 0) {
			existingUser = user?.find(
				(i: any) =>
					i.email === values.email && i.password === values.password
			);
			if (existingUser) {
				toast.success("Login Success");
				navigate("/dashboard");
				localStorage.setItem("isUserLoggedIn", "true");
			}
		} else {
			toast.error("Invalid Email or Password");
		}
	};

	return (
		<div>
			<ThemeProvider theme={defaultTheme}>
				<Container component="main" maxWidth="xs">
					<Box
						sx={{
							marginTop: 15,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							boxShadow: " 5px 7px 10px grey",
						}}
						className="w-full shadow-xl p-5 border bg-blueGray"
					>
						<Typography component="h1" variant="h5">
							Login
						</Typography>
						<div className="w-full">
							<Formik
								initialValues={initialValues}
								onSubmit={handleLogin}
								validationSchema={LoginValidations}
							>
								{({
									values,
									handleSubmit,
									handleChange,
									errors,
								}) => {
									return (
										<form onSubmit={handleSubmit}>
											<Box>
												<TextField
													margin="normal"
													fullWidth
													onChange={handleChange}
													value={values.email}
													id="email"
													label="Email Address"
													name="email"
													autoComplete="email"
													autoFocus
												/>
												{DisplayFormError(errors.email)}

												<TextField
													margin="normal"
													onChange={handleChange}
													fullWidth
													value={values?.password}
													name="password"
													label="Password"
													type="password"
													id="password"
													autoComplete="current-password"
												/>
												{DisplayFormError(
													errors.password
												)}

												<Grid
													container
													className="flex justify-end"
												>
													<Grid item>
														<Link
															to="/signup"
															className="text-blue-800 underline cursor-pointer"
														>
															{
																"Don't have an account? Sign up"
															}
														</Link>
													</Grid>
												</Grid>
												<Button
													type="submit"
													fullWidth
													variant="contained"
													sx={{ mt: 3, mb: 2 }}
												>
													Login
												</Button>
											</Box>
										</form>
									);
								}}
							</Formik>
						</div>
					</Box>
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default Login;
