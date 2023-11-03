import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'

import whiteLogo from '../images/white_logo.png';
import '../css/Footer2.css';
import { ScrollToTop } from './Imprints';

const hrStyle = {
    border: '2px solid white',
    marginTop: '5vw'
}

const Footer2 = () => {
    return (
        <>
            <ScrollToTop />
            <hr style={hrStyle} />
            <div className='mt-5'>
                <footer>
                    <div className="container">
                        <center>
                            <h2 className='p-0 m-0 headingContact'> Contact Us
                                <hr className='ease-in' style={{ border: '2px solid #ffffff', width: '12%', }} />
                            </h2>
                        </center>
                        <div className="row">
                            <div className="col-md-5 ">
                                <img className='footer-2-img' src={whiteLogo} alt="" height={120} />
                                <div className="row " >
                                    <div className="col-6">
                                        <ul className=" text-md list-unstyled ul-items-footer2">
                                            <NavLink to='/' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none' }} >
                                                <li> Home  </li>
                                            </NavLink>
                                            <NavLink to='/' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none' }} >
                                                <li> How it Works  </li>
                                            </NavLink>
                                            <NavLink to='/' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none' }} >
                                                <li> Plans  </li>
                                            </NavLink>
                                            <a className='partner list-group mb-1' href="https://wa.me/+4917647268120?text=Hello+I+Want+To+Become+Your+Partner"  style={{textDecoration:'none',color:'white'}} target="_blank">
                                                Become Partner
                                            </a>


                                            <NavLink to='/imprints' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none' }} >
                                                <li> Imprints  </li>
                                            </NavLink>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className='icons'>
                                </div>
                                <br />
                            </div>
                            <div className="col-md-2">
                                <br /><br />
                            </div>
                            <div className="col-md-5 contact">
                                <h4 className="text-md-left p-0 m-0 " > Get in touch
                                    <hr className='ease-in' style={{ border: '2px solid #ffffff', width: '15%', }} />
                                </h4>
                                <a href="mailto:nutribite@protonmail.com" className=' anchor p-0 m-0' style={{ textDecoration: 'none' }}>   <i class="fa-solid fa-envelope"> </i> &nbsp;nutribite@protonmail.com  </a>
                                <br />
                                <a href="https://wa.me/+4917662020701?text=Hello+I+Want+To+Order+Tiffin" target='_blank' className=' anchor p-0 m-0' style={{ textDecoration: 'none' }}>   <i class="fa-brands fa-whatsapp"> </i> &nbsp;+91-11000 - 55004  </a>
                                <div>
                                    <i class="fa-solid fa-house p-"> </i> &nbsp; Rusanov Logistics UG (hb) , HRB114200
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Footer2
