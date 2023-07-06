const Button = (props) => {
    const { children, type = "button" } = props
    return (
        <button className={` bg-[#4154F1] text-white rounded-lg px-3 py-2`} type={type}>
            {children}
        </button>
    );
}

export default Button