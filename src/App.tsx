import React from "react";
import "./App.css";
import RoutesFile from "./routes/Routes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
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
			</PersistGate>
		</Provider>
	);
};

export default App;
