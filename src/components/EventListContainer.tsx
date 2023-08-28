import React from "react";
import { api } from "@app/utils/api";
import EventList from "./EventList";

const EventListController = () => {
  const events = api.event.getAll.useQuery();

  if (events.isLoading) {
    return <>Loading...</>;
  }

  if (events.isError) {
    return <>Error</>;
  }

  console.log("events.data", typeof events.data, events.data);

  return <EventList events={events.data} />;
};

export default EventListController;
