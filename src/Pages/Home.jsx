
import Carousel from "../Components/Carousel"
import "./Home.css"

const Home = () => {
  return (
    <div>
        <Carousel/>
        <section className="identity container-fluid">
          <div className="row profile">
            <div className="col-md-5 pic ">
               <img src="../../public/Images/bee.JPG" alt="profile pic" className="ppic" />
            </div>
            <div className=" my-info col-md-6">
              <img src="../../public/Images/nature.jpg" className="img" alt="" />
            </div>
            <div className="my-text col-md-6">
            <h2>My identity</h2>
              <h4>My name is Brian Kamuchisa, an aspiring front-end web developer. I have studied in Computer Science for
                 two years and i am almost completing my three month web-development course with Learnio. Through my experiences, 
                 i have developed computational skills and designing skills through practice and collaborating with other people  </h4>


            </div>
          </div>
          <div className="my-cards row">
            
            <div className="card col-md-3">
              <div className="card-header">
                <i></i>
                <h3>My Experience in</h3>
                <h4>2023</h4>
              </div>
              <div className="card-text">
                <p>In 2023, I began my journey into mastering web development by creating websites for campaigns and awareness initiatives
                   using website builders. This experience helped me understand the fundamentals of UI/UX design, responsiveness, and user engagement.
                    It sparked my passion for front-end development, leading me to dive deeper into coding and building interactive, modern web experiences</p>

                    <h3>Tools mastered</h3>
                    <ul>
                      <li>Wix</li>
                      <li>Google Sites</li>
                      <li>Word-Press</li>
                    </ul>
                

              </div>
              
              



            </div>
            <div className="card col-md-3">
              <div className="card-header">
                <i></i>
                <h3>My Experience in</h3>
                <h4>2023</h4>
              </div>
              <div className="card-text">
                <p>In 2023, I began my journey into mastering web development by creating websites for campaigns and awareness initiatives
                   using website builders. This experience helped me understand the fundamentals of UI/UX design, responsiveness, and user engagement.
                    It sparked my passion for front-end development, leading me to dive deeper into coding and building interactive, modern web experiences</p>

                    <h3>Tools mastered</h3>
                    <ul>
                      <li>Wix</li>
                      <li>Google Sites</li>
                      <li>Word-Press</li>
                    </ul>
                

              </div>
              
              
              



            </div>
            <div className="card col-md-3">
              <div className="card-header">
                <i></i>
                <h3>My Experience in</h3>
                <h4>2023</h4>
              </div>
              <div className="card-text">
                <p>In 2023, I began my journey into mastering web development by creating websites for campaigns and awareness initiatives
                   using website builders. This experience helped me understand the fundamentals of UI/UX design, responsiveness, and user engagement.
                    It sparked my passion for front-end development, leading me to dive deeper into coding and building interactive, modern web experiences</p>

                    <h3>Tools mastered</h3>
                    <ul>
                      <li>Wix</li>
                      <li>Google Sites</li>
                      <li>Word-Press</li>
                    </ul>
                

              </div>
              
              



            </div>

          </div>
        </section>

    </div>
  )
}

export default Home
