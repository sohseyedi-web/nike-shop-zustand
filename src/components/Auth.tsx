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
      <div className="flex items-center gap-x-2 text-indigo-600 dark:text-indigo-100">
        <RiIcon.RiUser6Line size={30} />
        <h6 className="text-lg font-semibold">ورود / ثبت نام</h6>
      </div>
      <div className="w-full dark:text-indigo-100">
        <label className="mb-2 block font-semibold" htmlFor="">
          شماره موبایل
        </label>
        <input
          type="text"
          {...register("phone", { required: true, minLength: 11 })}
          placeholder="سهیل سیدی"
          className="textField"
        />
        {errors.phone && (
          <span className="text-red-500 my-1">شماره موبایل را وارد کنید</span>
        )}
      </div>
      <div className="w-full dark:text-indigo-100">
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
            borderRadius: "0.75rem",
            fontSize: "1.2rem",
            outline: "none",
          }}
          containerStyle="flex flex-row-reverse items-center gap-x-2 justify-between"
          renderInput={(props: any) => <input type="number" {...props} />}
        />
      </div>
      <button disabled={!isDirty} className="btnForm">
        درخواست کد
      </button>
    </FormCard>
  );
};

export default Auth;
