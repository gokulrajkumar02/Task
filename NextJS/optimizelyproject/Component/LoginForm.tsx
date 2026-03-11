"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { setLoginData } from "./store/variableSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
type FormData = {
  username: string;
  password: string;
  role: "user" | "admin";
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    dispatch(setLoginData(data));
    router.push("/WeatherApp");
    router.refresh();
    localStorage.setItem("loginData", JSON.stringify(data));

    await fetch("/api/save-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-xl p-8 w-87.5 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>

        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            className="mt-1 w-full border rounded-md p-2 "
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters required",
              },
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="mt-1 w-full border rounded-md p-2 "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
              })}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-sm text-blue-600 cursor-pointer select-none"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm ">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <select
            className="mt-1 w-full border rounded-md p-2"
            {...register("role", {
              required: "Please select a role",
            })}
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
