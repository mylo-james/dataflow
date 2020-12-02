import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import './normalize.css';
import './index.css';
import App from './App';

import configureStore from './store';

//Attach React Application to HTML
ReactDOM.render(
    <StrictMode>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);
