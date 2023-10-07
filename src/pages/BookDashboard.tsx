import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Datatable from "../component/Datatable";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const BookDashboard: React.FC = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("isUserLoggedIn");
		navigate("/");
	};

	const handleHomePage = () => {
		navigate("/dashboard");
	};

	const [bookData, setBookData] = useState<any>(null);
	const [bookId, setBookId] = useState<number>(0);

	const books = useSelector((state: any) => state.BookSliceReducer);


	useEffect(() => {
		setBookData(books);
	}, []);

	return (
		<div>
			<Navbar
				handleLogout={handleLogout}
				handleHomePage={handleHomePage}
			/>
			<div className="w-full">
				<div className="flex justify-start pl-5">
					<Link
						to="/addbook"
						className="text-white mt-5 pl-5 pr-5 pt-1 pb-1 bg-blue-700 rounded"
					>
						Add Book
					</Link>
				</div>
				<div className="p-5">
					<Datatable
						rows={books}
						bookId={bookId}
						setBookId={setBookId}
					/>
				</div>
			</div>
		</div>
	);
};

export default BookDashboard;
