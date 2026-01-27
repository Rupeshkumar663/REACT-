
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextPovider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextPovider>
     <h1>React with Context API</h1>
     <Login/>
     <Profile/>
    </UserContextPovider>
  )
}

export default App
