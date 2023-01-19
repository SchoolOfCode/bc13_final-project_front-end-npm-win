import { useSession } from "next-auth/react";
import Link from "next/link";
import AccountView from "../components/AccountView";

export async function getServerSideProps() {
  try {
    let response = await fetch("https://circlesapp.netlify.app/api/events");
    let events = await response.json();
    return { props: { events } };
  } catch (error) {
    console.log(error);
  }
}

export default function Profile({ events }) {
  const session = useSession();
  return (
    <div className="absolute top-24 font-mons">
      {" "}
      {session.data ? (
        <>
          {/* <div className="flex flex-row- justify-evenly font-mons bg-gradient-to-b from-yellow-100 to-blue-200 min-h-screen min-w-screen"> */}
          <div>
            <AccountView events={events} />
          </div>
        </>
      ) : (
        <div>
          <h3>Please log in to view your profile.</h3>
          <h3>
            Click here to return to the{" "}
            <Link className="font-bold" href="/">
              Circles Home.
            </Link>
          </h3>
        </div>
      )}{" "}
    </div>
  );
}
