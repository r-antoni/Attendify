const Input = (props) => {
    const { name } = props
    return (
        <div className="flex flex-col gap-2 text-sm">
            <label className="block text-title text-sm font-normal" htmlFor={name}>{name}</label>
            <input className="text-sm w-full border border-slate-200 rounded px-3 py-2 outline-none focus:none" type={name} name={name} id={name} />
        </div>
    );
}

export default Input;