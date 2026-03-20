import React, { forwardRef } from "react";
import { useFormContext, UseFormReset } from "react-hook-form";
import { User } from "@/app/api/auth-user/route";

type updateProfile = {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
  refetchUsers: () => void;
};

type Props = {
  id: number;
  reset: UseFormReset<User>;
};

export const editUser = async ({ id, reset }: Props) => {

  try {
    const response = await fetch(`/api/get-userby-id?id=${id}`);

    if (!response.ok) {
      throw new Error("Fetch user failed");
    }

    const user = await response.json();

    reset(user.userDetails);
  } 
  catch (error) {
    console.log("Error fetching user");
  }
};

const UpdateProfileForm = forwardRef<HTMLDivElement, updateProfile>(
  ({ setIsEditing, setShowPassword, showPassword, refetchUsers }, ref) => {

  const methods = useFormContext<User>();

  const onSubmit = async (data: User) => {

    try {
      const response = await fetch("/api/update-user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const user = await response.json();

      if (user.updationSuccess) { 
        alert(user.message);
        setIsEditing(false);
        refetchUsers();
      }
    } 
    catch (error) { 
      console.log("Failed to update user");
    }
  };

  return (
    <div className="bg-white p-8 rounded-md shadow-lg w-[40%] border"  ref={ref}>
      <form
       
        className="w-full space-y-5"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[25px] font-semibold">Editing Details</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 hover:cursor-pointer"
            viewBox="0 0 640 640"
            onClick={() => setIsEditing(false)}
          >
            <path
              fill="rgb(211, 13, 13)"
              d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z"
            />
          </svg>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Username
            <span className="text-red-600 font-semibold text-[20px]">*</span>
          </label>
          <input
            type="text"
            className="mt-1 w-full border rounded-md p-2 "
            {...methods.register("username", {
              required: "Username is required",
            })}
          />
          {methods.formState.errors.username && (
            <p className="text-red-500 text-sm">
              {methods.formState.errors.username.message}
            </p>
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
            {...methods.register("email", {
              required: "email is required",
            })}
          />
          {methods.formState.errors.email && (
            <p className="text-red-500 text-sm">
              {methods.formState.errors.email.message}
            </p>
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
              {...methods.register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at-least 5 characters",
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
          {methods.formState.errors.password && (
            <p className="text-red-500 text-sm">
              {methods.formState.errors.password.message}
            </p>
          )}
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            disabled={!methods.formState.isDirty}
            className="border border-gray-500 bg-gray-200 px-3 py-1 rounded-lg hover:bg-blue-600 hover:text-white disabled:hover:cursor-not-allowed disabled:opacity-50"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
});

export default UpdateProfileForm;
