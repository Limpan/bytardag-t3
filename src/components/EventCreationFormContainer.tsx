import type { SubmitHandler } from "react-hook-form";
import { api } from "../utils/api";
import EventCreationForm, { type Values } from "./EventCreationForm";

const EventCreationFormController = () => {
  const mutation = api.event.createEvent.useMutation();

  const onSubmit: SubmitHandler<Values> = (data) => {
    mutation.mutate(data);
  };

  return <EventCreationForm onSubmit={onSubmit} />;
};

export default EventCreationFormController;
