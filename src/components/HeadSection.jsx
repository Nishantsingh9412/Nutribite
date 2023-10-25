import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const notify = () => toast.success(' Mail Sent ', {
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
                    <div className="col-sm left"  >
                        <h1 className='hungryStyle' > Hungry!!! </h1>
                        <h1 className='tiffinStyle'>  Order <span> Tiffin </span>  from Any Place We Will Reach. </h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1" >Email address</label>
                            <input type="email" class="form-control w-75" style={inputStyle} placeholder="Enter email" />
                            <br />
                            <button type='submit' className='btn btn-info' onClick={notify}> Order Now </button>
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
                        </div>
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
