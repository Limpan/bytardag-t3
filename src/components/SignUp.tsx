import React from "react";
import { useSession } from "next-auth/react";
import { api } from "@app/utils/api";

const SignUp = () => {
  const session = useSession();
  const event = api.event.getActive.useQuery();

  const signUp = api.event.signUp.useMutation();

  if (!event) {
    return (
      <div className="flex max-w-md flex-col rounded-lg bg-[url('/images/scarf.jpg')] p-2 shadow-md">
        No event available
      </div>
    );
  }

  return (
    <div className="my-2 flex flex-row rounded-lg bg-teal-600 py-2 px-2 text-white shadow-sm">
      <div className="flex flex-col items-center border-r border-teal-500 px-4 py-2">
        <div>
          {Intl.DateTimeFormat("sv", { month: "short" }).format(
            event.data?.startsAt
          )}
        </div>
        <div className="text-3xl font-bold">
          {Intl.DateTimeFormat("sv", { day: "numeric" }).format(
            event.data?.startsAt
          )}
        </div>
      </div>
      <div className="flex-grow self-center pl-4">
        <div className="text-lg">Klädbytardag</div>
        <div className="text-teal-100">
          {Intl.DateTimeFormat("sv", { weekday: "long" }).format(
            event.data?.startsAt
          )}
          ,
          {Intl.DateTimeFormat("sv", { timeStyle: "short" }).format(
            event.data?.startsAt
          )}
          {" - "}
          {Intl.DateTimeFormat("sv", { timeStyle: "short" }).format(
            event.data?.endsAt
          )}
        </div>
      </div>
      <div>
        <button
          className="h-full rounded-lg bg-rose-400 py-1 px-3 text-lg text-white"
          onClick={() => signUp.mutate()}
        >
          Anmäl mig
          <br />
          som säljare!
        </button>
      </div>
    </div>

    // <div className="my-4 flex max-w-md flex-col rounded-lg bg-[url('/images/scarf.jpg')] shadow-lg">
    //   <div className="mt-32 bg-white">
    //     <div className="flex flex-row">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="h-6 w-6"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    //         />
    //       </svg>
    //       <span>
    //         {new Intl.DateTimeFormat("sv", {
    //           day: "numeric",
    //           month: "long",
    //         }).format(event.data?.startsAt)}
    //       </span>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="h-6 w-6"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    //         />
    //       </svg>
    //       <span>
    //         {new Intl.DateTimeFormat("sv", {
    //           timeStyle: "short",
    //         }).format(event.data?.startsAt)}
    //       </span>
    //     </div>
    //     <div>
    //       {event.data?.signupEndsAt &&
    //         event.data?.signupEndsAt < now &&
    //         "Signup over"}
    //       {event.data?.signupStartsAt &&
    //         event.data?.signupStartsAt > now &&
    //         "Signup not open yet"}
    //       {session.status === "authenticated" &&
    //         event.data?.startsAt.toString()}
    //     </div>
    //     <button
    //       className="mt-6 w-1/2 rounded-lg bg-teal-500 py-2 text-lg text-white shadow-lg"
    //       onClick={() => signUp.mutate()}
    //     >
    //       Anmäl mig!
    //     </button>
    //   </div>
    // </div>
  );
};

export default SignUp;
