import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import {
	AddEditBookValidations,
	DisplayFormError,
} from "../common/validations";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addBook, editBook } from "../redux/slices/BookSlice";

const AddEditBook: React.FC = () => {

	interface BookType {
		id: number
		title: string,
		author: string,
		genre: string,
		publication_year: number
	}

	const defaultTheme = createTheme();
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("isUserLoggedIn");
		navigate("/");
	};

	const [editBookData, setEditBookData] = useState<BookType | null>(null);

	const bookData = useSelector(
		(state: any) => state.BookSliceReducer.bookData
	);

	const id = useParams();
	const getEditBookData = () => {
		let editBook =
			bookData &&
			bookData?.find((item: BookType) => item.id.toString() === id.id);

		setEditBookData(editBook);
	};

	useEffect(() => {
		getEditBookData();
	}, []);

	const handleHomePage = () => {
		navigate("/dashboard");
	};

	interface AddEditBookValues {
		title: string;
		author: string;
		genre: string;
		publication_year: number;
	}

	const initialValues: AddEditBookValues = {
		title: editBookData ? editBookData?.title : "",
		author: editBookData ? editBookData?.author : "",
		genre: editBookData ? editBookData?.genre : "",
		publication_year: editBookData ? editBookData?.publication_year : 2023
	};

	const dispatch = useDispatch();

	const AddEditBook = async (values: typeof initialValues) => {
		let addEditBookValues = {
			id: editBookData ? editBookData.id : bookData[bookData.length - 1]?.id + 1,
			title: values.title,
			author: values.author,
			genre: values.genre,
			publication_year: values.publication_year,
		};

		if (id.id) {
			await dispatch(editBook(addEditBookValues))
			toast.success("Book Edited");
		}
		else {

			await dispatch(addBook(addEditBookValues));
			toast.success("Book Added");
		}
		navigate("/dashboard");
	};

	return (
		<div>
			<Navbar
				handleLogout={handleLogout}
				handleHomePage={handleHomePage}
			/>
			<div>
				<ThemeProvider theme={defaultTheme}>
					<Container component="main" maxWidth="sm">
						<Box
							sx={{
								marginTop: 5,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								boxShadow: " 5px 7px 10px grey",
							}}
							className="w-full shadow-xl p-5 border bg-blueGray"
						>
							<Typography component="h1" variant="h5">
								{id.id ? 'Edit Book' : 'Add Book'}
							</Typography>
							<div className="w-full">
								<Formik
									enableReinitialize={true}
									initialValues={initialValues}
									onSubmit={AddEditBook}
									validationSchema={AddEditBookValidations}
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
														onChange={handleChange}
														fullWidth
														id="title"
														value={values?.title}
														label="Title"
														name="title"
														autoComplete="title"
														autoFocus
													/>

													{DisplayFormError(
														errors.title
													)}

													<TextField
														margin="normal"
														fullWidth
														onChange={handleChange}
														value={values.author}
														id="author"
														label="Author"
														name="author"
														autoComplete="author"
														autoFocus
														type="text"
													/>
													{DisplayFormError(
														errors.author
													)}

													<TextField
														margin="normal"
														onChange={handleChange}
														fullWidth
														value={values?.genre}
														name="genre"
														label="Genre"
														type="text"
														id="genre"
														autoComplete="current-genre"
													/>
													{DisplayFormError(
														errors.genre
													)}
													<TextField
														margin="normal"
														onChange={handleChange}
														fullWidth
														value={
															values?.publication_year
														}
														name="publication_year"
														label="Publication Year"
														type="text"
														id="publication_year"
														autoComplete="current-publication_year"
													/>
													{DisplayFormError(
														errors.publication_year
													)}

													<Button
														type="submit"
														fullWidth
														className="blue-button"
														sx={{ mt: 3, mb: 2 }}
													>
														{id.id ? 'Edit Book' : 'Add Book'}
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
		</div>
	);
};

export default AddEditBook;
