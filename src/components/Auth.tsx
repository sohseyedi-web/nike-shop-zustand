import * as RiIcon from "react-icons/ri";
import FormCard from "./common/FormCard";
import { useForm, SubmitHandler } from "react-hook-form";
import OTPInput from "react-otp-input";
import { useState } from "react";

type InputType = {
  phone: string;
};

const Auth = () => {
  const [otp, setOtp] = useState("");

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
        <RiIcon.RiUser6Line size={30} />
        <h6 className="text-lg font-semibold">ورود / ثبت نام</h6>
      </div>
      <div className="w-full">
        <label className="mb-2 block font-semibold" htmlFor="">
          شماره موبایل
        </label>
        <input
          type="text"
          {...register("phone", { required: true, minLength: 11 })}
          placeholder="سهیل سیدی"
          className="w-full h-[45px] px-1 rounded-xl shadow-sm transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        />
        {errors.phone && (
          <span className="text-red-500 my-1">شماره موبایل را وارد کنید</span>
        )}
      </div>
      <div className="w-full">
      <label className="mb-2 block font-semibold" htmlFor="">
          کد 
        </label>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          inputStyle={{
            width: "19%",
            height: "55px",
            border: "2px solid rgb(229 231 235)",
            "&:focus": {
              border: "2px solid rgb(129 140 248)",
            },
            borderRadius: "0.5rem",
            fontSize: "1.2rem",
            outline: "none",
          }}
          containerStyle="flex flex-row-reverse items-center gap-x-2 justify-between border "
          renderInput={(props: any) => <input type="number" {...props} />}
        />
      </div>
      <button
        disabled={!isDirty}
        className="border w-full h-[45px] rounded-xl bg-green-500 text-white text-lg font-semibold transition-all duration-300 hover:bg-green-700"
      >
        درخواست کد
      </button>
    </FormCard>
  );
};

export default Auth;
