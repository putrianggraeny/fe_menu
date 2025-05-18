import { useEffect, useState } from "react";
import ElemesLogo from '../assets/image 55.png'; //

const Navbar = ({toggleFooter}) => {
  const [show, setShow] = useState (false);
  const [scroll, setScroll] = useState (false);

  const handleClick=() => {
    setShow(!show);
    // console.log(show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 5){
        console.log("testing");
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";


  return (
      <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
          <div className="container mx-auto px-4">
              <div className="navbar-box flex justify-between items-center">
                  <div className="logo">
                  <img src={ElemesLogo} alt="Elemes Logo" className="h-10 sm:h-12" />
                  </div>
                  <ul className={`flex lg:gap-12 md:flex-row md:shadow-none md:static md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-[#8BAC3E] font-bold text-white transition-all`}>
                      <li className="flex items-center gap-3">
                        <i className="ri-home-2-line text-3xl md:hidden block"></i>
                          <a href="#home" className="font-medium opacity-75">Home</a>
                      </li>
                      <li>
                          <a href="#about" className="text-gray-800 hover:text-gray-600">About</a>
                      </li>
                      <li>
                          <a href="#promotions" className="text-gray-800 hover:text-gray-600">Promotions</a>
                      </li>
                      <li>
                          <a href="#blogs" className="text-gray-800 hover:text-gray-600">Blogs</a>
                      </li>
                      <li>
                          <a href="#contacts" onClick={toggleFooter} className="text-gray-800 hover:text-gray-600">Contact Us</a>
                      </li>
                  </ul>
                  
                  <div className="social flex items-center gap-4">
                  <a href="#" className="text-gray-800 hover:text-gray-600 it font-bold">Masuk</a>
                    <a href="#" className="bg-[#8BAC3E] px-5 py-2 rounded-full text-white font-bold hover:bg-[#8BAC3F] transition-all">Daftar</a>
                    <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Navbar;