import React from 'react';


import mainLogo from'../logo2.png';
import '../css/Footer.css';
const Footer = () => {
  return (
    <>

      <div style={{marginTop:'60px'  }}>
        <footer classNameName="footer"  >
          <div className="container">
            <div className="row">
              <div className="col-md-5">

              <a href='#'> <img src={mainLogo} alt=""  height={45}/></a>

                <div className="row" > 
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
                <hr />
              </div>
              <div className="col-md-5">

              <h2 className="text-md-left pb-4" style={{color:'teal'}}>Contact Us</h2>
                <form>
                  <fieldset className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                  </fieldset>
                  <fieldset className="form-group text-xs-right">
                    <button type="button" className="btn btn-info">Send</button>
                  </fieldset>
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
