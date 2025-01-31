import "./About.css"
const About = () => {
  return (
    <div>
      <section className="hro">
        <h2>About Me</h2>
      </section>
      <body>
        <div className="row bio">
          <div className="col-md-5 col-sm-12 zim">

          </div>
          <div className="col-md-7 col-sm-12 dt">
            <h2>Biography</h2>
            <ul>
              <li>Name: Brian Kamuchisa</li>
              <li>Age: Twenty-one</li>
              <li>Nationality: Zimbabwean</li>
              <li>Languages: Shone, English, Spanish</li>

            </ul>
          </div>
        </div>
       <section className="contact-infor">
       <section className="row contact">
          <h2>Contact Information</h2>
          
        </section>
        <div className="row infor">
          <div className="col-md-6 col-sm-12 cd ">
          <i className="bi bi-whatsapp"></i>
            <h3>Whatsapp</h3>
            <h4>+263 0786601219</h4>
          </div>
          <div className="col-md-6 col-sm-12 cd ">
          <i className="bi bi-envelope"></i>
            <h3>Email</h3>
            <h4>kamuchisabryan <br /> @gmail.com</h4>
          </div>
          <div className="col-md-6 col-sm-12 cd ">
          <i className="bi bi-github"></i>
            <h3>Github</h3>
            <h4>@kamuchisa</h4>
          </div>
        </div>
       </section>
      </body>
    </div>
  )
}

export default About
