import React, { useState } from "react"
import logo from "../media/img/logo/logo.png"

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "" },
    { name: "CHI SIAMO", link: "#chi-siamo" },
    { name: "MISSIONE", link: "#missione" },
    { name: "COMPARTI", link: "#comparti" },
    { name: "NEGOZIO", link: "#negozio" },
  ]
  let [open, setOpen] = useState(false)

  return (
    <div className="nav_container mt-3 shadow-md pb-4">
      <div className="mobile_nav_container">
        <div className="logo_box">
          <a href="#chi-siamo">
          <img
            className="logo mt-2"
            src={logo}
            alt="la barra di navigazione di VT"
          />
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="icon text-3xl cursor-pointer md:hidden mr-5 mt-1"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div className="nav_wrapper">
          <div className="ul_box">
            <ul
              className={`nav-list md:m-1 md:flex md:pb-0 pb-12 md:static z-[1] bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
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
              <a href="#contatti">
                <button className="navbutton md:mt-1 ml-12 font-semibold italic">
                  contatti.
                </button>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
