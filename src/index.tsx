import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import { ThemeProvider } from './provider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
