import React from "react";
import { api } from "@app/utils/api";
import { SubmitHandler } from "react-hook-form";

import TagCreationForm, { type Values } from "./TagCreationForm";

const TagCreationFormContainer = ({
  sheetId,
  halfPrice = false,
}: {
  sheetId: string;
  halfPrice: boolean;
}) => {
  const mutation = api.tag.add.useMutation();

  const onSubmit: SubmitHandler<Values> = (data) => {
    mutation.mutate({ ...data, sheetId });
  };

  const sellerIds = ["A-03", "A-05", "C-05", "C-07"]; // Fetch from api?

  return (
    <TagCreationForm
      sheetId={sheetId}
      sellerIds={sellerIds}
      halfPrice={halfPrice}
      onSubmit={onSubmit}
    />
  );
};

export default TagCreationFormContainer;
