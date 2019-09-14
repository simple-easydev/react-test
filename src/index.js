import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


const Index = () => (
	<App />
);

ReactDOM.render(
    Index(), 
document.getElementById('root'));

serviceWorker.unregister();
