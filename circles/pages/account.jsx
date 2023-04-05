import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import AccountView from "../components/AccountView";

// This function fetches events data from a server-side API and returns it as a prop
export async function getServerSideProps() {
  let responseEvents = await fetch(
    `${process.env.CIRCLES_EVENTS_API_ENDPOINT}`
  );
  let events = await responseEvents.json();
  return { props: { events } };
}

// This is the main component that will be rendered
export default function Profile({ events }) {
  // Get the current session data
  const session = useSession();
  // Set up a state variable to store user data
  const [user, setUser] = useState("");

  // Use an effect hook to fetch user data when the session data changes
  useEffect(() => {
    async function fetchData() {
      // Fetch user data from a server-side API
      let responseUser = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Pass the user's email address in the request body
        body: JSON.stringify({ email: session.data?.user.email }),
      });

      let userData = await responseUser.json();
      console.log(userData);
      // Store the user data in state
      setUser(userData[0]);
    }
    fetchData();
  }, [session.data]);

  // Render the component based on whether the user is logged in or not
  return (
    <div className=" font-mons">
      {session.data ? (
        // If the user is logged in, render the AccountView component
        <div className="">
          <AccountView events={events} user={user} />
        </div>
      ) : (
        // If the user is not logged in, display a message and a link to the home page
        <div>
          <h3>Please log in to view your profile.</h3>
          <h3>
            Click here to return to the{" "}
            <Link className="font-bold" href="/">
              Circles Home.
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
}
