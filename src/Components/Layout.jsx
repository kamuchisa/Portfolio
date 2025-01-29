import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
     <Navbar/>
    <Header/>
   
    <main>
        <Outlet/>
    </main>
    <Footer/>
      
    </>
  )
}

export default Layout
