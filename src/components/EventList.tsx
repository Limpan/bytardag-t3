import React from "react";
import { type Event } from "@prisma/client";

const EventList = ({ events }: { events: Event[] }) => {
  return (
    <table className="m-2 border-collapse border">
      <thead className="border-b-2 border-zinc-600 bg-zinc-100">
        <tr>
          <td className="border border-zinc-300 px-2 py-1">Starts At</td>
          <td className="border border-zinc-300 px-2 py-1">Ends At</td>
          <td className="border border-zinc-300 px-2 py-1">Signup Starts At</td>
          <td className="border border-zinc-300 px-2 py-1">Signup Ends At</td>
          <td className="border border-zinc-300 px-2 py-1">Max Participants</td>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index} className={event.isActive ? "bg-teal-50" : ""}>
            <td className="border border-zinc-300 px-2 py-1">
              {event.startsAt.toLocaleString()}
            </td>
            <td className="border border-zinc-300 px-2 py-1">
              {event.endsAt.toLocaleString()}
            </td>
            <td className="border border-zinc-300 px-2 py-1">
              {event.signupStartsAt.toLocaleString()}
            </td>
            <td className="border border-zinc-300 px-2 py-1">
              {event.signupEndsAt.toLocaleString()}
            </td>
            <td className="border border-zinc-300 px-2 py-1">
              {event.maxParticipants}
            </td>
          </tr>
        ))}{" "}
      </tbody>
    </table>
  );
};

export default EventList;
