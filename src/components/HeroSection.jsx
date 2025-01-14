import { useState } from 'react';
import backgroundImage1 from '../assets/Background-1.webp';
import { Navbar } from './Navbar';

function HeroSection() {
    const [loaded, setLoaded] = useState(false);

    return (
        <header className="relative w-full h-[650px] mb-20">
            {/* Navbar */}
            <div className="absolute top-0 left-0 z-50 w-full">
                <Navbar />
            </div>

            {/* Background Image */}
            <div className="relative z-0 w-full h-full">
                <img
                    src={backgroundImage1}
                    alt="Group of diverse students"
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                        loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setLoaded(true)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col justify-center items-center px-4 h-full text-center">
                    <h1 className="mb-4 font-bold text-4xl text-white md:text-4xl lg:text-5xl">
                        Empowering Your Global Journey
                    </h1>
                    <p className="mb-6 text-base text-white md:text-lg lg:text-lg">
                        Expert guidance for visas, work placements, and studying abroad.
                    </p>
                    <div className=" p-1 rounded-md">
                        <div className="flex justify-center items-center rounded-lg bg-green-500 text-white w-full h-full">
                            <a
                                href="#contact"
                                className="px-6 py-3  text-lg text-white"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeroSection;
