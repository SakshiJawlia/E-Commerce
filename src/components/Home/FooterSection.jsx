import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
const FooterSection = () => {
  return (
    <div>
        <section className="my-20 mx-auto max-w-[1300px] w-[90%]">
            <div className="flex md:flex-row flex-col justify-around gap-10">
                <div>
                    <div>
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <p className="py-8 font-semibold text-gray-700" >
                        Contact
                    </p>
                    <p className="text-gray-500"><span className="text-gray-600 font-medium">Address: </span> 1042 Golf Course Road, Street 32, Gurgaon
                    </p>
                    <p className="text-gray-500"><span className="text-gray-600 font-medium">Phone: </span>+91 9888822222
                    </p>
                    <p className="text-gray-500"><span className="text-gray-600 font-medium">Hours: </span>10:00-18:00, Mon-Sat</p>
                    <p className="py-8 font-semibold text-gray-700">Follow Us</p>
                    <div className="flex gap-2 text-gray-600">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faPinterest} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>

                <div>
                    <p className="py-8 font-semibold text-gray-700">About</p>
                    <p className="text-gray-500">About Us</p>
                    <p className="text-gray-500">Delievery Info</p>
                    <p className="text-gray-500">Privacy Policy</p>
                    <p className="text-gray-500">T&C</p>
                </div>
                <div>
                    <p className="py-8 font-semibold text-gray-700 text-nowrap">My Account</p>
                    <p className="text-gray-500">Sign In</p>
                    <p className="text-gray-500">View Cart</p>
                    <p className="text-gray-500">My Wishlist</p>
                    <p className="text-gray-500">Help</p>
                </div>
                <div>
                    <p className="py-8 font-semibold text-gray-700 " >Install App</p>
                    <p className=" text-gray-500">From App Store or Google Play</p>
                    <div className="flex flex-row gap-2 py-6">
                        
                            <button className="flex flex-row gap-2 border-2 justify-center items-center p-3 border-y-1 border-y-[#088178] border-x-1 border-x-gray-500 hover:bg-[#088178]">
                                <div>
                                    <FontAwesomeIcon icon={faApple} size='3x'/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-gray-600 text-xs font-semibold ">
                                        Download on the 
                                    </div>
                                    <div className="text-gray-700 text-base font-bold hover:text-white">
                                        App Store
                                    </div>
                                </div>
                            </button>
                        
                        
                            <button className="flex flex-row gap-2 border-2 justify-center items-center p-3 border-y-1 border-y-[#088178] border-x-1 border-x-gray-500 transition hover:bg-[#088178]">
                                <div className="size-11">
                                    <img src="/images/google-play-png-logo-3798.png" alt="" />
                                </div>
                                <div className="text-gray-700 text-base font-bold transition hover:text-white">Google Play</div>
                            </button>
                        
                    </div>
                    <p className="text-gray-500 py-4">Secured Payment Gateways</p>
                    <div className="flex flex-row gap-2">
                        <img src="/images/visa.png" className='w-12 h-12' alt=""/>
                        <img src="/images/mstrcrd.png" className='w-12 h-12' alt=""/>
                        <img src="/images/maestro.png" className='w-8 h-9' alt=""/>
                        <img src="/images/aexp.png" className='w-12 h-12' alt=""/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center text-gray-500">
                <i></i>
                <p>2024, Tech2etc- HTML CSS Ecommerce Website</p>
            </div>
        </section>
    </div>
  )
}

export default FooterSection
