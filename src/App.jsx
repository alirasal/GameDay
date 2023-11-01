import Home from "./Component/user/Home"
import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import SignUp from "./Component/user/SignUp"
import Login from './Component/user/Login'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
