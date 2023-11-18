import React, { useState } from "react";
import "./Header.css";
import { MdMenu } from "react-icons/md";
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
        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
          <div style={getMenuStyles(open)} className="flexCenter h-menu">
            <button className="button">
              <a href="">اتصل بنا</a>
            </button>
            <a className="text-black" href="">
              الرئيسية
            </a>
            <a className="text-black" href="">
              عن المعهد
            </a>
            <a className="text-black" href="">
              {" "}
              الشهادات والدورات
            </a>
            <a className="text-black" href="">
              طرق التدريب
            </a>
            <a className="text-black" href="">
              {" "}
              الفروع
            </a>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon md:mr-44"
          onClick={() => setOpen((prev) => !prev)}
        >
          <MdMenu
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 "
            size={30}
          />
        </div>
        <img className="" src="/images/مسار تك.png" alt="logo" width={150} />
      </div>
    </section>
  );
};

export default Header;
