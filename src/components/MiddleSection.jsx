import React from 'react';

import munchies from '../images/munchies.png';
import delivery from '../images/Deliv.png';
import selectimg from '../images/Select-rafiki.png';
import SearchImg from  '../images/Search-bro.png';

const imageStyle = {
    height: '134px',
    width: '162px'
}


const MiddleSection = () => {
  return (
    <div className='container'>
        <div className='text-center' >
            <br />
            <h1> How It Works </h1>
            <p > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus porro rem amet repellat esse consequatur non, earum laudantium officia voluptates, labore quod officiis, repudiandae id quasi delectus rerum nemo!  </p>
        </div>   

        <div className='container' style={{paddingTop:'50px',paddingLeft:'80px'}}>
            <div className='row mt-5'>
                <div className='col-sm'>
                    <img src={SearchImg} className='img-fluid'  style={imageStyle} alt="" />
                        <p>Search Favourite Food </p>
                            <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda officiis soluta officia aperiam qui non voluptate repudiandae tempora, quas dolor autem reprehenderit ex nostrum sit optio mollitia dolorem ratione!  </small>
                </div>
                <div className='col-sm img-fluid'  style={{paddingLeft:100}}>
                        <img src={selectimg}  style={imageStyle}  alt="" />
                            <p> Choose your food </p>
                                <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda officiis soluta officia aperiam qui non voluptate repudiandae tempora, quas dolor autem reprehenderit ex nostrum sit optio mollitia dolorem ratione!  </small>
                </div>
                <div className='col-sm img-fluid'  style={{paddingLeft:100}}>
                    <img src={delivery} style={imageStyle} alt="" />
                        <p> get fastest Delivery and enjoy  </p>
                            <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda officiis soluta officia aperiam qui non voluptate repudiandae tempora, quas dolor autem reprehenderit ex nostrum sit optio mollitia dolorem ratione!  </small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleSection
