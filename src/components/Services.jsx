import React from 'react';
import '../css/Services.css'; 
import background from '../assets/bg1.jpg';

function Services() {
  const services = [
    {
      id: 1,
      icon: 'school',
      title: 'Education Visa',
      description:
        'We offer detailed guidance to help you secure admission in top institutions worldwide. From documentation to visa interviews, we simplify the process for you.',
      image: background,
    },
    {
      id: 2,
      icon: 'business',
      title: 'Business Immigration',
      description:
        'Whether you are an entrepreneur or an investor, we provide tailored support for establishing your business in a foreign market with ease.',
      image: background,
    },
    {
      id: 3,
      icon: 'work',
      title: 'Skilled Immigration',
      description:
        'Navigate the complexities of immigration processes for skilled professionals with our expert insights and dedicated services.',
      image: background,
    },
    {
      id: 4,
      icon: 'family_restroom',
      title: 'Spouse/Family Visas',
      description:
        'We help families reunite with seamless visa processing services designed to minimize delays and maximize peace of mind.',
      image: background,
    },
    {
      id: 5,
      icon: 'flight',
      title: 'Tourist & Visitor Visas',
      description:
        'Plan your next adventure with our comprehensive tourist visa assistance services. Enjoy hassle-free travel to your dream destinations.',
      image: background,
    },
    {
      id: 6,
      icon: 'house',
      title: 'Resident Return Visas',
      description:
        'Permanent residents can count on us for smooth visa renewals, ensuring seamless re-entry to the country of residence.',
      image: background,
    },
  ];

  return (
    <div
    id='services'
      className="services-section relative bg-cover bg-center text-white py-16 px-6 mt-40"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
        Our Services: <span className="text-green-500">Visa Categories</span>
        </h2>
        <p className="text-lg mb-12">
          We provide expert guidance and create great value for diverse visa categories.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <span className="material-icons text-white">{service.icon}</span>
                  <h3 className='text-white'>{service.title}</h3>
                </div>

                {/* Back Side */}
                <div
                  className="flip-card-back"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
