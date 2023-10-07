import React from "react";
import "./App.css";
import RoutesFile from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<React.Fragment>
				<RoutesFile />
				<ToastContainer
					position="top-right"
					autoClose={1000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
			</React.Fragment>
		</Provider>
	);
};

export default App;
