import React from 'react';

import munchies from '../images/munchies.png';
import delivery from '../images/Deliv.png';
import selectimg from '../images/Select-rafiki.png';
import SearchImg from '../images/Search-bro.png';
import OrderTakes from '../images/order_takes.gif';
import OrderForward from '../images/order_forwarding.gif';
import Cooking from '../images/Cooking.gif';
import Logistics from '../images/Logistics.gif';


import '../css/MiddleSection.css'

const imageStyle = {
    height: '134px',
    width: '162px'
}


const MiddleSection = () => {
    return (


        <div className='container-fluid pt-5 mt-2 mb-4'>
            {/* Whatsapp Button  start */}
            <div className="">
                <a href="https://wa.me/+4917662020701?text=hello+123" target="_blank" className="whatsapp-btn" style={{ color: 'white', textDecoration: 'none' }}>
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>

            {/* Whatsapp Button End */}




            <div className=''>

                <div className='text-center' >
                    <br />
                    <h1> How It Works </h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, iure deserunt cumque nulla quasi tenetur expedita sint quod illum quos!</span>
                </div>
                <div className='fourCards row mt-5 ' >
                    <div className='col-sm-4   threeImgs'>
                        <img src={OrderTakes} className='img-fluid' style={imageStyle} alt="" />
                        <p className='font-weight-bold'> Phase 1: Nutribite Takes Order </p>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime repellat ipsum fugiat recusandae laborum expedita voluptate inventore. Necessitatibus, nulla.</span>
                    </div>
                    <div className='col-sm-4  threeImgs'>
                        <img src={OrderForward} className='img-fluid' style={imageStyle} alt="" />
                        <p className='font-weight-bold'> Phase 2: Order Forwarding </p>
                        <span> Order will be forwarded to our freelancer Staff . ----- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, reiciendis.  </span>
                    </div>
                    <div className='col-sm-4  threeImgs'>
                        <img src={Cooking} className='img-fluid' style={imageStyle} alt="" />
                        <p className='font-weight-bold'> Phase 3 : Cooking </p>
                        <span> They will cook with some recipe provide by NUTRIBITE . ---- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, possimus? </span>
                    </div>

                    <div className='col-sm-4  threeImgs'>
                        <img src={Logistics} className='img-fluid' style={imageStyle} alt="" />
                        <p className='font-weight-bold' > Phase 4: handing over order to our logistic partner</p>
                        <span> In morning or in evening orders will be handed over to our logistics partner in particular city. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleSection
