import React, { useState, useReducer } from "react";
import { CgProfile } from "react-icons/cg";
import UserPane from "./UserPane/UserPane";
import EventsDisplay from "./EventsDisplay";
import Footer from "./Footer";

export default function AccountView({ events, user }) {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [header, setHeader] = useState("Today's Events");

  const initialState = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.setHours(0, 0, 0, 0) === calendarDate.setHours(0, 0, 0, 0);
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    const today = new Date().setHours(0, 0, 0, 0);
    switch (action.type) {
      case "UPCOMING":
        return action.events.filter((event) => {
          const eventDate = new Date(event.date);
          setHeader("Your Upcoming Events");
          return eventDate.setHours(0, 0, 0, 0) >= today;
        });
      case "PAST":
        return action.events.filter((event) => {
          const eventDate = new Date(event.date);
          setHeader("Your Past Events");
          return eventDate.setHours(0, 0, 0, 0) < today;
        });

      case "SELECTED":
        return action.events.filter((event) => {
          const eventDate = new Date(event.date);
          setHeader("Your Events on " + `${calendarDate}`.substring(0, 11));
          return (
            eventDate.setHours(0, 0, 0, 0) === calendarDate.setHours(0, 0, 0, 0)
          );
        });
      default:
        return initialState;
    }
  }
  console.log(state);

  const [profilePane, setProfilePane] = useState({
    visible: false,
    data: null,
  });

  function closePane() {
    setProfilePane({ ...profilePane, visible: false });
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-yellow-100 to-[#BAE5F3]">
      <div className="flex align-middle w-screen h-[90%]">
        <UserPane
          visible={profilePane.visible}
          data={profilePane.data}
          closePane={closePane}
          user={user}
        />
        <div className="flex flex-col align-middle mx-auto p-0">
          <h1 className="mx-auto mt-10 text-3xl">{header}</h1>
          <div className="flex flex-col lg:flex-row justify-evenly w-[80vw] h-[100%]">
            <div className="flex flex-col justify-start">
              <button
                onClick={() =>
                  setProfilePane({ ...profilePane, visible: true })
                }
                className="flex flex-row justify-evenly bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(186,229,243)] rounded-lg h-12 shadow-md w-48"
              >
                {" "}
                <CgProfile size={35} className="mt-1.5 mb-2 ml-2" />
                <h1 className="pr-3 py-3">View Profile</h1>
              </button>
            </div>
            <EventsDisplay
              events={state}
              handleDateChange={(Date) => {
                setCalendarDate(Date);
                dispatch({ type: "SELECTED", events: [...events] });
              }}
              handleToday={() => {
                setCalendarDate(new Date());
                dispatch({ type: "SELECTED", events: [...events] });
              }}
              handleUpcoming={() => {
                dispatch({ type: "UPCOMING", events: [...events] });
              }}
              handlePast={() => {
                dispatch({ type: "PAST", events: [...events] });
              }}
              startDate={calendarDate}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
