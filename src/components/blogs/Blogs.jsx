import React from "react";
import "./Blog.css";
const Blogs = () => {
  const cardList = [
    {
      img: "/images/code.png",
      title: "web development",
      description:
        "Our group of specialists will collaborate with you to develop a personalized strategy aimed at guiding you toward success through incremental progress.",
    },
    {
      img: "/images/mobile-app.png",
      title: "Mobile development",
      description:
        "Offering a diverse range of exercises for your selection, you'll have all the resources necessary to attain the peak of your physical fitness.",
    },
    {
      img: "/images/strategy-development.png",
      title: "Digital marketing",
      description:
        "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
    },
  ];
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 mb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="  mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
        <div className="w-full  px-[2.5rem]">
          <h1 className="text-center text-5xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">المدونات</h1>
          {/* about cards */}
          <div className="about-cards flex gap-10 flex-col md:flex-row">
            {cardList.map((card, id) => (
              <div
                key={id}
                className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
              >
                <img src={card.img} alt="box_img" className="w-[75px] mb-4" />
                <p className="text-[24px] font-bold uppercase mb-7">
                  {card.title}
                </p>
                <p className="text-[15px] font-medium leading-2 w-full">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Blogs;
