import React from 'react';
// import { TiPlus } from 'react-icons/ti';
// import {BiFoodMenu} from 'react-icons/bi'

import kudiye from '../images/chef_kudiye.gif';
import mundeya from '../images/chef_munda.gif';
import '../css/Plans.css'


const imageStyle = {
  height: '700px',
  width: '320px'
}

const cc={
  height:'400px',
  width:'300px',
  borderRadius:'30px',
  border: '4px solid #609d9f',
}


const MiddleSection = () => {
  return (
    <>

      <center >
        <h1 className='pt-5'>  <b>Our  Plan </b> </h1>
      </center>

      <div className='container-fluid pt-4 main-class' >
        <div className='row'>
          <div className='col-sm-3 '>
              <img className='img-fluid img-thumbnail girlImg'  src={kudiye} style={imageStyle} alt="" />
              {/* <p>Search Favourite Food </p> */}
              {/* <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda officiis soluta officia aperiam qui non voluptate repudiandae tempora, quas dolor autem reprehenderit ex nostrum sit optio mollitia dolorem ratione!  </small> */}
          </div>
              <div class="col-sm-3  " style={cc} >
                <div class="card-header">
                  {/* <h3 class="my-0 font-weight-normal" style={{ marginLeft:'56px'}}> Student  <BiFoodMenu  /> </h3> */}
                  
                  <br />
                  <h5> €20 - Tiffin <small> <b> (one time fees) </b></small>  </h5>
                      <span className='pl-5 ml-5'> <i class="fa-solid fa-plus"></i> </span>
                        {/* <div style={{paddingLeft:'89px'}}>  <TiPlus /> </div> */}
                </div>
                <div class="card-body " style={{paddingTop:0}}>
                  <h1 class="card-title pricing-card-title" style={{paddingLeft:40}}> €220 <small class="text-muted">/ mo</small></h1>
                  <ul class="list-unstyled mt-3 mb-4 pl-5 m-3">
                    <li> 1 vegetable </li>
                    <li> 1 type of pulse </li>
                    <li> 4 Delicious Roti </li>
                    <li> Plain White Rice </li>
                  </ul>
                  <button type="button" class="btn btn-lg btn-block btn-outline-info">Order Now </button>
                </div>
              </div>


          <div className='col-sm-3 ' >
            <img  className='img-fluid img-thumbnail boyImg' src={mundeya} style={imageStyle} alt="" />
            {/* <p> get fastest Delivery and enjoy  </p> */}
            {/* <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda officiis soluta officia aperiam qui non voluptate repudiandae tempora, quas dolor autem reprehenderit ex nostrum sit optio mollitia dolorem ratione!  </small> */}
          </div>
        </div>
      </div>
    

  </>
  )
}

export default MiddleSection
