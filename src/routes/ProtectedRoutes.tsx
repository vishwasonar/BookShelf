import React, { Component, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
	children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

const ProtectedRoutes = ({ children }: Props) => {
	let user = localStorage.getItem("user");
	let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");

	return (
		<div>
			{user && isUserLoggedIn === "true" ? (
				<>{children}</>
			) : (
				<Navigate to="/" />
			)}
		</div>
	);
};

export default ProtectedRoutes;
