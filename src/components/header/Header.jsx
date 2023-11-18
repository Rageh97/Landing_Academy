import React, { useState } from "react";
import "./Header.css";
import { MdMenu  } from "react-icons/md";
import OutsideClickHandler from "react-outside-click-handler";


const Header = () => {

  const [open, setOpen] = useState(false);
  const getMenuStyles = (open) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !open && "-100%",
      };
    }
  };
  return (
    <section className=" bg-gray-300">
      <div className="flexCenter paddings innerWidth h-container">

        <OutsideClickHandler  onOutsideClick={() => setOpen(false)}>
          <div style={getMenuStyles(open)} className="flexCenter h-menu">
            <button className="button">
              <a href="">سجل</a>
            </button>
            <a className="text-black" href="">الدورات</a>
            <a className="text-black" href="">المدونات</a>
            <a className="text-black" href=""> تواصل معنا</a>
            <a className="text-black" href="">عملائنا</a>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon mr-44" onClick={() => setOpen((prev) => !prev)}>
          <MdMenu className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 " size={30} />
        </div>
      <img className="" src="مسار تك.png" alt="logo" width={150} />
      </div>
    
    </section>
  );
};

export default Header;
