import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from './src/store'
import { Provider } from 'react-redux'
import App from './src/App'
import './src/styles/main.scss'

const root = createRoot(document.getElementById('app'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
