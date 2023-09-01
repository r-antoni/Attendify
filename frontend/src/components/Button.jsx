const Button = ({children, color = "bg-[#4154F1]", type = "button"}) => {
  return (
    <button className={` ${color} text-white rounded-lg px-4 py-2`} type={type}>
      {children}
    </button>
  );
};

export default Button;
