"use client";

import React from "react";
import { SignInFormStyled } from "./styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Buttons, Inputs } from "@/components";

const SignInForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    // email: yup.string().email().required("Email is required"),
    // password: yup.string().required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <SignInFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="f_title">เข้าสู่ระบบ</div>
        <div className="input_wrap">
          <Controller
            control={control}
            render={({ field }) => (
              <Inputs.TextField
                {...field}
                placeholder="Email"
                errors={errors.email?.message}
              />
            )}
            name="email"
            defaultValue=""
          />
        </div>
        <div className="input_wrap mb_22">
          <Controller
            control={control}
            render={({ field }) => (
              <Inputs.TextFieldPassword
                {...field}
                placeholder="Password"
                errors={errors.password?.message}
              />
            )}
            name="password"
            defaultValue=""
          />
        </div>
        <div className="btn_wrap">
          <Buttons.BgStandard type="submit" label="เข้าสู่ระบบ" />
        </div>
      </form>
    </SignInFormStyled>
  );
};

SignInForm.propTypes = {};

export default SignInForm;
