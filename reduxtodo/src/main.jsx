import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import { store } from './app/store.js'
import AddTodo from './component/AddTodo.jsx'
import Todos from './component/Todos.jsx'
 import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <AddTodo/>
    <Todos/>
  </Provider>
)
