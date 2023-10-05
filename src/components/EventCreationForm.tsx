import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { api } from "../utils/api";

export interface Values {
  startsAt: Date;
  endsAt: Date;
  maxParticipants: number;
  signupStartsAt: Date;
  signupEndsAt: Date;
}

const EventCreationForm = () => {
  const mutation = api.event.createEvent.useMutation();

  const onSubmit: SubmitHandler<Values> = (data) => {
    mutation.mutate(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>();

  const now = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const [formData, setFormData] = useState<Record<string, any>>({
    startsAt: now,
    endsAt: now,
    maxParticipants: 100,
    signupStartsAt: now,
    signupDurationDays: 5,
  });

  return (
    <form
      className="flex max-w-lg flex-col rounded-sm bg-zinc-50 p-4 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="startsAt" className="italic text-zinc-700">
        Event Start
      </label>
      <input
        type="datetime-local"
        className=""
        {...register("startsAt", { required: true, valueAsDate: true })}
      />

      <label htmlFor="endsAt" className="mt-4 italic text-zinc-700">
        Event End
      </label>
      <input
        type="datetime-local"
        className=""
        {...register("endsAt", { required: true, valueAsDate: true })}
      />

      <label htmlFor="signupStartsAt" className="mt-4 italic text-zinc-700">
        Signup Start
      </label>
      <input
        type="datetime-local"
        className=""
        {...register("signupStartsAt", { required: true, valueAsDate: true })}
      />

      <label htmlFor="signupEndsAt" className="mt-4 italic text-zinc-700">
        Signup Start
      </label>
      <input
        type="datetime-local"
        className=""
        {...register("signupEndsAt", { required: true, valueAsDate: true })}
      />

      <label htmlFor="maxParticipants" className="mt-4 italic text-zinc-700">
        Maximum participants
      </label>
      <input
        type="number"
        className="border-b-2 bg-transparent text-right"
        {...register("maxParticipants", {
          required: true,
          min: 1,
          valueAsNumber: true,
        })}
      />

      <input
        type="submit"
        value="Create"
        className="mt-4 rounded-sm bg-teal-400 px-2 py-1 text-zinc-900"
      />
    </form>
  );
};

export default EventCreationForm;
