// React imports
import { useState } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {

  const [ showMobileMenu , setShowMobileMenu ] = useState(false);

  return (
  <div
      className="h-screen relative flex flex-col items-center"
      style={{
        // change if the gradient from hero doesnt work; try with h-1080/h-1280 ANDANDAND bgPosition:"0%"
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="relative w-full max-w-[1490px] flex 
        items-center justify-between pt-8 mx-auto px-10"
      >
        <img src={logo} alt="" className="" />
        <ul className="hidden md:flex items-center justify-center gap-10 lg:gap-[68px] font-mont font-300">
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Shop</NavLink>
          <NavLink to="reference">Reference</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>

        <img src={cartIcon} className="hidden md:block cursor-pointer" alt="" />

        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[600ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8 font-mont font-400">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="products" mobileMenu>
              Shop
            </NavLink>
            <NavLink to="reference" mobileMenu>
              Reference
            </NavLink>
            <NavLink to="care" mobileMenu>
              Care
            </NavLink>
          </ul>

          <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>

      <FadeIn delay={0.25} direction="down" padding fullWidth>
        <h1 className="mt-[80px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px] font-mont font-200">
        Bring Home Soul and Serenity with Sets from  <span className="text-gradient font-300">Sam</span>Studio
        </h1>
      </FadeIn>

      <FadeIn delay={0.5} direction="down" padding fullWidth>
        <h5 className="mt-5 text-center teext-lg xs:text-xl text-white max-w-[500px] font-mont font-200">{heroSubtitle}</h5>
      </FadeIn>

      <FadeIn delay={0.25} direction="up" padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-10">

          <input type="text" placeholder="Search" className="rounded-full w-full pl-6 pr-[68px] py-4 outline-none text-white font-mont text-base font-500 xs:text-lg placeholder-white bg-primary h-12"/>

          <img 
          src={searchIcon} 
          alt="" 
          className="absolute top-2/4 -translate-y-2/4 right-4 h-8 w-8   cursor-pointer"/>

        </div>
      </FadeIn>

      <div className="absolute h-[100px] xs:h-[100px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />

</div>
)}

export default Hero;
