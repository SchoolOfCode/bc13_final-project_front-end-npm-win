import React from "react";

export default function Timeline({ items, handleClick }) {
  return (
    <div
      // className="flex flex-col justify-evenly mt-[20vh] h-[100%]"
      className="flex flex-col justify-evenly h-[100%]"
      id="timeline-container-card"
    >
      <div className="h-[85%] bg-[rgba(255,255,255,0.3)] overflow-y-scroll rounded-lg">
        {items.map((item) => {
          console.log(item);
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0); //this makes sure that the date generated by the datepicker has a time of 0000 same as the date on the events data
          const date = new Date(item.date);
          const eventDate = date.setHours(0, 0, 0, 0);
          let eventTime =
            `${item.start_time}`.substring(11, 16) +
            " to " +
            `${item.end_time}`.substring(11, 16);
          return (
            <div className="card w-96 h-36 bg-base-100 shadow-xl m-4 ">
              <div className="card-body flex flex-row justify-between">
                <div className="flex flex-col justify-between">
                  <div className="text-sm">
                    <h2 className="card-actions">
                      {`${date}`.substring(0, 10)}
                    </h2>
                    <h2>{eventTime}</h2>
                  </div>
                  {currentDate <= eventDate ? (
                    <span
                      className={
                        item.running
                          ? "rounded-full bg-teal-100 text-sm font-medium text-green-800 max-w-fit px-2"
                          : "rounded-full bg-red-100 text-sm font-medium text-red-800 max-w-fit px-2"
                      }
                    >
                      {item.running ? "Running" : "Cancelled"}
                    </span>
                  ) : (
                    <button
                      onClick={handleClick}
                      className="decoration-black decoration-solid decoration-4 text-md border-4 border-[#BAE5F3] rounded-lg"
                    >
                      Add feedback
                    </button>
                  )}
                </div>
                <div className="flex flex-col">
                  <h2 className="card-title">{item.club_name}</h2>
                  <p>{item.event_name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// bg-[#BAE5F3]
