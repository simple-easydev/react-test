import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configure-store'

const Index = () => (
	<Provider store={configureStore({})}>
		<App />
	</Provider>
);

ReactDOM.render(
    Index(), 
document.getElementById('root'));

serviceWorker.unregister();
