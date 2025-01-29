
import Carousel from "../Components/Carousel"
import "./Home.css"
const Home = () => {
  return (
    <div>
        <Carousel/>
        <section className="identity container">
          <div className="row">
            <div className="col-md-5 pic ">
               <img src="../../public/Images/bee.JPG" alt="profile pic" className="ppic" />
            </div>
            <div className="col-md-6">
              <h2>My identity</h2>
              <h4>My name is Brian Kamuchisa, an aspiring front-end web developer. I have studied in Computer Science for
                 two years and i am almost completing my three month web-development course with Learnio. Through my experiences, 
                 i have developed computational skills and designing skills through practice and collaborating with other people  </h4>


            </div>
          </div>
        </section>

    </div>
  )
}

export default Home
