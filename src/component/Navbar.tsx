import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	handleLogout: () => void;
	handleHomePage: () => void;
}
const Navbar: React.FC<Props> = ({ handleLogout, handleHomePage }) => {
	return (
		<div>
			<nav
				className="bg-white border-gray-200"
				style={{ background: "#191927" }}
			>
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
					<span
						onClick={handleHomePage}
						className="self-center cursor-pointer text-2xl font-semibold whitespace-nowrap text-white dark:text-white"
					>
						Book Shelf
					</span>
					<div className="flex items-center">
						<span
							onClick={handleLogout}
							className="text-sm cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
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
