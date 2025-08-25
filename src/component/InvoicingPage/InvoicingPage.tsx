import Image from "next/image";
import React from "react";

const InvoicingPage = () => {
  return (
    <>
      {/* Invoice page */}
      <div className="invoice-wrapper flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 md:py-20">
        {/* Left Side - Text */}
        <div className="invoice-content max-w-xl text-center md:text-left space-y-4 md:space-y-6 md:ml-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#084d0c]">
            Retail Payment <br /> Processing
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#084d0c] leading-relaxed">
            Our technology platform enables businesses to create seamless
            payment experiences for their customers. From online payments to
            in-store transactions, we provide the tools and infrastructure
            needed to accept payments securely and efficiently.
            <br /> From online payments to in-store transactions, we provide the
            tools and infrastructure needed to accept payments securely and
            efficiently.
          </p>
        </div>

        {/* Right Side - Image */}
        <div
          className="invoice-Image mt-8 md:mt-0 md:ml-10 w-full md:w-1/2 flex justify-center"
          data-aos="fade-up-left"
        >
          <Image
            src="/images/image3.jpg"
            alt="invoice Image"
            className="w-full max-w-md md:max-w-2xl rounded-xl shadow-xl shadow-black/50 object-cover"
          />
        </div>
      </div>

      {/* Invoice second part */}
      <div className="grow-wrapper flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 md:py-20">
        {/* Left Side - Image */}
        <div
          className="grow-Image w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          data-aos="fade-up-right"
        >
          <Image
            src="/images/image2.jpg"
            alt="grow-Image"
            className="w-full max-w-md md:max-w-xl rounded-xl shadow-xl shadow-black/50 object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="grow-content max-w-xl text-center md:text-left space-y-4 md:space-y-6 md:ml-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#084d0c]">
            Online & eCom Payment <br /> Processing
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#084d0c] leading-relaxed">
            Our technology platform enables businesses to create seamless
            payment experiences for their customers. From online payments to
            in-store transactions, we provide the tools and infrastructure
            needed to accept payments securely and efficiently.
            <br />
            From online payments to in-store transactions, we provide the tools
            and infrastructure needed to accept payments securely and
            efficiently.
          </p>
        </div>
      </div>
    </>
  );
};

export default InvoicingPage;
