"use client";
import { useRouter } from "next/navigation";
const Nav = () => {
  const router = useRouter();

  return (
    <div className="flex w-[20%] border-r border-gray-300 box-border">
      <div className="w-full my-5 border-b border-gray-300 box-border">
        <div className="border-b border-gray-300">
          <p className="text-gray-500 text-[15px] mx-5 ">Rulesets</p>
        </div>
        <div
          className="flex flex-col py-2  w-full border-b border-b-gray-300  hover:bg-gray-300 hover:cursor-pointer"
          onClick={() => router.push("notFound")}
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer"
          >
            Production
          </label>
          <span className="text-gray-500 text-[12px] mx-5 hover:cursor-pointer ">
            Primary Environment
          </span>
        </div>
        <div
          className="flex flex-col py-2 w-full border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer "
          onClick={() => router.push("notFound")}
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            Development
          </label>
          <span className="text-gray-500 text-[12px]  mx-5 hover:cursor-pointer ">
            Environment
          </span>
        </div>

        <div className="flex items-end h-20 border-b  border-b-gray-300 pb-2">
          <p className="text-gray-500 text-[15px] w-full mx-5 ">Flag Setup</p>
        </div>

        <div
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
          onClick={() => router.push("/Variable")}
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            Variables
          </label>
        </div>
        <div
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300"
          onClick={() => router.push("/Variations")}
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            Variations
          </label>
        </div>

        <div
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
          onClick={() => router.push("notFound")}
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            API Values
          </label>
        </div>
        <div
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
          onClick={() => router.push("notFound")}
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            History
          </label>
        </div>

        <div
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
          onClick={() => router.push("notFound")}
        >
          <label
            htmlFor=""
            className="text-blue-800 mx-5 hover:cursor-pointer "
          >
            Settings
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
