import "./Footer.css"
import { Link } from "react-router-dom"




const Footer = () => {
  return (
    <footer className="container-fluid">
        <div className="row">
            <div className=" form col-md-5">
                <form action="">
                    <h2>Lets get your feedback</h2>
                <div className="row">
                    <div className="col form-floating">
                        <input type="text" className="form-control" id="first-name" placeholder="First name" aria-label="First name"/>
                        <label htmlFor="first-name">First name</label>
                    </div>
                    <div className="col form-floating">
                        
                        <input type="text" className="form-control" id="last-name" placeholder="Last name" aria-label="Last name"/>
                        <label htmlFor="last-name">Last name</label>
                    </div>
                    <div className="col-12 form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Email" aria-label="Email"/>
                        <label htmlFor="email" >Email</label>
                    </div>
                    
                    <div className="form-floating">
                        <textarea name="" className="form-control"  id="floatingTextarea" placeholder="Any feedback?"></textarea>
                        <label htmlFor="floatingTextarea">Any Feedback?</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>

            </div>
            <div className=" links col-md-3">
                <h2>Links</h2>
                <ul>
                    <li> <h3><Link to="/" >Home</Link></h3></li>
                    <li> <h3><Link to="/PS" >Projects and Skils</Link></h3></li>
                    <li> <h3><Link to="/About" >About</Link></h3></li>
                </ul>

            </div>
            <div className="social-media col-md-2">
                <h2>Follow me on </h2>
                <ul>
                    <li> <a href="#"><h4><i className="bi bi-facebook"></i> Facebook</h4></a></li>
                    <li> <a href="#"><h4><i className="bi bi-github"></i> Git hub</h4></a></li>
                    <li> <a href="#"> <h4><i className="bi bi-discord"></i> Discord</h4></a></li>
                    <li> <a href="#"> <h4><i className="bi bi-twitter"></i> Twitter</h4></a></li>
                    <li> <a href="#"> <h4><i className="bi bi-linkedin"></i> LinkedIn</h4></a></li>
                </ul>


            </div>
        </div>
        <div className="hr"></div>
        <div className="copy row">
            <p>&copy; BrianK 2025</p>

        </div>

      
    </footer>
  )
}

export default Footer
