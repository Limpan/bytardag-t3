import React from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import TagCreationForm from "@app/components/TagCreationForm";

const Admin: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <TagCreationForm sheetId={id} />
    </div>
  );
};

export default Admin;
