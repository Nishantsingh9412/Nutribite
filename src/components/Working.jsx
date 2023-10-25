import React from 'react'

import '../css/Working.css';
import kudiye from '../images/chef_kudiye.gif';
import mundeya from '../images/chef_munda.gif';




const Working = () => {
  return (
    <>  
      <h2 className='text-center mt-5'>Our Plan</h2>
      <hr  className='' style={{border:'2px solid #609d9f', width:'15%', marginLeft:'42vw'}}/>
      <div class="row row-cols-1 row-cols-md-3 g-4 main-content m-0 pt-4">
        <div class="col">
          <div class="card">
            <img src={kudiye} className="card-img-top w-100 img-responsive" alt="..." />
                    {/* <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div> */}
          </div>
        </div>

        <div className="col">
          <div className="card">
            {/* <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." /> */}
            <div className="card-body ">

              <h5 className="card-title text-center ">Student Plan &nbsp; <i className="fa-solid fa-school" ></i></h5>

              <h3 className='text-center'>&euro; 20 Tiffin fees (one time fees) </h3>
              <h3 className='text-center-plus'> + </h3>
              <h3 className='text-center'> &euro; 220 / mo </h3>
              <hr style={{ border: '2px solid #609d9f ' }} />
              <p className="card-text pt-3"> 1 Vegetable  &nbsp; <i class="fa-solid fa-carrot"></i> </p>
              <p className="card-text"> 1 Type of pulse &nbsp;  <i class="fa-solid fa-plate-wheat"></i></p>
              <p className="card-text"> 4 Rotis  &nbsp; <i class="fa-solid fa-wheat-awn"></i></p>
              <p className="card-text"> Plain white rice &nbsp; <i class="fa-solid fa-bowl-rice"></i> </p>

              {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
            </div>
            <button className='btn btn-info font-weight-bold'> Order now </button>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={mundeya} className="card-img-top w-100 img-responsive" alt="..." />
            {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Working
