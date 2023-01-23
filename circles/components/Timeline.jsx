import React from "react";

export default function Timeline({ items, className, handleClick }) {
  return (
    <div className={className}>
      <div
        className="flex flex-col justify-evenly top-60 left-50 mt-[7.5vh] h-[100%]"
        id="timeline-container-card"
      >
        {items.map((item) => {
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0); //this makes sure that the date generated by the datepicker has a time of 0000 same as the date on the events data
          const date = new Date(item.date);
          const eventDate = date.setHours(0, 0, 0, 0);

          return (
            <div className="card w-96 h-36 bg-base-100 shadow-xl m-4">
              <div className="card-body flex flex-row justify-between">
                <div className="flex flex-col justify-between">
                  <div className="text-sm">
                    <h2 className="card-actions">
                      {`${item.date}`.substring(0, 10)}
                    </h2>
                    <h2>{item.time}</h2>
                  </div>
                  {currentDate <= eventDate ? (
                    ""
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
