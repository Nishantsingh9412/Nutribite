import React from 'react';
// import { TiPlus } from 'react-icons/ti';
// import {BiFoodMenu} from 'react-icons/bi'

import kudiye from '../images/chef_kudiye.gif';
import mundeya from '../images/chef_munda.gif';


const imageStyle = {
  height: '338px',
  width: '320px'
}

const cc={
  borderRadius:'30px',
  // borderStyle: 'solid teal',
  // borderWidth: 4,
  // borderWidth:'thick'
  border: '4px solid #609d9f',
}


const MiddleSection = () => {
  return (
    <>

      <center >
        <h1 style={{ color: '#609d9f', paddingTop: 40 , paddingLeft:20 }}>  <b>Our  plan </b> </h1>
      </center>

      <div className='container' style={{ paddingTop: '50px', paddingLeft: '80px' }}>
        <div className='row'>
          <div className='col-sm'>
            <img src={kudiye} style={imageStyle} alt="" />
            {/* <p>Search Favourite Food </p> */}
            {/* <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda officiis soluta officia aperiam qui non voluptate repudiandae tempora, quas dolor autem reprehenderit ex nostrum sit optio mollitia dolorem ratione!  </small> */}
          </div>

          <div class="card mb-4 box-shadow  " style={cc} >
            <div class="card-header">
              {/* <h3 class="my-0 font-weight-normal" style={{ marginLeft:'56px'}}> Student  <BiFoodMenu  /> </h3> */}
              
              <br />
              <h5> €20 - Tiffin <small> <b> (one time fees) </b></small>  </h5>
                  {/* <center><h3>+</h3> </center> */}
                    {/* <div style={{paddingLeft:'89px'}}>  <TiPlus /> </div> */}
            </div>
            <div class="card-body" style={{paddingTop:0}}>
              <h1 class="card-title pricing-card-title" style={{paddingLeft:40}}> €220 <small class="text-muted">/ mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4 pl-5 m-3">
                <li> 1 vegetable </li>
                <li> 1 type of pulse </li>
                <li> 4 Delicious Roti </li>
                <li> Plain White Rice </li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-outline-info">Contact us </button>
            </div>
          </div>


          <div className='col-sm' style={{ paddingLeft:'40px'}}>
            <img src={mundeya} style={imageStyle} alt="" />
            {/* <p> get fastest Delivery and enjoy  </p> */}
            {/* <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda officiis soluta officia aperiam qui non voluptate repudiandae tempora, quas dolor autem reprehenderit ex nostrum sit optio mollitia dolorem ratione!  </small> */}
          </div>
        </div>
      </div>
    

  </>
  )
}

export default MiddleSection
