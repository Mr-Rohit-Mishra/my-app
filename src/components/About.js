import React from 'react'

export default function About(props) {
  return (
    <>
      

      <div className={`Aboutcontainer ${props.mode}`}>
        <img className="img-fluid" src="aboutslide.JPG" alt="About banner"/>
        <div className={"Aboutcontainer-content d-flex flex-column align-items-center px-5 my-5"}>
          <h3>ABOUT-US</h3>
          <p>Taj, India's Strongest Brand across industries and sectors*, is an iconic hospitality brand from the Indian Hotels Company Limited. The brand continues to be one of the most revered and loved hospitality brands with a legacy of over 116 years of impeccable service and genuine warmth. Embodying the spirit of “Tajness”, authentic original palaces, landmark hotels, idyllic resorts and natural safari lodges interpret the tradition of hospitality in a refreshingly modern way to create unique experiences and lifelong memories.</p>
        </div>
        <div className="displaycard justify-content-around d-flex px-5 my-5">
          <div className="card1">
            <h3>90</h3>
            <p>Hotels</p>
          </div>

          <div className="card2">
            <h3>13712</h3>
            <p>Keys</p>
          </div>

          <div className="card3">
            <h3>55</h3>
            <p>Destinations</p>
          </div>
          
        </div>
        <div className="card-container d-flex justify-content-around">
          <div class="card">
            <img src="slide1.JPG" class="card-img-top" alt="img"/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <button className="btn btn-primary">View Details</button>
          </div>
          <div class="card">
            <img src="slide2.JPG" class="card-img-top" alt="img"/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <button className="btn btn-primary">View Details</button>
          </div>
          <div class="card" >
            <img src="slide3.JPG" class="card-img-top" alt="img"/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
        <h3 className="text-center my-5">Unique Destination Arrangements</h3>
        <div className="card-container d-flex justify-content-around">
          <div class="card">
            <img src="slide1.JPG" class="card-img-top" alt="img"/>
            <div class="card-body d-flex">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
            
          </div>
          <div class="card">
            <img src="slide2.JPG" class="card-img-top" alt="img"/>
            <div class="card-body d-flex">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
            
          </div>
          <div class="card" >
            <img src="slide3.JPG" class="card-img-top" alt="img"/>
            <div class="card-body d-flex">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
            
          </div>
        </div>

        


      </div>
    </>
  )
}
