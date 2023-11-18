import * as RiIcon from "react-icons/ri";
import FormCard from "./common/FormCard";

const Support = () => {
  return (
    <FormCard>
      <div className="flex items-center gap-x-2 text-indigo-600 ">
        <RiIcon.RiCustomerService2Line size={30} />
        <h6 className="text-lg font-semibold">پشتیبانی</h6>
      </div>
      <div className="w-full">
        <label className="mb-2 font-semibold" htmlFor="">
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          placeholder="سهیل سیدی"
          className="w-full h-[45px] px-1 rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        />
      </div>
      <div className="w-full">
        <label className="mb-2 font-semibold" htmlFor="">
          ایمیل
        </label>
        <input
          dir="ltr"
          type="email"
          placeholder="example@gmail.com"
          className="w-full h-[45px] px-1 rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        />
      </div>
      <div className="w-full">
        <label className="mb-2 font-semibold" htmlFor="">
          ارتباط با{" "}
        </label>

        <select className="w-full px-1 h-[45px] rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="w-full">
        <label className="mb-2 font-semibold" htmlFor="">
          توضیحات
        </label>
        <textarea
          placeholder="در صورت تمایل توضیحاتی درباره درخواست خود بنویسید"
          className="w-full p-1 resize-none h-[145px] rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        />
      </div>
      <button className="border w-full h-[45px] rounded-xl bg-green-500 text-white text-lg font-semibold transition-all duration-300 hover:bg-green-700">
        ثبت درخواست
      </button>
    </FormCard>
  );
};

export default Support;
