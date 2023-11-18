import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
const Services = () => {
  return (
    <>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-center mb-12 text-5xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">الخدمات</h1>
          <TECarousel showControls showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src="../../../public/the-future-of-web-development.png"
                  className="block w-full"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">دورات تطوير الويب</h5>
                 
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src="../../../public/124-1247050_digital-marketing-background-png-digital-marketing-banner-png.png"
                  className="block w-full"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">دورات التسويق الالكتروني</h5> 
                </div>
              </TECarouselItem>
              
            </div>
          </TECarousel>
        </div>
      </section>
    </>
  );
};

export default Services;
