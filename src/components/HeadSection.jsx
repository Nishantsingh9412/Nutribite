import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

import '../css/HeaderSection.css';
import chef from '../images/Chef1.gif';
import menu from '../images/meal_planner.png';
import mainLogo from'../logo2.png';

const inputStyle = {
    border: '2px solid #609d9f',
}
const HeadSection = () => {
    const notify = () => toast.success('Menu opened in new tab ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (    
        <>
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-sm left "  >
                        <div className='nutribite-logo mb-2 ml-1'>
                            <NavLink to='/'>
                                <img className='logo-headsection' src={mainLogo} alt="logo" height={45} />
                            </NavLink>
                        </div>
                        <h1 className='hungryStyle animate__animated animate__bounceIn animate__slow '  > Hungry!!! </h1>
                        <h1 className='tiffinStyle '>  Order <span className='animate__animated animate__bounceIn animate__slower animate__repeat-2' style={{color:'orangered',padding:0,margin:0}}> Tiffin </span>  from Any Place We Will Reach. </h1>
                        <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                            <center>
                                <div className='d-flex gx-2 two-btns mt-4 '>
                                    <div className='p-2'>
                                        <a href="https://wa.me/+4917647268120?text=Hello+I+Want+To+Order+Tiffin" target="_blank"> 
                                            <button className='btn w-100 ' style={{backgroundColor:'#609D9F', color:'white'}}> Order Now</button>
                                        </a>
                                    </div>
                                    <div className='p-2'>
                                        <a href={menu} target="_blank"> 
                                            <button className='btn w-100' onClick={notify} style={{backgroundColor:'#609D9F', color:'white'}}> View Menu</button>
                                        </a>
                                    </div>
                                    
                                </div>
                            </center>
                    </div>
                    <div className="col-sm right ">
                            <img src={chef} class="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadSection
