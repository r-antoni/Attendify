const Input = ({name, label, type}) => {
  return (
    <div className={`flex flex-col gap-2 text-sm w-88`}>
      <label className="block text-title font-normal" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full border border-slate-200 rounded px-4 py-2 outline-none"
        type={type}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
