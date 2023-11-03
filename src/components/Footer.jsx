import React, { useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom'
import whiteLogo from '../images/white_logo.png';
import '../css/Footer.css';
import MiddleSection from './MiddleSection';
import Working from './Working';

const Footer = () => {
  const ref = useRef(null);

  //------------------------ Checking scroll position  ------------------------------
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPosition = window.scrollY;
  //     console.log('Current Scroll Height:', currentScrollPosition);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToMid = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const scrollToPlans = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      // Apply the scroll position for small screens
      window.scrollTo({
        top: 2100, // Set the scroll position for small screens
        behavior: 'smooth',
      });
    } else {
      // Apply the scroll position for larger screens
      window.scrollTo({
        top: 1260, // Set the scroll position for larger screens
        behavior: 'smooth',
      });
    }
  };

  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top:5000,
  //     behavior: 'smooth',
  //   });
  // };

  return (

    <>
      <MiddleSection ref={ref} text={"How It Works"} />
      <Working />

      <div className='mt-5'>
        <footer classNameName='footer'>
          <div className="container">
            <center>
              <h2 className='p-0 m-0 headingContact'> Contact Us
                <hr className='ease-in' style={{ border: '2px solid #ffffff', width: '12%', }} />
              </h2>
            </center>
            <div className="row">
              <div className="col-md-5">

                <img className='footer-1-img' src={whiteLogo} alt="" height={120} />

                <div className="row " >
                  <div className="col-6">
                    <ul className="p-2 m-2 list-unstyled text-md  g-2 list-group">
                      <li className='list-group mb-1' style={{ cursor: 'pointer', userSelect: 'none' }} onClick={scrollToTop}> Home  </li>
                      <li className='list-group mb-1 text-wrap' style={{ cursor: 'pointer', userSelect: 'none' }} onClick={scrollToMid}> How it works  </li>
                      <li className='list-group mb-1' style={{ cursor: 'pointer', userSelect: 'none' }} onClick={scrollToPlans}> Plans  </li>
                      
                     <a href="https://wa.me/+4917647268120?text=Hello+I+Want+To+Become+Your+Partner" className='list-group mb-1' style={{textDecoration:'none', color:'#ffffff',fontWeight:500,fontFamily:'inherit'}} target="_blank"> 
                     Become Partner
                     </a>  
                      <NavLink className='p-0 m-0' to='/imprints' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none' }} >
                        <li className=' list-group mb-1 imprints-f-1'> Imprints  </li>
                      </NavLink>

                      {/* <li className='' style={{cursor:'pointer',userSelect: 'none'}} onClick={scrollToBottom}> Contact us </li> */}
                    </ul>
                  </div>
                </div>
                <div className='icons'>
                  {/* <a href=""> <BsFacebook  size={25} color='#1877F2' /> </a>
                 <a href=""> <AiOutlineInstagram  size={25} color='#bc2a8d'/> </a>
                 <a href=""> <RiTwitterXFill  size={25} color='black' /> </a>
                 <a href=""> <BsTelegram  size={25}  color='#0088cc'/> </a> */}
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
                <a href="https://wa.me/+4917647268120?text=Hello+I+Want+To+Order+Tiffin" target='_blank' className=' anchor p-0 m-0' style={{ textDecoration: 'none' }}>   <i class="fa-brands fa-whatsapp"> </i> &nbsp; +49-176-47268120  </a>
                <div>
                  <i class="fa-solid fa-house p-"> </i> &nbsp; Rusanov Logistics UG (hb) , HRB114200
                </div>
                {/* <form action='#' method='POST' style={{ fontWeight: '600' }}>
                  <div class="form-row ">
                    <div class="form-group col-md-12">
                      <label for="inputEmail4">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' required autoComplete='off' />
                    </div>
                  </div>

                  <div className='form-row'>
                    <div class="form-group col-md-6">
                      <label for="inputAddress">Address</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required autoComplete='off' />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputAddress2">Address Line 2</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                  </div>

                  <div class="form-row">

                    <div class="form-group col-md-12">
                      <label htmlFor="inputState">State</label>
                      <select id="inputState" class="form-control">
                        <option selected> Select State...</option>
                        <option value='cologne'>Cologne</option>
                        <option value='comingsoon'>Coming Soon</option>
                      </select>
                    </div>


                    <div class="form-group col-md-12">
                      <label htmlFor="message" > Message </label>
                      <textarea name='message' class='form-control' autoComplete='off' >  </textarea>
                    </div>



                  </div>

                  <button type="submit" class="btn btn-light w-100 mb-4 mt-3">Contact us</button>
                </form> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>

  )
}

export default Footer
