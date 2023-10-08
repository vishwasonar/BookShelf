import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "../pages/AddEditBook";
import BookDashboard from "../pages/BookDashboard";
import CardsPage from "../pages/CardsPage";
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
						path="/cards"
						element={
							<ProtectedRoutes>
								<CardsPage />
							</ProtectedRoutes>
						}
					></Route>
					<Route
						path="/editbook/:id"
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
