import React, { useState } from "react"
import { Facebook } from "react-feather"
import { Instagram } from "react-feather"
import { Youtube } from "react-feather"
import logo from "../media/img/logo/logo.png"

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "CHI SIAMO", link: "/" },
    { name: "MISSIONE", link: "/" },
    { name: "COMPARTI", link: "/" },
  ]
  let [open, setOpen] = useState(false)

  return (
    <div className="nav_container mt-3 shadow-md pb-4">
      <div className="mobile_nav_container">
        <div className="new_nav_cont">
          <div className="logo_box">
            <img className="logo mt-2" src={logo} />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="icon text-3xl cursor-pointer md:hidden mr-5 mt-1"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>

        <div className="nav_wrapper">
          <div className="ul_box">
            <ul
              className={`md:m-1 md:flex sm:mt-10 md:pb-0 pb-12 md:static z-[1] bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
                open ? "top-20" : "top-[-470px]"
              }`}
            >
              {Links.map((link) => (
                <li key={link.name} className="mr-9 mt-3">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-[#E70A1B] hover:underline duration-500"
                  >
                    {link.name}
                  </a>
                  <hr className="text-[#00c9d7] md:hidden" />
                </li>
              ))}
              {/*             <div className="flex mt-2">
              <a href="https://www.facebook.com/vitetrasformateItalia">
              <Facebook className="text-[#2B9CE1] w-9 h-9" />{" "}
              </a>
              <a href="https://www.instagram.com/vite_trasformate_italia/">
              <Instagram className=" text-[#2B9CE1] mx-2 w-9 h-9" />
              </a>
              <a href="https://www.youtube.com/@vitetrasformateitalia3565">
              <Youtube className=" text-[#2B9CE1] mx-2 w-9 h-9" />
              </a>
            </div> */}
              <button className="mt-1 ml-12 font-semibold italic">
                contatti.
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
