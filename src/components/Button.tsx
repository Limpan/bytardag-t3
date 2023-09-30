type ButtonProps = {
  variant?: 'primary' | 'secondary' ;
  label: string;
  onClick: () => void;
};

export const Button = ({ variant = 'primary', label, onClick }: ButtonProps) => {
  const bg = {
    primary: "bg-red-400 dark:bg-red-600",
    secondary: "bg-blue-400 dark:bg-blue-600"
  }

  return (
    <button onClick={onClick} className={`${bg[variant]} px-6 py-2 font-bold text-white`}>{label}</button>
  );
};
