import logo from '../assets/logo1.png';

export const Navbar = () => {
    const NavList = (
        <>
            <li className="hover:text-green-500 font-medium rounded-btn">
                <a href="/">Home</a>
            </li>
            <li className="hover:text-green-500 font-medium rounded-btn">
                <a href="#services">Services</a>
            </li>
            <li className="hover:text-green-500 font-medium rounded-btn">
                <a href="#contact">Contact Us</a>
            </li>
            <li className="hover:text-green-500 font-medium rounded-btn">
                <a href="#about">About Us</a>
            </li>
            <button  className="btn btn-sm px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md">
                  <a href="#services"> Apply Now</a>
                </button>
        </>
    );

    return (
        <nav className="z-50 navbar container max-w-[1120px] mx-auto flex justify-between items-center p-3 px-4 bg-transparent">
            {/* Logo and Branding */}
            <div className="navbar-start flex items-center gap-2">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black"
                    >
                        {NavList}
                    </ul>
                </div>
                <img src={logo} className="h-10 w-10 text-white" alt="Care2 Logo" />
                <h3 className="text-white text-lg font-bold">
                    Care2 Training Consulting
                </h3>
            </div>

            {/* Navigation Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 text-white ">{NavList}</ul>
            </div>

            {/* Call to Action Button */}
            <div className="navbar-end hidden">
                <button  className="btn btn-sm px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md">
                  <a href="#services"> Apply Now</a>
                </button>
            </div>
        </nav>
    );
};
