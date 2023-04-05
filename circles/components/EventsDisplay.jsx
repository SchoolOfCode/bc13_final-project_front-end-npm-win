import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Timeline from "./Timeline";
import Button from "./Button";
//import { events } from "../data/events-data.js";
import "react-datepicker/dist/react-datepicker.css";

export default function EventsDisplay({
  events,
  handleDateChange,
  startDate,
  handleToday,
  handleUpcoming,
  handlePast,
}) {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-[100%]">
      <div className="flex flex-col justify-start h-[85%] rounded-lg p-4  bg-[rgba(255,255,255,0.2)] my-10">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          className="border-[rgba(186,229,243)] border-solid border-[4px] rounded-md shadow-md mb-10 ml-3"
        />
        <Button buttonText="Today" handleClick={handleToday} />
        <Button buttonText="Upcoming" handleClick={handleUpcoming} />
        <Button buttonText="Past" handleClick={handlePast} />
      </div>
      <div className="h-[85%] bg-[rgba(255,255,255,0.3)] overflow-y-scroll rounded-lg mx-20 my-10 pt-0">
        <Timeline items={events} />
      </div>
    </div>
  );
}
