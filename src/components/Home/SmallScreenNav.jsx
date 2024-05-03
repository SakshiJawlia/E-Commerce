import { Link } from "react-router-dom"
import navLinks from "../../data/Navlinks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../Navbar"

const SmallScreenNav = ({clickHandler}) => {

  return (
    <div className="lg:hidden w-[40%] bg-[#E3E6F3] absolute right-0 top-0 shadow-2xl ">
        <div className="flex flex-col">
            <div className="w-14 h-14 flex justify-center items-center" onClick={clickHandler}>
                <FontAwesomeIcon icon={faXmark} className="text-xl"/>
            </div>
            <ul className="flex flex-col gap-5 justify-center py-20">
                        {
                        navLinks.map((link)=>(
                            <li key={link.title} className="py-0 px-5 relative">
                                <Link to={link.href} className="size-4 font-semibold text-[#1a1a1a] hover:text-[#088178] hover:transition hover:border hover:border-b-2 hover:border-b-[#088178] active:text-[#088178] active:border active:border-b-2 active:border-b-[#088178] ">{link.title}</Link>
                            </li>
                        ))
                    }
                    </ul>                  
            </div>
    </div>
  )
}

export default SmallScreenNav
