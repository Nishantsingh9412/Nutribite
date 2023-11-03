import React from 'react'

import HeadSection from './HeadSection'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
         {/* <Navbar /> */}
         <HeadSection />
        
        {/* <MiddleSection /> */}           {/* This is in footer section */}      
        {/* <Working /> */}                 {/* This is in footer section */}
        <Footer />
    </div>
  )
}

export default Home
