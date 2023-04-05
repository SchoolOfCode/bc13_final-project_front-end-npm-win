import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoBlack from "../public/images/LogoBlack.png";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import Menubar from "../components/Menubar";
import Menuitem from "../components/Menuitem";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const session = useSession();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      aria-label="Circles"
      className="w-full  ease-in duration-300 bg-white z-50 drop-shadow-xl shadow-black"
    >
      <div
        aria-label="Circles navigation bar"
        className="pl-10 m-auto flex justify-between items-center p-3 text-black"
      >
        <Link aria-label="Returns to home page" href="/">
          <Image
            width={120}
            height={120}
            src={LogoBlack}
            className="flex"
            alt="Circles company logo"
            role="img"
            aria-label="Circles company logo"
          />
        </Link>
        <Menubar className="hidden sm:flex text-sm font-bold">
          <Menuitem className="rounded-md p-3 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
            <Link href="/">Home</Link>
          </Menuitem>
          {session.data ? (
            <Menubar className="hidden sm:flex text-sm font-bold">
              <Menuitem
                data-cy="groups"
                className="rounded-md p-3 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons"
              >
                <Link href="/groups">Groups</Link>
              </Menuitem>
              <Menuitem className="rounded-md p-3 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
                <Link href="/account">Account</Link>
              </Menuitem>
            </Menubar>
          ) : (
            ""
          )}
          <Menuitem className="rounded-md p-3 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
            <Link href="/contactus">Contact Us</Link>
          </Menuitem>
          <Menuitem
            data-cy="help"
            className="rounded-md p-3 hover:bg-[#BAE5F3] hover:text-black "
          >
            <Link href="/help">Help</Link>
          </Menuitem>
          {session.data ? (
            <Menuitem className="rounded-md p-3 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
              <button
                href="/"
                onClick={() => {
                  signOut({ callbackUrl: "http://localhost:3000/" });
                }}
              >
                Sign out
              </button>
            </Menuitem>
          ) : (
            <Menuitem className="rounded-md p-3 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
              <button
                onClick={() => {
                  signIn({ callbackUrl: "http://localhost:3000/" });
                }}
              >
                Sign In
              </button>
            </Menuitem>
          )}
        </Menubar>

        {/* mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-50">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* mobile Menu */}
        <div
          aria-label="Circles mobile navigation bar"
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white ease-in duration-300 z-40"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white ease-in duration-300 z-40"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500 font-bold">
              <Link href="/">Home</Link>
            </li>
            {session.data ? (
              <ul>
                <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
                  <Link href="/groups">Groups</Link>{" "}
                </li>
                <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black ">
                  <Link href="/account">Account</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
            <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black  ">
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black  ">
              <Link href="/help">Help</Link>
            </li>
            {session.data ? (
              <li className="rounded-md p-4 bg-black text-white hover:bg-[#BAE5F3] hover:text-black ">
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "http://localhost:3000/" });
                  }}
                >
                  Sign out
                </button>
              </li>
            ) : (
              <li className="rounded-md p-4 bg-black text-white hover:bg-[#BAE5F3] hover:text-black font-bold">
                <button
                  onClick={() => {
                    signIn({ callbackUrl: "http://localhost:3000/" });
                  }}
                >
                  Sign In
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
