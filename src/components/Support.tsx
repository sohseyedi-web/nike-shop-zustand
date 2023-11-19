import * as RiIcon from "react-icons/ri";
import FormCard from "./common/FormCard";
import { useForm, SubmitHandler } from "react-hook-form";

type InputType = {
  fullName: string;
  email: string;
  options: string;
  message?: string;
};

const Support = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = (data) => console.log(data);

  return (
    <FormCard onSubmit={handleSubmit(onSubmit)}>
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
          {...register("fullName", { required: true })}
          placeholder="سهیل سیدی"
          className="w-full h-[45px] px-1 rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        />
        {errors.fullName && <span className="text-red-500 my-1">نام الزامی است</span>}
      </div>
      <div className="w-full">
        <label className="mb-2 font-semibold" htmlFor="">
          ایمیل
        </label>
        <input
          dir="ltr"
          {...register("email", { required: true })}
          type="email"
          placeholder="example@gmail.com"
          className="w-full h-[45px] px-1 rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        />
        {errors.email?.type === "required" && <span className="text-red-500 my-1">ایمیل الزامی است</span>}
        {errors.email?.type === "pattern" && <span className="text-red-500 my-1">ایمیل معتبر نیست</span>}
      </div>
      <div className="w-full">
        <label className="mb-2 font-semibold" htmlFor="">
          ارتباط با{" "}
        </label>

        <select
          {...register("options", { required: true })}
          className="w-full px-1 h-[45px] rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        >
          <option value="khadamat">خدمات</option>
          <option value="sell">فروش</option>
          <option value="accounting">حسابداری</option>
        </select>
      </div>
      <div className="w-full">
        <label className="mb-2 font-semibold" htmlFor="">
          توضیحات
        </label>
        <textarea
          {...register("message")}
          placeholder="در صورت تمایل توضیحاتی درباره درخواست خود بنویسید"
          className="w-full p-1 resize-none h-[145px] rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        />
      </div>
      <button
        disabled={!isDirty}
        className="border w-full h-[45px] rounded-xl bg-green-500 text-white text-lg font-semibold transition-all duration-300 hover:bg-green-700"
      >
        ثبت درخواست
      </button>
    </FormCard>
  );
};

export default Support;
