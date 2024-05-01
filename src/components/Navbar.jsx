import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navLinks from "../data/Navlinks" ;

const Navbar = () => {

  return (
    <div className="flex justify-between items-center bg-[#E3E6F3] py-5 px-20 shadow-custom sticky top-0 left-0">
        <div>
        <img src="/images/logo.png" class="logoImg" alt=""/>
        </div>
        <div>
            <ul className="flex flex-row justify-center items-center gap-3">
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

export default Navbar




