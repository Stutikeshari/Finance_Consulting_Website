import React from 'react'


const AboutPage = () => {
  return (
    <>
      {/* about page */}
      <div className="about-wrapper flex flex-col md:flex-row justify-around items-center h-auto md:h-screen px-6 py-12 gap-10">
        
        {/* image */}
        <div className="about-img w-full md:w-1/2 flex justify-center" data-aos="fade-up-right">
          <img 
            src="/images/experience-img1.png" 
            alt="about img" 
            className="w-[90%] md:w-[80%] lg:w-[70%] object-contain"
          />
        </div>

        {/* content */}
        <div className="about-content w-full md:w-1/2 max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#084d0c]">
            Create seamless <br className="hidden sm:block" />
            payment experiences
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#084d0c] leading-relaxed">
            Our technology platform enables businesses to create seamless payment experiences for their customers. From online payments to in-store transactions, we provide the tools and infrastructure needed to accept payments securely and efficiently.
          </p>
          <button className="px-6 sm:px-8 py-3 bg-green-500 hover:bg-green-800 text-white font-semibold rounded-lg shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* about box */}
      <div className="about-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-16 px-6 bg-gray-200">
        
        <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-600">10+</h2>
          <p className="text-gray-600 text-lg sm:text-xl">Years of Experience</p>
        </div>

        <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-600">500+</h2>
          <p className="text-gray-600 text-lg sm:text-xl">Happy Clients</p>
        </div>

        <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-600">1200+</h2>
          <p className="text-gray-600 text-lg sm:text-xl">Projects Completed</p>
        </div>

        <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-600">24/7</h2>
          <p className="text-gray-600 text-lg sm:text-xl">Support Available</p>
        </div>
      </div>

     
    </>
  )
}

export default AboutPage