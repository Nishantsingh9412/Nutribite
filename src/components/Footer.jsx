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
              <div className="col-md-5 ">

              <h2 className="text-md-left p-0 m-0" > Contact Us
                <hr  className='ease-in' style={{border:'2px solid #609d9f',width: '15%',}}/>
                </h2>
                <form>
  <div class="form-row ">
    <div class="form-group col-md-8">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email'/>
    </div>
  </div>
  <div class="form-group ">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address Line 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="form-row">
    
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected> Select State...</option>
        <option value='cologne'>Cologne</option>
        <option value='comingsoon'>Coming Soon</option>
      </select>
    </div>
    
  </div>
  <button type="submit" class="btn btn-light w-100 mb-4 mt-3">Contact us</button>
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
