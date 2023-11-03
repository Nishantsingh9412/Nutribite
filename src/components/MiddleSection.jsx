import React, { forwardRef } from 'react';
import 'animate.css';

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


const MiddleSection = ({text},ref) => {
    return (


        <div ref={ref} className='container-fluid pt-5 mt-2 mb-4'>
            {/* Whatsapp Button  start */}
            <div className="">
                <a href="https://wa.me/+4917647268120?text=Hello+I+Want+To+Order+Tiffin" target="_blank" className="whatsapp-btn" style={{ color: 'white', textDecoration: 'none' }}>
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>

            {/* Whatsapp Button End */}




            <div className=''>

                <div className='text-center' >
                    <br />
                    <h1> {text} </h1>
                    <center>
                    <hr className='animate__animated animate__bounceIn animate__infinite animate__slower how_works_hr'  />
                    </center>   
                </div>
                <div className='fourCards row mt-4 ' >
                    <div className='col-sm-4   threeImgs'>
                        <img src={OrderTakes} className='img-fluid' style={imageStyle} alt="" />
                        <p className='font-weight-bold'> Phase 1: Nutribite Takes Order </p>
                        <span>Nutribite initiates its tiffin delivery service by accepting customer orders, confirming, processing payments, and providing chat support on Whatsapp.</span>
                    </div>
                    <div className='col-sm-4  threeImgs'>
                        <img src={OrderForward} className='img-fluid' style={imageStyle} alt="" />
                        <p className='font-weight-bold'> Phase 2: Order Forwarding </p>
                        <span> Nutribite forwards customer orders to freelance staff for meal preparation and delivery, enhancing efficiency in the meal service process and ensuring timely, quality tiffin deliveries.  </span>
                    </div>
                    <div className='col-sm-4  threeImgs'>
                        <img src={Cooking} className='img-fluid' style={imageStyle} alt="" />
                        <p className='font-weight-bold'> Phase 3 : Cooking </p>
                        <span> Freelance staff follow Nutribite's recipes to cook meals, ensuring the consistent quality of tiffin deliveries and meeting customer expectations for taste and nutrition. </span>
                    </div>

                    <div className='col-sm-4  threeImgs'>
                        <img src={Logistics} className='img-fluid' style={imageStyle} alt="" />
                        <p className='font-weight-bold' > Phase 4: handing over order to our logistic partner</p>
                        <span> Nutribite hands over customer orders to city-specific logistics partners for efficient morning or evening deliveries, enhancing the overall tiffin service experience. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(MiddleSection)
