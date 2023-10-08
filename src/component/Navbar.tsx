import React from "react";
import { useLocation } from "react-router-dom";

interface Props {
	handleLogout: () => void;
	handleHomePage: () => void;
	handleCardsPage: () => void;
}
const Navbar: React.FC<Props> = ({ handleLogout, handleHomePage, handleCardsPage }) => {
	const location = useLocation()


	return (
		<div className="w-full sticky top-0">
			<nav
				className="bg-white border-gray-200 w-full"
				style={{ background: "#191927" }}
			>
				<div className="flex flex-wrap justify-between items-center mx-auto p-4">
					<span
						onClick={handleHomePage}
						className="self-center cursor-pointer text-2xl font-semibold whitespace-nowrap text-white dark:text-white"
					>
						Book Shelf
					</span>
					<div className="flex items-center">
						{location.pathname !== "/cards" && (

							<span
								onClick={handleCardsPage}
								className="text-lg cursor-pointer text-blue-300 dark:text-blue-500 mr-3 hover:underline"
							>
								Cards
							</span>
						)}
						{location?.pathname !== "/dashboard" && (
							<span
								onClick={handleHomePage}
								className="text-lg cursor-pointer text-blue-300 dark:text-blue-500 mr-3 hover:underline"
							>
								Dashboard
							</span>
						)}
						<span
							onClick={handleLogout}
							className="text-lg cursor-pointer text-blue-300 dark:text-blue-500 hover:underline"
						>
							Logout
						</span>
					</div>

				</div>
			</nav>
		</div>
	);
};

export default Navbar;
