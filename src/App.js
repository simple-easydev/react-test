import React from "react";

import Routes from './routes';
import HeaderLayout from "./layout/header-layout";
import SideLayout from "./layout/side-layout";

function App() {
  	return (
		  <div>
			  	<HeaderLayout />
				<SideLayout />
				<Routes/>		
		  </div>
  	);
}

export default App;
