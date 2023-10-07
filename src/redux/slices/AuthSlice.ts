import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface initialValues {
	isLoading: Boolean;
	isSuccess: Boolean;
	isError: Boolean;
	responseData: [];
	errorData: [];
}

const initialState: initialValues = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	responseData: [],
	errorData: [],
};

export const SignupData: any = createAsyncThunk(
	"/signup",
	async (values: any) => {
		try {
			let user = [];
			if (localStorage.getItem("user")) {
				let existinguser = JSON.parse(
					localStorage.getItem("user") || "{}"
				);
				user = [...existinguser, values];
				if (existinguser.some((i: any) => i.email === values.email)) {
					toast.error("User already exist");
				} else {
					localStorage.setItem("isUserLoggedIn", "true");
					localStorage.setItem("user", JSON.stringify(user));
				}
			} else {
				toast.success("Signup Successfull");
				localStorage.setItem("isUserLoggedIn", "true");
				localStorage.setItem("user", JSON.stringify([values]));
			}

			return values;
		} catch (error) {
			return error;
		}
	}
);

export const SignupSlice = createSlice({
	name: "signup",
	initialState: initialState,
	reducers: {
		[SignupData.pending]: (state) => {
			state.isLoading = true;
		},
		[SignupData.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.responseData = {
				...payload,
				code: 200,
				message: "Signup Success",
			};
		},
		[SignupData.rejected]: (state, { payload }) => {
			state.isSuccess = false;
			state.errorData = {
				...payload,
				code: 500,
				message: "Error",
			};
		},
	},
});

export const SignupReducer = SignupSlice.reducer;
