import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const BookDashboard: React.FC = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("isUserLoggedIn");
		navigate("/");
	};

	return (
		<div>
			<Navbar handleLogout={handleLogout} />
		</div>
	);
};

export default BookDashboard;
