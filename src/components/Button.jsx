const Button = ({children, color = "bg-secondary", type = "button"}) => {
  return (
    <button className={` ${color} text-white rounded-lg px-4 py-2 w-fit`} type={type}>
      {children}
    </button>
  );
};

export default Button;
