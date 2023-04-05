import Image from "next/image";
import image from "../public/images/slice11.png";
import ageuk from "../public/images/age_uk_logo 3.png";
import Link from "next/link";
import Card from "../components/Card";
import Footer from "../components/Footer";
import QuestionDisplay from "../components/QuestionDisplay";
import { helpLinks } from "../data/help-links"; // import helpLinks array from help-links.js file

export default function Faq() {
  return (
    <section>
      <div>
        <Image
          src={image}
          className="w-screen lg:h-[40em]"
          alt="colour gradient"
        />
        <div className="">
          <h2 className=" relative text-black text-4xl lg:text-7xl xl:text-7xl font-bold ml-5 sm:ml-28 sm:mr-28 lg:ml-20 mb-5 -mt-96 sm:-mt-72 lg:-mt-[6em] text-center">
            Useful Links & FAQ's
          </h2>
          <p className="relative text-black text-sm sm:text-sm lg:text-lg ml-10 mr-10 sm:ml-28 sm:mr-28 lg:ml-20 text-center">
            This page showcases a range of organisations and charities that
            provide services relating to Health, Well Being, Loss and more.
            <br></br>
            Click on read more to visit their website and click{" "}
            <Link href="#faq" className="underline font-bold ">
              here
            </Link>{" "}
            to go to frequently asked questions.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid gap-x-8 gap-y-20  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-28 lg:mt-80">
          {helpLinks.map((helpLink) => (
            <Card
              helpLink={helpLink}
              // key={helpLink.id}
              // src={helpLink.image}
              // title={helpLink.title}
              // description={helpLink.description}
              // href={helpLink.href}
              // alt={helpLink.alt}
            />
          ))}
        </div>
      </div>

      <section
        className="bg-gradient-to-b from-yellow-100 to-[#BAE5F3] max-h-full mt-32 pt-40 pb-40 font-mons"
        id="faq"
      >
        <QuestionDisplay />
      </section>
      <Footer />
    </section>
  );
}
