import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navLinks from "../data/Navlinks" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import SmallScreenNav from "./Home/SmallScreenNav";

const Navbar = () => {

    const [clicked, setclicked] = useState(false);

    function clickHandler(){
        setclicked(!clicked);
    }

  return (
    <div className="relative h-full">
        <div className="flex justify-between items-center bg-[#E3E6F3] py-5 px-20 shadow-custom sticky top-0 left-0  ">
        <div>
        <img src="/images/logo.png" class="logoImg" alt=""/>
        </div>
        <div className="w-full">
            <div className="lg:hidden flex justify-end" onClick={clickHandler}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
        <div>
            <ul className="lg:flex hidden flex-row justify-center items-center gap-3 ">
                {
                navLinks.map((link)=>(
                    <li key={link.title} className="py-0 px-5 relative">
                        <Link to={link.href} className="size-4 font-semibold text-[#1a1a1a] hover:text-[#088178] hover:transition hover:border hover:border-b-2 hover:border-b-[#088178] active:text-[#088178] active:border active:border-b-2 active:border-b-[#088178] ">{link.title}</Link>
                    </li>
                ))
            }
            </ul>
        </div>
        {
            clicked&&<SmallScreenNav clickHandler={clickHandler}/>
        }
    </div>
    </div>
  )
}

export default Navbar




