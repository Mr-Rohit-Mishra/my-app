import React from 'react'

export default function Footer(props){

    // onclick="document.getElementById('modeimg').src='sun.svg'"
    // onclick="document.getElementById('modeimg').src='moon.svg'

    const handleDarkClick =()=>{
        document.getElementById('modeimg').src='moon.svg' ;
        document.body.style.backgroundColor='#000'
       
    }
    const handlepurpleClick =()=>{
        document.getElementById('modeimg').src='purple.jpg' ;
        document.body.style.backgroundColor='#37008091'
       
    }
    const handleblueClick =()=>{
        document.getElementById('modeimg').src='blue.jpg' ;
        document.body.style.backgroundColor='blue'
       
    }
    const handlegrayClick =()=>{
        document.getElementById('modeimg').src='gray.jpg' ;
        document.body.style.backgroundColor='#a9a9a9c4'
       
    }

    const handleLightClick =()=>{
        document.getElementById('modeimg').src='sun.svg' ;
        document.body.style.backgroundColor='#fff'
    }

    // let style={
    //     backgroundColor:'white',
    //     color: 'black',
    // }

    return(
        <>
        <div className={`footer ${props.mode}`} >
            <div className="row1">
                <ul className="footerul">
                    <li><img src="logo192.png" alt="footerlogo"/></li>
                    <li>277-C Bank Street<br/> Amstradem,122001 </li>
                    <div className="Social-links">
                        <a href="/"><img id="social-logo" src="logo192.png" alt="img"/></a>
                        <a href="/"><img id="social-logo" src="logo192.png" alt="img"/></a>
                        <a href="/"><img id="social-logo" src="logo192.png" alt="img"/></a>
                        <a href="/"><img id="social-logo" src="logo192.png" alt="img"/></a>
                    </div>
                </ul>
            </div>
            <div className="row2"  >
                <ul className="footerul">
                    <h4>Services</h4>
                    <li>24/7 Support</li>
                    <li>Book Now Pay Later</li>
                    <li>Affordable</li>
                    <li>Premium Rooms</li>
                </ul>
            </div>
            <div className="row3"  >
                <ul className="footerul" >
                    <h4>Top Destinations</h4>
                    <li>Diu hotels</li>
                    <li>Guwahati hotels</li>
                    <li>Hyderabad hotels</li>
                    <li>Mahabaleshwar hotels</li>
                    <li>Gangtok hotels</li>
                    <li>Munnar hotels</li>
                    <li>Puri hotels</li>
                    <li>Phuket City hotels</li>
                </ul>
            </div>
            <div className="row4" >
                <ul className="footerul">
                    <h4>Parteners</h4>
                    <li>YCS partner portal</li>
                    <li>Partner Hub</li>
                    <li>Advertise on Agoda</li>
                    <li>Affiliates</li>
                    <li>Connectivity partners</li>
                </ul>
                <div  className="btn-group d-flex px-5">
                    <button type="button"  className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><img  id="modeimg" src="sun.svg" alt="img"/></button>
                    <ul  className="dropdown-menu">
                      <button  className="dropdown-item" onClick={handleDarkClick}>Dark<img  className="mx-2" src="moon.svg" alt="icon"/></button>
                      <button  className="dropdown-item" onClick={handleLightClick}>Light<img className="mx-2"  src="sun.svg" alt="icon"/></button>
                      <button  className="dropdown-item" onClick={handlepurpleClick}>Purple-Dark<img className="mx-2"  src="purple.jpg" alt="icon"/></button>
                      <button  className="dropdown-item" onClick={handleblueClick}>Blue-Dark<img  className="mx-2" src="blue.jpg" alt="icon"/></button>
                      <button  className="dropdown-item" onClick={handlegrayClick}>Grey-Dark<img className="mx-2"  src="gray.jpg" alt="icon"/></button>
                    </ul>
                </div>
            </div>
        </div>
        
        
        </>
    )
}