import React from 'react'

const AboutPage = () => {
  return (
    <>
    {/* about page */}
    <div className='about-wrapper flex justify-around items-center h-screen'>
    
        <div className="about-img " data-aos="fade-up-right">
            <img src="/images/experience-img1.png" alt="about img" />
        </div>
        <div className="about-content max-w-2xl mx-auto text-center md:text-left space-y-6" >
  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#084d0c]">
    Create seamless <br />
    payment experiences
  </h1>
  <p className="text-lg md:text-xl text-[#084d0c] leading-relaxed">
    Our technology platform enables businesses to create seamless payment experiences for their customers. From online payments to in-store transactions, we provide the tools and infrastructure needed to accept payments securely and efficiently.
  </p>
  <button className="px-8 py-3 bg-green-500 hover:bg-green-800 text-white font-semibold rounded-lg shadow-lg">
    Learn More
  </button>
    </div>
    </div>

    {/* about box  */}
    <div className="about-box flex justify-around items-center text-center py-16 bg-gray-200">
        <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-6xl font-bold text-green-600">10+</h2>
            <p className="text-gray-600 text-2xl ">Years of Experience</p>
        </div>
        <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-6xl font-bold text-green-600">500+</h2>
            <p className="text-gray-600 text-2xl">Happy Clients</p>
        </div>
        <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-6xl font-bold text-green-600">1200+</h2>
            <p className="text-gray-600 text-2xl">Projects Completed</p>
        </div>
        <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-6xl font-bold text-green-600">24/7</h2>
            <p className="text-gray-600 text-2xl ">Support Available</p>
        </div>
    </div>
    </>
  )
}

export default AboutPage