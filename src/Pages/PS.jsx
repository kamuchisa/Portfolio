import "./PS.css"
const PS = () => {
  return (
    <div>
      <section className="hero">
        <h2>Project and Skills</h2>
        <a href="#projects"><button className="btn btn-primary">Click Here</button></a>
      </section>
      <body className="">
        <section className="my-skills ">
          
          <div className="skills row">
          <h2>Skills</h2>
          </div>
          <div className="row  cards">
            <div className="col-md-4 cad">
              
              <i className="bi bi-git"></i>
              
              <h2>Git</h2>
              <p>Git is a version control system which I have used to track changes made to the project. </p>
            </div>
            <div className="col-md-4 cad">
              
              <i className="bi bi-bootstrap"></i>
              
              <h2>Bootstrap</h2>
              <p>Bootstrap is a CSS framework which i have used to create responsive designs and layouts. </p>
            </div>
            <div className="col-md-4 cad">
              
              <i className="bi bi-filetype-html"></i>
              
              <h2>HTML </h2>
              <p>HTML is a mark language for web pages, which is very easy to learn and to use.</p>
            </div>
            <div className="col-md-4 cad">
              
              <i className="bi bi-filetype-jsx"></i>
              
              <h2>JSX</h2>
              <p>Jsx which allows us to write HTML like code in Java Script and I have used it to build react websites using react </p>
            </div>
            <div className="col-md-4 cad">
              
              <i className="bi bi-filetype-jsx"></i>
              
              <h2>Java Script</h2>
              <p>This is a programming language I have in my projects to create dynamic website and for DOM manipulation.</p>
            </div>
            <div className="col-md-4 cad">
              
              <i className="bi bi-filetype-css"></i>
              
              <h2>CSS</h2>
              <p> CSS is styling language used for styling web pages and I have used it to make user-friendly websites.</p>
            </div>
            
          </div>
        </section>
        <section id="projects" className="projects">
          <h2>Featured Projects</h2>
          <div className="row pads">
            <div className="col-md-4 pad">
              <img src="../../public/Images/istockphoto-817486028-612x612.jpg" alt="" />
              <div className="pad-info">
                <h3>Online-Safety awareness </h3>
                <p>Spreading awareness about anline threats</p>
                <a target="_blank" href="https://kamuchisab.wixsite.com/online-safety"><button className="btn btn-primary">View</button></a>
              </div>

            </div>
            <div className="col-md-4 pad">
              <img src="../../public/Images/istockphoto-817486028-612x612.jpg" alt="" />
              <div className="pad-info">
                <h3>Company Website </h3>
                <p>Marketing the products and services of the company</p>
                <a target="_blank" href="https://github.com/kamuchisa/project-2.git"><button className="btn btn-primary">View</button></a>
              </div>

            </div>
            <div className="col-md-4 pad">
              <img src="../../public/Images/istockphoto-817486028-612x612.jpg" alt="" />
              <div className="pad-info">
                <h3>Blog on Networks</h3>
                <p>Blog on cloud computing. </p>
                <a target="_blank" href="https://kamuchisab.wixsite.com/my-site"><button className="btn btn-primary">View</button></a>
              </div>

            </div>
          </div>
        </section>
      </body>
    </div>
  )
}

export default PS
