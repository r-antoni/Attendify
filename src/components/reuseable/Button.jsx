const Button = ({children, type = "button"}) => {
  return (
    <button
      className={` bg-[#4154F1] text-white rounded-lg px-4 py-2`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
