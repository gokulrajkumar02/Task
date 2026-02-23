"use client";
import { useRouter } from "next/navigation";
import Link from "next/link"

const NavBar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/logout");
    // router.push("/");
    router.refresh();
  }
  return (
    <div className="flex w-[20%] border-r border-gray-300 box-border">
      <div className="w-full my-5 border-b border-gray-300 box-border">
        <div className="border-b border-gray-300">
          <p className="text-gray-500 text-[15px] mx-5 ">Rulesets</p>
        </div>
        <Link href="/notFound"
          className="flex flex-col py-2  w-full border-b border-b-gray-300  hover:bg-gray-300 hover:cursor-pointer"
         
        >
          <label
            htmlFor=""
            className="text-blue-800 mx-5 hover:cursor-pointer"
          >
            Production
          </label>
          <span className="text-gray-500 text-[12px] mx-5 hover:cursor-pointer ">
            Primary Environment
          </span>
        </Link>
        <Link href="/notFound"
          className="flex flex-col py-2 w-full border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer "
          
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
        </Link>

        <div className="flex items-end h-20 border-b  border-b-gray-300 pb-2">
          <p className="text-gray-500 text-[15px] w-full mx-5 ">Flag Setup</p>
        </div>

        <Link href="/Variable"
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
       
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            Variables
          </label>
        </Link>
        <Link href="/Variations"
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300"
          
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            Variations
          </label>
        </Link>

        <Link href="/notFound"
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
          
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            API Values
          </label>
        </Link>
        <Link href="/notFound"
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
          
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            History
          </label>
        </Link>
        <Link href="/notFound"
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
        >
          <label
            htmlFor=""
            className=" text-blue-800 mx-5 hover:cursor-pointer "
          >
            Accordion
          </label>
        </Link>

        <Link href="/notFound"
          className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer"
        >
          <label
            htmlFor=""
            className="text-blue-800 mx-5 hover:cursor-pointer "
          >
            Settings
          </label>
        </Link>
        <Link href ="/" className="flex flex-col justify-center py-5 w-full h-8.75 border-b border-b-gray-300 hover:bg-gray-300 hover:cursor-pointer">
          <label
            htmlFor=""
            className="text-blue-800 mx-5 hover:cursor-pointer "
            onClick={handleLogout}
          >
            Logout
          </label>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
