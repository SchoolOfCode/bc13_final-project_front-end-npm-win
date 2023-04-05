import GroupsGallery from "../components/GroupsGallery";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Footer from "../components/Footer";

// This function fetches group data from a server-side API and returns it as a prop
export async function getServerSideProps() {
  let response = await fetch("https://circlesapp.netlify.app/api/groups");

  let groups = await response.json();
  return { props: { groups } };
}

// This is the main component that will be rendered
export default function GroupsPage({ groups }) {
  // Get the current session data
  const session = useSession();

  // Render the component based on whether the user is logged in or not
  return (
    <div>
      {session.data ? (
        // If the user is logged in, render the GroupsGallery component
        <GroupsGallery data={groups} />
      ) : (
        // If the user is not logged in, display a message and a link to the home page
        <div className="font-mons bg-gradient-to-b from-yellow-100 to-blue-200 min-h-screen min-w-screen">
          <h3>Please log in to view the groups available.</h3>
          <h3>
            Click here to return to the{" "}
            <Link className="font-bold" href="/">
              Circles Home.
            </Link>
          </h3>
        </div>
      )}
      <Footer />
    </div>
  );
}
