import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import AddBook from "../pages/AddEditBook";
import BookDashboard from "../pages/BookDashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";
function RoutesFile() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/signup" element={<Signup></Signup>}></Route>
					<Route path="/" element={<Login></Login>}></Route>
					<Route
						path="/dashboard"
						element={
							<ProtectedRoutes>
								<BookDashboard />
							</ProtectedRoutes>
						}
					></Route>
					<Route
						path="/addbook"
						element={
							<ProtectedRoutes>
								<AddBook />
							</ProtectedRoutes>
						}
					></Route>
					<Route
						path="/addbook/:id"
						element={
							<ProtectedRoutes>
								<AddBook />
							</ProtectedRoutes>
						}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default RoutesFile;
