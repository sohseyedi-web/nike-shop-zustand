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
      <div className="flex items-center gap-x-2 text-indigo-600 dark:text-indigo-100">
        <RiIcon.RiCustomerService2Line size={30} />
        <h6 className="text-lg font-semibold">پشتیبانی</h6>
      </div>
      <div className="w-full">
        <label className="mb-2 block dark:text-indigo-100 font-semibold" htmlFor="">
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          {...register("fullName", { required: true })}
          placeholder="سهیل سیدی"
          className="textField"
        />
        {errors.fullName && (
          <span className="text-red-500 my-1">نام الزامی است</span>
        )}
      </div>
      <div className="w-full">
        <label className="mb-2 block dark:text-indigo-100  font-semibold" htmlFor="">
          ایمیل
        </label>
        <input
          dir="ltr"
          {...register("email", { required: true })}
          type="email"
          placeholder="example@gmail.com"
          className="textField"
        />
        {errors.email?.type === "required" && (
          <span className="text-red-500 my-1">ایمیل الزامی است</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="text-red-500 my-1">ایمیل معتبر نیست</span>
        )}
      </div>
      <div className="w-full">
        <label className="mb-2 block dark:text-indigo-100 font-semibold" htmlFor="">
          ارتباط با{" "}
        </label>

        <select
          {...register("options", { required: true })}
          className="textField"
        >
          <option value="khadamat">خدمات</option>
          <option value="sell">فروش</option>
          <option value="accounting">حسابداری</option>
        </select>
        {errors.fullName && (
          <span className="text-red-500 my-1">قسمتی انتخاب نکردید</span>
        )}
      </div>
      <div className="w-full">
        <label className="mb-2 block dark:text-indigo-100 font-semibold" htmlFor="">
          توضیحات
        </label>
        <textarea
          {...register("message")}
          placeholder="در صورت تمایل توضیحاتی درباره درخواست خود بنویسید"
          className="textField h-[150px] resize-none p-1"
        />
      </div>
      <button disabled={!isDirty} className="btnForm">
        ثبت درخواست
      </button>
    </FormCard>
  );
};

export default Support;
