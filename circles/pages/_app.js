import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
//import Navbar from "../components/Navbar.jsx";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
