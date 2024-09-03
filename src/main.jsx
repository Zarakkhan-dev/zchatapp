import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './State/store.js'
import { Provider } from 'react-redux'
Provider
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
)
