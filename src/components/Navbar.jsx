import React from 'react'
import mainLogo from'../logo2.png';

import '../css/Navbar.css'


const Navbar = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            
            <a className="navbar-brand" href="#"><img className='logoImg' src={mainLogo} alt="logo" height={45} /></a>
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pr-4 logoImg" id="navbarNav" >
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <p className="nav-link"  >Home <span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item">
                       
                        <a className="nav-link" > Working </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Plan </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us </a>
                    </li>

                    {/* <li className="nav-item"> */}
                        {/* <a className="nav-link disabled" href="#">Disabled</a> */}
                    {/* </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
