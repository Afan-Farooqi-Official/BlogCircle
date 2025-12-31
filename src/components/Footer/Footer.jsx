import {Link, useLocation} from 'react-router-dom'
import Logo from '../Logo'

const Footer = () => {

    const location = useLocation()

    const hiddenRoutes = ['/add-post', '/post']
    const isHidden = hiddenRoutes.some(route => 
        location.pathname.startsWith(route)
    )

    if (isHidden) {
        return null;
    }

    return(
        <section className="bottom-0 left-0 w-full py-10 bg-[#d4a373] shadow-md z-0">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 flex items-center">
                                <Logo />
                            </div>
                            <div>
                                <p className="text-sm text-[#fefae0] leading-relaxed tracking-wide">
                                    &copy; Copyright 2025. All Rights Reserved by Afan-Qaiser-Farooqi.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-white">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-white">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-white">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-[#fefae0] hover:text-[#ffd7ba] transition-colors duration-200"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer