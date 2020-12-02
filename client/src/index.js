import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './normalize.css';
import './index.css';

import App from './App';
import configureStore from './store';

// Attach store to Application
configureStore();

//Attach React Application to HTML
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);
