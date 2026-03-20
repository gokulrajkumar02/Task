"use client";
import { useRef, useState } from "react";
import { FormProvider, useForm} from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/app/api/auth-user/route";
import deleteUser from "@/Utilites/Helper/deleteUser";
import fetchUserByEmail from "@/Utilites/Helper/fetchUserByEmail";
import fetchUsers from "@/Utilites/Helper/fetchUsers";
import UpdateProfileForm from "@/Component/UpdateProfileForm";
import { editUser } from "@/Component/UpdateProfileForm";

const Dashboard = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const methods = useForm<User>();
  const formRef = useRef<HTMLDivElement>(null);
  
  const getUsersQuery = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    enabled: false,
  });

  const getUserByEmail = useQuery({
    queryKey: ["userByEmail"],
    queryFn: () => fetchUserByEmail(searchEmail),
    enabled: false,
  });

  const userByEmail = getUserByEmail?.data?.userDetails;

  return (
    <div className="mt-2 w-full relative">
      <div className="flex justify-center">
        <button
          className="border border-gray-300 p-2 rounded-lg hover:cursor-pointer bg-gray-300"
          onClick={() => getUsersQuery.refetch()}
        >
          Get All Users
        </button>
      </div>

      {getUsersQuery.isLoading && <p>Loading...</p>}
      {getUsersQuery.data && (
        <div className="mt-2 flex justify-center">
          <table className="w-[80%] border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Id</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Password</th>
                <th className="border p-2">Edit</th>
                <th className="border p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {getUsersQuery.data.userDetails.map((items: User) => {
                return (
                  <tr
                    key={items.email}
                    className="hover:bg-gray-100 text-center"
                  >
                    <td className="border p-2">{items.id}</td>
                    <td className="border p-2">{items.username}</td>
                    <td className="border p-2">{items.email}</td>
                    <td className="border p-2">{items.password}</td>
                    <td
                      className="border p-2 hover:cursor-pointer"
                      onClick={async () => {
                        setShowPassword(false);
                        await editUser({
                          id: items.id,
                          reset: methods.reset,
                        });
                        setIsEditing(true);
                      }}
                    >
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          viewBox="0 0 640 640"
                        >
                          <path
                            fill="rgb(0, 61, 170)"
                            d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"
                          />
                        </svg>
                      </div>
                    </td>
                    <td
                      className="border p-2 hover:cursor-pointer"
                      onClick= {async () => {
                        await deleteUser(items.id);
                        getUsersQuery.refetch();
                      }} 
                    >
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                          className="h-8 w-8"
                        >
                          <path
                            fill="rgb(0, 61, 170)"
                            d="M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-2 w-full flex justify-center ">
        <div className="w-[60%] flex justify-center items-center gap-2">
          <label>Get User By Email : </label>
          <input
            type="email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="border border-gray-400 w-[25%] rounded p-1 focus:outline-none focus:border-blue-400 focus:border-2"
            placeholder="Enter Email"
          />
          <button
            className="hover:cursor-pointer border border-gray-300 p-1 rounded bg-gray-300"
            onClick={() => getUserByEmail.refetch()}
          >
            Get User
          </button>
        </div>
      </div>
      {getUserByEmail.isLoading && (
        <p className="flex justify-center">Loading..</p>
      )}
      {getUserByEmail.data && userByEmail ? (
        <div className="mt-2 flex justify-center">
          <table className="w-[70%] border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Id</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-gray-100">
                <td className="border p-2">{userByEmail.id}</td>
                <td className="border p-2">{userByEmail.username}</td>
                <td className="border p-2">{userByEmail.email}</td>
                <td className="border p-2">{userByEmail.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : getUserByEmail.data && !userByEmail ? (
        <div className="text-center mt-3 text-red-500 font-semibold">
          No user found with this email
        </div>
      ) : null}

      <FormProvider {...methods}>
        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10"
          onClick={(e) => {
            if(formRef.current && !formRef.current.contains(e.target as Node)) setIsEditing(false)
          }}
          >
            <UpdateProfileForm
             ref={formRef}
              setIsEditing={setIsEditing}
              setShowPassword={setShowPassword}
              showPassword={showPassword}
              refetchUsers={getUsersQuery.refetch}
            />
          </div>
        )} 
      </FormProvider>
    </div>
  );
};

export default Dashboard;
