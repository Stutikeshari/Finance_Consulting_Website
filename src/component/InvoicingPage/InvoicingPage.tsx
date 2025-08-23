import React from 'react'

const InvoicingPage = () => {
  return (
    <>
    {/* Invoice page */}
<div className="invoice-wrapper flex flex-col md:flex-row justify-between items-center h-screen px-6 md:px-16">
  
  {/* Left Side - Text */}
  <div className="invoice-content max-w-xl text-center md:text-left space-y-6 md:ml-12">
    <h1 className="text-5xl md:text-4xl font-bold leading-tight text-[#084d0c]">
      Retail Payment <br/> Processing
    </h1>
    <p className="text-md md:text-lg text-[#084d0c]leading-relaxed">
      Our technology platform enables businesses to create seamless payment experiences for their customers. From online payments to in-store transactions, we provide the tools and infrastructure needed to accept payments securely and efficiently.<br/> From online payments to in-store transactions, we provide the tools and infrastructure needed to accept payments securely and efficiently.
    </p>
    
    {/* <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg">
      Find Out More
    </button> */}
  </div>

  {/* Right Side - Image */}
  <div className="invoice-img mt-10 md:mt-0 md:ml-10 " data-aos="fade-up-left">
    <img src="/images/image3.jpg" alt="invoice img" className="max-w-2xl rounded-xl shadow-xl shadow-black/50" />
  </div>
</div>

    {/* invoice second part */}
      <div className='grow-wrapper flex justify-around items-center'>
    
        <div className="grow-img max-w-xl rounded-xl shadow-xl shadow-black/50 h-90 ml-10" data-aos="fade-up-right">
            <img src="/images/image2.jpg" alt="grow-img"className='rounded-xl'/>
        </div>
        <div className="grow-content max-w-xl text-center md:text-left space-y-6 md:ml-12" >
            <h1 className="text-5xl md:text-4xl font-bold leading-tight text-[#084d0c]">
            Online & eCom Payment<br/> Processing
            </h1>
            <p className="text-md md:text-lg text-[#084d0c] leading-relaxed">
            Our technology platform enables businesses to create seamless payment experiences for their customers. From online payments to in-store transactions, we provide the tools and infrastructure needed to accept payments securely and efficiently.<br/>From online payments to in-store transactions, we provide the tools and infrastructure needed to accept payments securely and efficiently.
            </p>
           
  
            </div>
            </div>
</>
  )
}

export default InvoicingPage