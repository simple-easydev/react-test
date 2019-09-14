import React from "react";

import Routes from './routes';
import HeaderLayout from "./layout/header-layout";
import SideLayout from "./layout/side-layout";
import { Provider } from 'react-redux';
import configureStore from './redux/store/configure-store'

function App() {
	return (
		<Provider store={configureStore({})}>
			<div className="main-div">
				<SideLayout />
				<div className="content-layout">
					<HeaderLayout />
					<Routes />
				</div>
			</div>
		</Provider>
	);
}

export default App;
