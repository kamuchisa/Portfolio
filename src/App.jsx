import {HashRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import PS from "./Pages/PS"
import Layout from "./Components/Layout"
import "./bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/css/bootstrap.min.css"
import "./bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/js/bootstrap"


function App() {


  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/PS" element={<PS/>} />
          <Route path="/About" element={<About/>} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
