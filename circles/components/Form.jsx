import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Form = (e) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7d6w8rc",
        "template_kgz2wqf",
        form.current,
        "g4O4KOCSWEDTS9FI7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="pt-32 pb-32 px-10 bg-gradient-to-b from-yellow-100 to-blue-200 w-full">
      <div className="w-full flex items-center justify-center">
        <div className=" bg-white shadow opacity-95 rounded py-12 mb-72 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-mons font-bold leading-7 text-center text-gray-700">
            Need assistance? Get in touch
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="md:flex items-center mt-12 mb-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-mons font-semibold leading-none text-gray-800">
                  First Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="first name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-mons font-semibold leading-none text-gray-800">
                  Surname
                </label>
                <input
                  type="text"
                  name="from_sec_name"
                  placeholder="surname"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold font-mons leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="email address"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold font-mons leading-none text-gray-800">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="tel"
                  placeholder="+1234"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                />
              </div>
            </div>

            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold font-mons leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  name="message"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
            <p className="text-xs leading-3 font-mons   text-gray-600 mt-4">
              By clicking send you agree to our terms of service, privacy policy
              and how we use data as stated
            </p>
            <div className="flex items-center justify-center w-full">
              <input
                type="submit"
                value="Send"
                className="mt-9 w-64 inline-flex justify-center drop-shadow-xl rounded-md border border-transparent transition ease-in-out delay-150 bg-[#FFD862] hover:-translate-y-1 hover:scale-110 hover:bg-[#80BEAF] duration-300 bg-[#FFD862] px-4 py-2 text-base font-light text-black shadow-sm hover:bg-[#80BEAF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
