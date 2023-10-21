import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import chef from '../images/Chef1.gif';

const h1style = {
    color: '#609d9f',
    paddingRight: 100,
    paddingTop: 100,
    fontWeight: 700,
    fontSize: 50,
    // padding-right: 358px;
    // lineHeight: 10,
    // padding: '2.5em',

}

const secondHeading = {

}

const chefStyles = {
    width: 630,
    paddingLeft: 20
}

const inputStyle = {
    border: '2px solid #609d9f',
}

// const bgsection = {
    // border:'2px solid black',
    // background:'#609d9f'
    
// }

const HeadSection = () => {
    const notify = () => toast.success('🦄Signed Up Successfully ', {
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
        <div>
            <div className="container">
                <div className="row" >
                    <div className="col-sm"  style={{paddingRight:100}}>
                        <h1 style={h1style}> Hungry!!! </h1>
                        <h1 style={secondHeading}>  Order Tiffin from Any Place We Will Reach. </h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1" >Email address</label>
                            <input type="email" class="form-control" style={inputStyle} placeholder="Enter email" />
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

                    <div className="col-sm">
                        <img src={chef} className='img-fluid'  style={chefStyles} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadSection
