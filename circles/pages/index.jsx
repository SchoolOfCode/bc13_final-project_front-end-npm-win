import Head from "next/head";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import LandingP from "../public/images/LandingP.png";
import Logoblack from "../public/images/LogoBlack.png";
import FeedbackModal from "../components/FeedbackModal";

export default function Home() {
  const { data: session } = useSession();
  console.log("session on index", session);

  return (
    <div className="relative font-mons">
      <Head>
        <title>Circles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <div className="relative ">
          <Image src={LandingP} className="w-full h-full bg-cover" /> 
          <h1 className=" transition ease-in delay-300 duration-300 opacity-100 absolute w-[1000px] left-[200px] bottom-96 text-6xl ">
            "Helping people find their circles"
          </h1>
          <FeedbackModal/>
          <div className="absolute w-[300px] h-[150px] left-[950px]">         
            <div className="">
              {session ? (
                ""
              ) : (
                <button data-cy="signin" 
                  className="pl-7 font-mons inline-flex justify-center px-4 py-2  rounded-md transition ease-in-out delay-150 bg-[rgb(255,216,98)] hover:-translate-y-1 hover:scale-110 hover:bg-[#80BEAF] duration-300 "
                  onClick={() => {
                    signIn();
                  }}
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
