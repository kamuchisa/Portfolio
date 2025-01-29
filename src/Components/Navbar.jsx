import { Link } from "react-router-dom"
import "./Nav.css"


const Navbar = () => {
  return (
    

    <div className="container-fluid">
        <div className="row">
            <div className="nav col-auto min-vh-100 col-md-2 d-flex justify-content-between flex-column ">
                <div>
                    <a href="" className="text-decoration-none d-flex align-itemcenter ">
                        <i className=" bi bi-grid"></i>
                        <span className="ms-1  d-none d-sm-inline lg" >Brinso</span>
                    </a>
                    <hr className="text-secondary d-none d-sm-inline" />
                    <ul
                        className="nav nav-pills flex-column mt-3 mt-sm-0 "
                    >
                        <li className="nav-item fs-4 ms-1 py-2 py-sm-0 ">
                            <Link to="/"  className="nav-link" aria-current="page"> 
                            <i className="bi bi-house text-white"></i>
                            <span className="ms-3 d-none d-sm-inline" >Home</span>
                            
                            </Link>
                            
                            

                        </li>
                        <li className="nav-item fs-4 ms-1 py-2 py-sm-0">
                        
                            <Link to="/PS" className="nav-link">
                            <i className="bi bi-box text-white"></i>
                            <span className="ms-3 d-none d-sm-inline" >P&S</span>
                            
                            </Link>

                        </li>
                        <li className="nav-item fs-4 ms-1 py-2 py-sm-0">
                            
                            <Link to="/About" className="nav-link" >
                            <i className="bi bi-person text-white"></i>
                            <span className="ms-3 d-none d-sm-inline" >About</span></Link>
                        </li>
                    </ul>
                </div>
                
                
                

            </div>
        </div>
    </div>



        
       
  
  )
}

export default Navbar
