const SelectOption = ({title, option1, option2, option3}) => {
  return (
    <div className="relative flex-1">
      <p className="absolute z-10 -top-8 text-slate-400">{title}</p>
      <select name="subject" id="subject" className=" border-2 border-slate-300 px-6 py-2 rounded w-full">
        <option value="1">{option1}</option>
        <option value="2">{option2}</option>
        <option value="3">{option3}</option>
      </select>
    </div>
  );
};

export default SelectOption;
