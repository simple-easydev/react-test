import React from "react";

import Routes from './routes';
import HeaderLayout from "./layout/header-layout";
import SideLayout from "./layout/side-layout";

function App() {
	return (
		<div className="main-div">
			<SideLayout />
			<div className="content-layout"> 
				<HeaderLayout />
				<Routes />
			</div>
		</div>
	);
}

export default App;
