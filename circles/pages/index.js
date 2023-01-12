import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signOut, signIn } from "next-auth/react";
import bg2 from "../public/images/bg.png";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session on index", session);

  return (
    <div className='relative font-mons'>
      <Head>
        <title>Circles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative ">
        {/* <img src={bg2} className="w-full h-full bg-cover"/> */}
      //  <Image src={bg2} className="w-full h-full bg-cover" />
      <div className='absolute bottom-2/3 ' >
        
        <h1 className=' absolute w-[1000px] left-[200px] -top-16 text-6xl '
        >"Helping people access their local community through social prescriptions."</h1>
        
        <div className=' absolute w-28 left-[900px]  top-[400px] border border-slate-900 rounded-lg bg-[#A3DCEF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFD862] duration-300
' >
          {session ? (
          <button className="flex pl-7 " onClick={() => signOut()}>
              Log out
          </button>
        ) : (
          <button
            className="flex pl-7"
            onClick={() => {
              signIn();
              // router.push("/api/auth/signin");
            }}
          >
            Sign in
          </button>
        )}

        </div>
        </div>
      </div>
    </div>
  );
}


/* <button
className="h-10 pb-3 mt-48 inline-flex items-center text-center justify-center rounded-md p-2 text-gray-400 bg-green-600  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
zzzzzzzzz
</button>*/