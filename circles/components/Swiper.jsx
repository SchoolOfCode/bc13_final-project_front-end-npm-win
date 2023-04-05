import Image from "next/image";
import ipad1 from "../public/images/1.png";
import ipad2 from "../public/images/2.png";
import ipad3 from "../public/images/3.png";
import ipad4 from "../public/images/4.png";
import support from "../public/images/support.png";
import community from "../public/images/community.png";
import connect from "../public/images/connect.png";
import find from "../public/images/glass.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

export default function SwiperSlideshow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      ></Swiper>

      <section className="h-screen w-full ">
        <h1
          className="flex justify-center lg:text-6xl sm:text-4xl text-3xl font-semibold lg:pt-28 sm:pt-32 pt-20 lg:pb-5"
          id="about"
        >
          {" "}
          Our purpose{" "}
        </h1>
        <smaller className="lg:text-lg sm:text-lg text-xs sm:mt-10 mt-5 sm:mx-32  lg:mt-2 lg:ml-[300px] font-semibold  text-gray-400">
          Our mission is to support individuals make the most of the{" "}
          <a
            href="https://www.england.nhs.uk/personalisedcare/social-prescribing/"
            className="font-bold text-[#000000] hover:text-[rgba(186,229,243)] underline"
          >
            Social Prescribing
          </a>{" "}
          scheme.
        </smaller>

        <div className="grid grid-cols-2 gap-x-24 sm:grid-cols-2 lg:grid-cols-4 mt-14 sm:mt-20 px-24">
          <div>
            <Image
              src={find}
              className="mx-auto w-24 lg:w-40 sm:w-40"
              alt="find icon"
              aria-label="find icon in a small circle with magnifying glass"
            />
            <h1 className="font-semibold mb-2 text-sm lg:text-lg sm:text-xl pt-5 text-center">
              Find
            </h1>
            <p className="text-center text-xs sm:text-lg lg:text-lg xl:text-lg mb-10 sm:mb-20">
              Helping you find events near you that you are interested in.
            </p>
          </div>

          <div>
            <Image
              src={community}
              className="mx-auto w-24 lg:w-40 sm:w-40"
              alt="community icon"
              aria-label="community icon in a small circle"
            />
            <h1 className="font-semibold mb-2 text-sm lg:text-lg sm:text-xl pt-5 text-center">
              Community
            </h1>
            <p className="text-center text-xs sm:text-lg lg:text-lg xl:text-lg mb-10 sm:mb-20">
              Helping you find social circles and feel part of your community.{" "}
            </p>
          </div>

          <div>
            <Image
              src={support}
              className="mx-auto w-24 lg:w-40 sm:w-40"
              alt="support icon"
              aria-label="support icon in a small circle showing a handshake"
            />
            <h1 className="font-semibold mb-2 text-sm lg:text-lg sm:text-xl pt-5 text-center">
              Support
            </h1>
            <p className="text-center text-xs sm:text-lg lg:text-lg xl:text-lg mb-10 sm:mb-20">
              Providing you with the support you need most because we care.
            </p>
          </div>

          <div>
            <Image
              src={connect}
              className="mx-auto w-24 lg:w-40 sm:w-40"
              alt="connect icon"
              aria-label="connect icon in a small circle"
            />
            <h1 className="font-semibold mb-2 text-sm lg:text-lg sm:text-xl pt-5 text-center">
              Connect
            </h1>
            <p className="text-center text-xs sm:text-lg lg:text-lg xl:text-lg mb-10 sm:mb-20">
              Promoting meaningful connections via shared interests.
            </p>
          </div>
        </div>
      </section>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={ipad1}
            className="w-full h-full bg-cover mt-20 "
            alt="ipad with circles app displayed"
            aria-label="ipad with circles app displayed"
          />
          <div className="absolute top-14 lg:top-1/3 sm:top-40 lg:left-56 sm:left-20 left-10">
            <div className="lg:text-4xl sm:text-2xl text-lg font-semibold">
              Access
            </div>
            <div data-swiper-parallax="-100">
              <p className="sm:mr-[22em] mr-48 sm:left-20 lg:mr-[35em] lg:text-2xl sm:text-lg text-[0.6em] lg:mt-10 mt-3">
                Simply Use the pin that your link worker gives you to sign up.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ipad2}
            className="w-full h-full bg-cover mt-20"
            alt="ipad and mobile with circles app displayed"
            aria-label="ipad and mobile with circles app displayed"
          />
          <div className="absolute top-14 lg:top-1/3 sm:top-40 lg:left-56 sm:left-20 left-10">
            <div className="lg:text-4xl sm:text-2xl text-lg font-semibold">
              Connect with circles
            </div>
            <div data-swiper-parallax="-100">
              <p className="sm:mr-[22em] mr-48 sm:left-20 lg:mr-[35em] lg:text-2xl sm:text-lg text-[0.6em] lg:mt-10 mt-3">
                Connect with people with similar interests and find events near
                you.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ipad2}
            className="w-full h-full bg-cover mt-20"
            alt="ipad and mobile with circles app displayed"
            aria-label="ipad and mobile with circles app displayed"
          />
          <div className="absolute top-14 lg:top-1/3 sm:top-40 lg:left-56 sm:left-20 left-10">
            <div className="lg:text-4xl sm:text-2xl text-lg font-semibold">
              Keep Track
            </div>
            <div data-swiper-parallax="-100">
              <p className="sm:mr-[22em] mr-48 sm:left-20 lg:mr-[35em] lg:text-2xl sm:text-lg text-[0.6em] lg:mt-10 mt-3">
                Your dashboard will help you manage and keep-up-to-date with
                your events.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ipad4}
            className="w-full h-full bg-cover mt-20"
            alt="ipad and mobile with circles app displayed"
            aria-label="ipad and mobile with circles app displayed"
          />
          <div className="absolute top-14 lg:top-1/3 sm:top-40 lg:left-56 sm:left-20 left-10">
            <div className="lg:text-4xl sm:text-2xl text-lg font-semibold">
              Sign up
            </div>
            <div data-swiper-parallax="-100">
              <p className="sm:mr-[22em] mr-48 sm:left-20 lg:mr-[35em] lg:text-2xl sm:text-lg text-[0.6em] lg:mt-10 mt-3">
                Sign up for an event by email or a quick call.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
//fixed
