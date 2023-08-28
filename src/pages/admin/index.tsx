import React from "react";

import { type NextPage } from "next";
import Head from "next/head";

import EventCreationFormController from "@app/components/EventCreationFormContainer";
import EventListContainer from "@app/components/EventListContainer";

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>bytardag.se</title>
        <meta name="description" content="Eksjö klädbytardag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EventCreationFormController />

        <EventListContainer />
      </main>
    </>
  );
};

export default Admin;
