import React from 'react';


import whiteLogo from'../images/white_logo.png';

import '../css/Footer.css';
const Footer = () => {
  return (
    <>

      <div className='mt-5'>
        <footer classNameName="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5">

                   <img  src={whiteLogo} alt=""  height={120} />

                <div className="row " > 
                  <div className="col-6">
                    <ul className="list-unstyled">
                      <li><a href="#"  style={{textDecoration:'none'}}>Home</a></li>
                      <li><a href="#"  style={{textDecoration:'none'}}>Features</a></li>
                      <li><a href="#"  style={{textDecoration:'none'}}>Pricing</a></li>
                      <li><a href="#"  style={{textDecoration:'none'}}>Contact us </a></li>
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
              <div className="col-md-5">

              <h2 className="text-md-left p-0 m-0" >Contact Us
                <hr  className='ease-in' style={{border:'2px solid #609d9f',width: '15%',}}/>
                </h2>
                <form>
                  <label htmlFor='email' className="form-group" />
                    Email :
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  <label htmlFor='message' className="form-group pt-3" />
                    Enter Message :
                    <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                  <label className="form-group text-xs-right" />
                    <button type="button" className="btn btn-light text-dark   mt-4 mb-4">Send</button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>

  )
}

export default Footer
