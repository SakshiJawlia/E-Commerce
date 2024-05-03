import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap,faEnvelope,faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Mapping = () => {
  return (
    <section className="my-20 mx-auto max-w-[1300px] w-[90%]">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="flex flex-col gap-7">
            <p className="text-lg text-gray-500">GET IN TOUCH</p>
            <h2 className=" md:text-4xl text-2xl text-wrap font-semibold">Visit one of our agency locations or contact us today</h2>
            <h3 className="md:text-xl text-lg md:font-bold font-semibold">Head Office</h3>
            <div className="flex flex-col gap-2 md:text-lg text-base text-gray-500">
                <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faMap} />
                    <p className=''>1042 Golf Course Road, Street 32, Gurgaon</p>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>contact@gmail.com</p>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+91 9888822222</p>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faClock} />
                    <p>Monday to Saturday: 9:00am-6:00pm</p>
                </div>
            </div>
        </div>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16208.039864852046!2d77.0627993307719!3d28.413489905395238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226e7cc4aa7f%3A0x850ce64867efd5f7!2s1042%2C%20Golf%20Course%20Ext%20Rd%2C%20The%20Close%20South%2C%20Sector%2050%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1714539115670!5m2!1sen!2sin"  className="lg:w-[600px] w-full lg:h-[450px] h-full" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Mapping
