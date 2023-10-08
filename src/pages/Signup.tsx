import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { DisplayFormError, SignupValidations } from "../common/validations";
import { SignupData } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
const Signup: React.FC = () => {
	const defaultTheme = createTheme();

	interface values {
		name: String;
		email: String;
		password: String;
	}

	const initialValues: values = {
		name: "",
		email: "",
		password: "",
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSignup = async (values: typeof initialValues) => {
		let name: String = values.name;
		let email: String = values.email;
		let password: String = values.password;
		const { payload } = await dispatch(
			SignupData({ name, email, password })
		);
		if (payload) {
			navigate("/dashboard");
		}
	};

	return (
		<div>
			<ThemeProvider theme={defaultTheme}>
				<Container component="main" maxWidth="xs">
					{/* <CssBaseline /> */}
					<Box
						sx={{
							marginTop: 15,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							boxShadow: " 5px 5px 10px black",

						}}
						className="w-full shadow-xl p-5 light:bg-blueGray dark:bg-white"
					>
						<Typography component="h1" variant="h5">
							Sign Up
						</Typography>
						<div className="w-full">
							<Formik
								initialValues={initialValues}
								onSubmit={handleSignup}
								validationSchema={SignupValidations}
							>
								{({
									values,
									handleSubmit,
									handleChange,
									handleBlur,
									setFieldValue,
									errors,
									touched,
								}) => {
									return (
										<form onSubmit={handleSubmit}>
											<Box>
												<TextField
													margin="normal"
													// onBlur={handleBlur}
													onChange={handleChange}
													fullWidth
													id="name"
													value={values?.name}
													label="Name"
													name="name"
													autoComplete="name"
													autoFocus
												/>

												{DisplayFormError(errors.name)}

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
												// onBlur={handleBlur}
												/>
												{DisplayFormError(errors.email)}

												<TextField
													margin="normal"
													// onBlur={handleBlur}
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

												{/* {showError("password")} */}

												<Grid
													container
													className="flex justify-end"
												>
													<Grid item>
														<Link
															to="/"
															className="text-blue-800 underline cursor-pointer"
														>
															{/* <Link to={params.pathname === "/patient-signup" ? "/" : params.pathname === "/doctor-signup"  ? "/doctor-login" : ""} variant="body2" className="text-blue-800 underline"> */}
															{
																"Already have an account? Sign In"
															}
														</Link>
													</Grid>
												</Grid>
												<Button
													type="submit"
													fullWidth
													className="blue-button text-white"
													sx={{ mt: 3, mb: 2 }}
												>
													Sign Up
												</Button>
											</Box>
										</form>
									);
								}}
							</Formik>
						</div>
					</Box>
					{/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default Signup;
