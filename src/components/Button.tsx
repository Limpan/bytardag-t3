type ButtonProps = {
  primary?: boolean
  label: string
}

const Button = ({primary = false, label}: ButtonProps) => {
  const bg = primary ? 'bg-red-400' : 'bg-blue-400';

  return( <button className={` ${bg} font-bold text-white px-6 py-2`}>
      {label}
  </button>)
}

export default Button;