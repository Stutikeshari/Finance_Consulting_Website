import React from 'react'

const Contacts = () => {
  return (
    <>
    <section className="bg-green-100">
        {/* Hero Section with Parallax */}
        <div
          className="relative h-[350px] flex items-center justify-center text-center bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/images/green-head1.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text Content */}
          <div
            className="relative z-10 px-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
             If you have an idea, we would love to hear about it.
            </p>
          </div>
        </div>
        </section>
        {/* Contact Form Section */}
        <section className="bg-green-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-[#084d0c]">
            Drop us a message for any query
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto my-4 rounded"></div>
          <p className="text-[#084d0c]  text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full  bg-green-300 text-green-500 text-2xl">
                📍
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#084d0c]">
                  Address
                </h4>
                <p className="text-[#084d0c] text-lg">
                  27 Division St, New York, NY 10002, USA
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-300 text-green-500 text-2xl">
                ✉️
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#084d0c] ">Email</h4>
                <p className="text-[#084d0c] text-lg">info@haiper.com</p>
                <p className="text-[#084d0c] text-lg">fax@haiper.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full  bg-green-300 text-green-500 text-2xl">
                ☎️
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#084d0c] ">Phone</h4>
                <p className="text-[#084d0c] text-lg">+ (321) 984 754</p>
                <p className="text-[#084d0c] text-lg">+1-212-9876543</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>

       {/* Right Side Button */}
        <div>
          <button
  className="
    bg-green-700 
    text-white 
    px-6 py-3 text-lg font-semibold 
    rounded-lg 
    border-2 border-transparent
    hover:bg-[#9ACD32] 
    hover:border-green-700
    hover:shadow-[6px_6px_15px_rgba(154,205,50,0.6)] 
    hover:scale-105 
    transition-all duration-300
  "
>
 Create Free Account
</button>
        </div>
          </form>
        </div>
      </div>
    </section>
      
      </>
  )
}

export default Contacts;