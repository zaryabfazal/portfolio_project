import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/zary2.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"20%", backgroundPosition:"left 100px top 100px" }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p  data-aos="zoom-in-up">Zaryab</p>
            <p  data-aos="zoom-in-up">Fazal Hussain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
