import SlidingPane from "react-sliding-pane";
import Button from "../Button";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function UserPane({ visible, user, closePane }) {
  const [max, setMax] = useState(false);

  const paneWidth = max || window.innerWidth < 600 ? "100%" : "400px";

  return (
    <SlidingPane
      className="sliding-pane rounded-md"
      isOpen={visible}
      user={user}
      width={paneWidth}
      onRequestClose={closePane}
      hideHeader
      from="left"
    >
      {user ? (
        <div className="flex flex-col justify-center">
          <button onClick={closePane}>
            <GrClose className="float-right" />
          </button>
          <div className="flex justify-center my-2">
            <img
              className="inline-block h-[180px] w-[180px] rounded-full p-2  bg-gradient-to-b from-yellow-100 to-[#BAE5F3] shadow-md"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-center py-1">
            <div className="flex flex-col justify-evenly text-center">
              <h1 className="font-bold m-2 text-lg">{`${user.first_name} ${user.surname}`}</h1>
              <div className="p-2 bg-yellow-100 rounded-lg mt-4 mb-5">
                <h2 className="font-bold">Your Link Worker</h2>
                <h3>{`${user.link_worker.first_name} ${user.link_worker.surname}`}</h3>
                <h3>{user.link_worker.telephone}</h3>
                <h3>{user.link_worker.email}</h3>
              </div>
              <div className="flex flex-col justify-evenly bg-[#BAE5F3] rounded-lg my-3 pt-3 px-3">
                <h1 className="font-bold flex justify-center">Your Circles</h1>
                <ul className="mt-0 mb-4">
                  {user.user_circles.map((circle) => (
                    <li>{circle.club_name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </SlidingPane>
  );
}
