import React from 'react';
import '../css/AboutUs.css'; 
import aboutImage1 from '../assets/card6.jpg'; 
import aboutImage2 from '../assets/card2.webp'; 

const AboutUs = () => {
    return (
        <section id='about' className="about-us-section py-16 px-6 bg-gray-50">
            <div className="container mx-auto max-w-[1120px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
                {/* Left Images */}
                <div className="relative">
                    <img
                        src={aboutImage1}
                        alt="Person holding a passport"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <img
                        src={aboutImage2}
                        alt="Person smiling"
                        className="absolute bottom-0 left-10 w-[60%] h-auto rounded-lg shadow-lg border-4 border-white"
                    />
                </div>

                {/* Right Text */}
                <div className="text-section space-y-6">
                    <h3 className=" text-sm font-semibold uppercase tracking-wide">
                        About Us
                    </h3>
                    <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                        Not Just Traditional Visa & Immigration Firm
                    </h2>
                    <p className="text-gray-600">
                    we are driven by a passion for innovation and excellence, delivering solutions that inspire and create value. With a commitment to quality and trust, we aim to make a meaningful impact in everything we do.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="text-green-600">
                                <span className="material-icons text-3xl">check_circle</span> {/* Material icon */}
                            </div>
                            <p className="text-gray-700">
  <strong>Trusted Expertise</strong> <br />
  Our experienced team ensures tailored solutions that meet your unique needs.
</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="text-green-600">
                                <span className="material-icons text-3xl">location_on</span> {/* Material icon */}
                            </div>
                            <p className="text-gray-700">
  <strong>Global Reach</strong> <br />
  We are dedicated to serving clients worldwide with unparalleled commitment and care.
</p>
                        </div>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium shadow-md transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
