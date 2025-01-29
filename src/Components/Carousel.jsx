import "./Carousel.css"


const Caroucel = () => {
  return (
    <div>
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../../public/Images/110442-line-light_blue-atmosphere-azure-light-x750.jpg" className="d-block w-100 h-80" alt="" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Who am I ?</h5>
                        <p>An aspiring front-end web-developer, inspired by making a great positive impact with a vision of making meaningful contributions in the world of tech. </p>
                        <a href="#"><button className="btn btn-primary">More</button></a>
                    </div>
                </div>
                <div className="carousel-item active">
                   
                    <img src="../../public/Images/istockphoto-817486028-612x612.jpg" className="d-block w-100 h-80" alt="" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>My Background </h5>
                        <p>Having been gone through IB system which is a rigorous and tough caurriculum aimed a producing world class citizens with critical thinking and problem-solving skills. I posses the necessary skills to counter problems and improve our experience when interacting with computers. .</p>
                        <a href="#"><button className="btn btn-primary">More</button></a>
                    </div>

                </div>
                <div className="carousel-item active">
                    <img src="../../public/Images/wp6784639.jpg" className="d-block w-100 h-80" alt="" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>My Journey </h5>
                        <p>My journey in tech has been fuelled with curiosity to explore how we can empower ourselves with tech skills. This lead to me choosing Computer Science in as one of my subjects in the IB course. Now, I am about to finish my course about web-development with Learnio.</p>
                        <a href="#"><button className="btn btn-primary">More</button></a>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

        </div>
       
       
        
      
    </div>
  )
}

export default Caroucel
