import React from "react";
import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className=" flex items-center justify-between flex-wrap">
          {/* ...left side */}
          <div className="flexColStart c-left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              We alwy ready to help by providing the best services belive a good
              place to can make your life better
            </span>

            <div className="contactModes w-full">
              {/* first row */}
              <div className="grid sm:grid-cols-2  w-full">
                <div className="flexColCenter mode w-full">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">01065787989</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>

                {/* second mode*/}
                <div className="flexColCenter mode w-full">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="secondaryText">01065787989</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Now</div>
                </div>
              </div>

              {/* second row */}
              <div className="grid sm:grid-cols-2  w-full">
                {/* third mode */}
                <div className="flexColCenter mode w-full">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="secondaryText">01065787989</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>

                {/* Fourth mode*/}
                <div className="flexColCenter mode w-full">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Message</span>
                      <span className="secondaryText">01065787989</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>
                </div>
              </div>
            </div>
          </div>
          {/* ...right side */}
          <div className="c-right">
            <div className="image-container">
              <img src="/images/Call-Center-training-pic.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
