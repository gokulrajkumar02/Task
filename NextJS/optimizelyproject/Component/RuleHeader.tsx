import { useContext } from "react";
import { StatusContext } from "@/app/StatusContext";

const RuleHeader = () => {
  const {status} = useContext(StatusContext)
  return (
    <div>
      <h1 className="text-[25px]">Rule</h1>
      <div className="flex justify-between items-center mt-5">
        <div className="w-[30%] flex justify-between">
          <div className="w-[40%]">
            <h1 className="text-gray-500">Type</h1>
            <h1 className="text-blue-800 text-[18px] font-semibold">
              A/B test
            </h1>
          </div>
          <div className="w-[40%]">
            <h1 className="text-gray-500">Status</h1>
            <h1
              className={`text-green-800 text-[18px] ${!status && `text-red-600`}`}
            >
              {status ? "Running" : "Stoped"}
            </h1>
          </div>
        </div>
        <div className="w-[20%] flex justify-between">
          <button
            type="button"
            className="border border-blue-700 p-1 text-blue-700 rounded-md hover:cursor-pointer"
          >
            Conclude
          </button>
          <button className="border border-blue-700 p-1 text-blue-700 rounded-md hover:cursor-pointer w-8">
            ...
          </button>
        </div>
      </div>
      <p className="mt-5 border border-b border-gray-400 "></p>
    </div>
  );
};

export default RuleHeader;
