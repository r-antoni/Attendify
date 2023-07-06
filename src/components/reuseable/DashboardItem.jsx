const DashboardItem = ({title, time, size="w-60 h-40", visibility}) => {
    return (
        <div className={`bg-white ${size} rounded-md`}>
            <h2 className="text-xl text-[#4154F1] px-5 py-5">{title} <span className="text-[#899BBD] text-sm">{time}</span></h2>
                <div className={`flex px-5 ${visibility}`}>
                    <div>
                        <img src="https://freeimghost.net/images/2023/06/15/div.png" alt="div.png" border="0" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl text-[#4154F1] font-bold px-3">145</span>
                        <p className="text-sm text-title font-bold px-3">12% <span className="text-[#6C757D] font-normal">increase</span></p>
                    </div>
                </div>
        </div>
    );
}

export default DashboardItem;