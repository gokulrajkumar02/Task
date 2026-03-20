"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type user = {
  username: string;
  email: string;
  password: string;
};

const USER_AUTH_API = "/api/auth-user";
const REGISTER_USER_API = "/api/register-user";

const UserManagement = () => {
  const [isLogin, setisLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<user>();

  const onSubmit = async (data: user) => {
    try {
      const url = isLogin ? USER_AUTH_API : REGISTER_USER_API;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);

      if (isLogin && result.authenticated) {
        router.push("/UserManagement/Dashboard");
        return;
      }

      const isUserAlreadyRegistered =
        result.registered || result.message === "User already Exists";

      if (!isLogin && isUserAlreadyRegistered) {
        setisLogin(true);
        reset();
      }
    } catch (error) {
      console.error("Error Message : ", error);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-300">
      <form
        className="bg-white shadow-xl rounded-lg p-8 w-[80%] md:w-[40%] lg:w-[30%] space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <div>
          <label className="block text-sm font-medium">
            Username
            <span className="text-red-600 font-semibold text-[20px]">*</span>
          </label>
          <input
            type="text"
            className="mt-1 w-full border rounded-md p-2 "
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">
            Email
            <span className="text-red-600 font-semibold text-[20px]">*</span>
          </label>
          <input
            type="email"
            className="mt-1 w-full border rounded-md p-2 "
            {...register("email", {
              required: "email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Password
            <span className="text-red-600 font-semibold text-[20px]">*</span>
          </label>
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
        {isLogin ? (
          <div className="flex justify-end select-none">
            <h1>
              New user ?
              <span
                className="text-blue-700 hover:cursor-pointer hover:underline mx-2"
                onClick={() => {
                  setisLogin(false);
                  reset();
                }}
              >
                Register
              </span>
            </h1>
          </div>
        ) : (
          <div className="flex justify-end select-none">
            <h1>
              Already Have Account ?
              <span
                className="text-blue-700 hover:cursor-pointer hover:underline mx-2"
                onClick={() => {
                  setisLogin(true);
                  reset();
                }}
              >
                Login
              </span>
            </h1>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:cursor-pointer"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default UserManagement;
