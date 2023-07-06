const InputButton = (props) => {
    const { textcolor, background, border, name } = props
    return (
        <div className={`flex gap-3 items-center ${textcolor} ${background} ${border}  rounded-lg w-48 px-6 py-4 text-sm`}>
            <input className="w-4 h-4 checked:bg-secondary text-secondary focus:ring-secondary" name="radiobutton" type="radio" />
            <label htmlFor={name}>{name}</label>
        </div>
    );
}

export default InputButton;