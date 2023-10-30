import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

import '../css/HeaderSection.css';
import chef from '../images/Chef1.gif';

// const h1style = {
//     color: '#609d9f',
//     paddingRight: 100,
//     paddingTop: 100,
//     fontWeight: 700,
//     fontSize: 50,
//     // padding-right: 358px;
//     // lineHeight: 10,
//     // padding: '2.5em',
// }


const inputStyle = {
    border: '2px solid #609d9f',
}

// const bgsection = {
// border:'2px solid black',
// background:'#609d9f'

// }

const HeadSection = () => {
    const notify = () => toast.success(' Menu Downloaded ', {
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
                                        <a href="https://wa.me/+4917662020701?text=hello+i+want+to+order+tiffin" target="_blank"> 
                                            <button className='btn w-100 ' style={{backgroundColor:'#609D9F', color:'white'}}> Order Now</button>
                                        </a>
                                    </div>
                                    <div className='p-2'>
                                        {/* <a href="https://wa.me/+4917662020701?text=hello+i+want+to+order+tiffin" target="_blank">  */}
                                            <button className='btn w-100' onClick={notify} style={{backgroundColor:'#609D9F', color:'white'}}> Download Menu</button>
                                        {/* </a> */}
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
