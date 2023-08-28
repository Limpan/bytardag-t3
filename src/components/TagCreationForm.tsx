import React from "react";
import { api } from "@app/utils/api";
import { useForm, SubmitHandler } from "react-hook-form";

export interface Values {
  sellerId: string;
  amount: number;
}

const TagCreationForm = ({
  sheetId,
  halfPrice = false,
  onSubmit,
}: {
  sheetId: string;
  sellerIds: string[];
  halfPrice: boolean;
  onSubmit: (event: any) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>();

  return (
    <form
      className={`flex max-w-sm flex-col rounded-sm ${
        halfPrice ? "bg-yellow-200" : "bg-zinc-50"
      } p-4 text-zinc-900 shadow-md`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-row gap-2">
        <div className="flex-grow">
          <label htmlFor="seller" className="italic text-zinc-700">
            Seller ID
          </label>
          <input
            type="text"
            className="w-full border-b-2 border-zinc-400 bg-transparent py-1 px-2 outline-0 valid:border-b-2 focus:border-teal-500"
            {...register("sellerId", {
              required: true,
              pattern: /^[a-z]-[0-9]{2}$/i,
            })}
            aria-invalid={errors.sellerId ? "true" : "false"}
          />
        </div>
        <div className="flex-grow">
          <label htmlFor="amount" className="mt-4 italic text-zinc-700">
            Amount
          </label>
          <input
            type="number"
            className="w-full border-b-2 border-zinc-400 bg-transparent py-1 px-2 outline-0 valid:border-b-2 focus:border-teal-500"
            pattern="[0-9]*"
            required
            {...register("amount", { min: 1 })}
            aria-invalid={errors.amount ? "true" : "false"}
          />
        </div>
      </div>

      <input
        type="submit"
        value="Create"
        className="mt-4 rounded-sm bg-teal-400 px-2 py-1 text-zinc-900"
      />
    </form>
  );
};

export default TagCreationForm;
