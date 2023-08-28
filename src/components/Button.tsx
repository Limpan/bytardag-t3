type ButtonProps = {
  primary?: boolean;
  label: string;
};

export const Button = ({ primary = false, label }: ButtonProps) => {
  const bg = primary
    ? "bg-red-400 dark:bg-red-600"
    : "bg-blue-400 dark:bg-blue-600";

  return (
    <button className={` ${bg} px-6 py-2 font-bold text-white`}>{label}</button>
  );
};
