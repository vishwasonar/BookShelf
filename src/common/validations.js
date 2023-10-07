import * as Yup from "yup";

export const SignupValidations = () => {
	return Yup.object({
		name: Yup.string().required("Please enter name*"),
		email: Yup.string()
			.email("Enter valid email*")
			.required("Email is required*"),
		password: Yup.string()
			.required("Password is required*")
			.min(8, "Password must be of 8 or more characters*"),
	});
};

export const LoginValidations = () => {
	return Yup.object({
		email: Yup.string()
			.email("Enter valid email*")
			.required("Email is required*"),
		password: Yup.string()
			.required("Password is required*")
			.min(8, "Password must be of 8 or more characters*"),
	});
};

export const DisplayFormError = (error) => {
	return (
		<div>
			<p className="text-red-500 text-xs font-bold">{error}</p>
		</div>
	);
};
