import React from "react";

import { useFormatter, useNow } from "next-intl";

type Props = {
  eventStart: Date;
  eventEnd: Date;
  signupStart: Date;
  signupEnd: Date;
};

type SignUpState = "waiting" | "open" | "closed";

const Event = ({ eventStart, eventEnd, signupStart, signupEnd }: Props) => {
  const format = useFormatter();
  const now = useNow({ updateInterval: 1000 });

  const day = format.dateTime(eventStart, { day: "numeric" });
  const month = format.dateTime(eventStart, { month: "short" });

  const startTime = format.dateTime(eventStart, {
    hour: "numeric",
    minute: "2-digit",
  });
  const endTime = format.dateTime(eventEnd, {
    hour: "numeric",
    minute: "2-digit",
  });

  const state: SignUpState =
    signupStart > now ? "waiting" : signupEnd > now ? "open" : "closed";

  return (
    <div className="flex flex-col rounded bg-rose-300 p-2 shadow">
      <div className="flex flex-row">
        <div className="border-r border-r-rose-100 pr-2 text-center">
          <span className="text-3xl">{day}</span>
          <br />
          {month}
        </div>
        <div className="grow pl-2">
          <span className="text-lg">Klädbytardag</span>
          <br />
          öppet {startTime}-{endTime}
        </div>
      </div>
      <div className="mt-2">
        {state === "waiting" && <div className="w-full text-center p-2">Anmälan öppnar XX</div>}
        {state === "open" && (
          <button className="w-full bg-teal-300 p-2">
            Anmäl mig som säljare
          </button>
        )}
        {state === "closed" && <div className="w-full text-center p-2">Anmälan stängd</div>}
      </div>
    </div>
  );
};

export default Event;
