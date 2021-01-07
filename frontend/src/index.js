import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import './normalize.css';
import './index.css';
import App from './App';

import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';

//Attach React Application to HTML
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={configureStore()}>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root')
);
