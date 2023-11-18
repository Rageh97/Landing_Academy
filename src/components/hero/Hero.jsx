import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="">
      <div className="paddings innerWidth  flex items-center justify-center">
        {/* left side*/}
        {/* <div className="flexCenter hero-right">
          <div className="image-container hidden md:flex">
            <img src="../../../public/360_F_610706475_oBlOtAn4NrWdOT2S0I7xmlBa5Bume6yS.jpg" alt="hero-image" />
          </div>
        </div> */}
      

        {/* right side*/}
        <div className="flexColStart hero-left flex justify-center items-center">
         
         <div className="hero-title md:mb-4 ">
           <h1 className=" p-5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
             مسارتك  اكتشف مسارك التعليمي المناسب
           </h1>
         </div>
         <div className="flexColStart her-desc ">
           <span className="secondaryText text-center">اكتشف مسارك التعليمي مع الدورات والشهادات المعتمدة </span>
           <span className="secondaryText text-center">يمكنك التسجيل  حضوريا او اونلاين على منصتنا</span>
         </div>
         <div className="flexCenter search-bar md:p-3 ">
           <HiLocationMarker color="var(--blue)" size={25} />
           <input type="text" />
           <button className="button">ابحث</button>
         </div>
         <div className="flexCenter stats flex justify-center gap-12">
           <div className="flexColCenter stat">
             
               <span className="text-white">
                 <CountUp start={100} end={20} duration={4} />
                 <span>+</span>
               </span>
               <span className="secondaryText"> دورات معتمدة</span>
             
           </div>

           <div className="flexColCenter stat">
             <span className="text-white">
               <CountUp start={1950} end={2000} duration={4} />
               <span>+</span>
             </span>
             <span className="secondaryText">الطلاب</span>
           </div>

           <div className="flexColCenter stat">
             <span className="text-white">
               <CountUp end={28} />
               <span>+</span>
             </span>
             <span className="secondaryText">الدورات</span>
           </div>
         </div>
       </div>
      </div>
    </section>
  );
};

export default Hero;
