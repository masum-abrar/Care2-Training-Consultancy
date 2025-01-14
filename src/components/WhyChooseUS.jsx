import '../css/WhyChooseUs.css'
export default function WhyChooseUs () {
    return (
      <div className='flex flex-wrap justify-between items-center bg-white shadow-lg mx-auto px-8 py-12 rounded-lg max-w-6xl mt-32 mb-32'>
        {/* Left Section (Image) */}
        <div className='w-full lg:w-1/2'>
          <img
            src='https://images.pexels.com/photos/7620576/pexels-photo-7620576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace with your image URL
            alt='Professional Consultants'
            className='shadow-md rounded-lg w-[500px] h-[500px]'
          />
        </div>
        {/* Right Section (Text & Benefits) */}
        <div className='mt-8 lg:mt-0 lg:pl-12 w-full lg:w-1/2'>
          <h5 className='font-semibold text-blue-500 text-sm uppercase'>
            Why Choose Us
          </h5>
          <h2 className='mt-2 mb-4 font-bold text-3xl text-gray-800'>
            Countless Benefits and <span className='text-green-500'>Easy Processing</span> {/* Make this green */}
          </h2>
          <p className='mb-6 text-gray-600 text-lg leading-relaxed'>
            Care2 Training Consultancy provides expert guidance and tailored
            solutions for those pursuing international opportunities. Our team
            ensures your journey is smooth, efficient, and hassle-free.
          </p>
  
          {/* Benefits List */}
          <div className='space-y-6'>
            {/* Benefit 1 */}
            <div className='flex items-start'>
              <div className='flex justify-center items-center bg-green-500 mt-2 mr-4 rounded-xl w-12 h-10 text-white'>
                <i className='text-2xl material-icons'>auto_stories</i> {/* Green icon */}
              </div>
              <div>
                <h4 className='font-semibold text-gray-800 text-lg'>
                  Expert Guidance
                </h4>
                <p className='text-gray-600'>
                  Our experienced consultants provide personalized advice to help
                  you achieve your goals.
                </p>
              </div>
            </div>
            {/* Benefit 2 */}
            <div className='flex items-start'>
              <div className='flex justify-center items-center bg-green-500 mt-2 mr-4 rounded-xl w-12 h-10 text-white'>
                <i className='text-2xl material-icons'>description</i> {/* Green icon */}
              </div>
              <div>
                <h4 className='font-semibold text-gray-800 text-lg'>
                  Document Support
                </h4>
                <p className='text-gray-600'>
                  We assist with gathering, preparing, and submitting all
                  necessary documentation.
                </p>
              </div>
            </div>
            {/* Benefit 3 */}
            <div className='flex items-start'>
              <div className='flex justify-center items-center bg-green-500 mt-2 mr-4 rounded-xl w-12 h-10 text-white'>
                <i className='text-2xl material-icons'>autorenew</i> {/* Green icon */}
              </div>
              <div>
                <h4 className='font-semibold text-gray-800 text-lg'>
                  Seamless Process
                </h4>
                <p className='text-gray-600'>
                  Our proven strategies and expertise ensure a smooth application
                  and approval process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  