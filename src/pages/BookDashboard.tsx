import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Datatable from "../component/Datatable";
import { useSelector } from "react-redux";

const BookDashboard: React.FC = () => {
	const [bookId, setBookId] = useState<number>(0);
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("isUserLoggedIn");
		navigate("/");
	};

	const handleHomePage = () => {
		navigate("/dashboard");
	};
	const handleCardsPage = () => {
		navigate("/cards");
	};

	const addBook = () => {
		navigate(`/addBook`, {
			state: {
				page: "/dashboard"
			}
		});
	};


	const books = useSelector((state: any) => state.BookSliceReducer);

	return (
		<div>
			<Navbar
				handleLogout={handleLogout}
				handleHomePage={handleHomePage}
				handleCardsPage={handleCardsPage}
			/>
			<div className="w-full">

				<div className="flex justify-center items-center mt-5">
					<div className="text-center">
						<p className="flex justfy-center">This is DataGrid component</p>
					</div>
					<div className="flex flex-wrap justify-end ml-5">
						<span
							onClick={addBook}
							className="text-white pl-5 cursor-pointer pr-5 pt-1 pb-1 bg-blue-700 rounded"
						>
							Add Book
						</span>
					</div>
				</div>


				{/* <div className="flex justify-start pl-5">
					<span
						onClick={addBook}
						className="text-white cursor-pointer mt-5 pl-5 pr-5 pt-1 pb-1 bg-blue-700 rounded"
					>
						Add Book
					</span>
				</div> */}
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
