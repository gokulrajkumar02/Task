import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { StatusContext } from "@/app/StatusContext";
import { clearEditingRuleData, setEditingRuleSet } from "./store/variableSlice";

const DevelopmentList = ({
  setPageShow,
  setPageShowReset,
  setActiveKey,
  activeKey,
}: any) => {
  const { status, setStatus } = useContext(StatusContext);
  const RuleData = useSelector((state: RootState) => state.variable.RuleData);

  const disPatch = useDispatch();

  const handleEdit = (key: string) => {
    disPatch(setEditingRuleSet(key));
  };

  return (
    <div className="mx-6 my-5 h-full w-full overflow-y-auto scrollbar-hide">
      <h1 className="text-[30px]">Ruleset</h1>
      <div className="mt-3 flex justify-between items-center">
        <div className="w-[35%] flex justify-between">
          <div className="w-[40%]">
            <h1 className="text-gray-500">Environment</h1>
            <h1 className="text-blue-800 text-[18px] font-semibold">
              Development
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
        <button
          onClick={() => setStatus(!status)}
          className="border border-blue-700 p-1 text-blue-700 rounded-md hover:cursor-pointer"
        >
          {status ? "Pause" : "Continue"}
        </button>
      </div>
      <p className="mt-5 border border-b border-gray-400 "></p>
      <div className="mt-3 flex justify-between">
        <p className="">
          The following rule will be evaluated for all visitors
        </p>
        <button
          className="border border-blue-700 p-1 text-blue-700 rounded-md hover:cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            console.log("clicked");
            setPageShow(true);
            setPageShowReset((prev: any) => !prev);
            disPatch(clearEditingRuleData());
          }}
        >
          Add Rule
        </button>
      </div>
      {RuleData &&
        RuleData.map((items, index) => {
          return (
            <div
              key={items.key}
              className="flex w-full justify-end mt-4 gap-x-2 items-center"
            >
              <h1>{index + 1}</h1>
              <div
                className={`w-[90%] h-18 rounded-md flex items-center justify-between py-2 px-4 border hover:cursor-pointer
                ${activeKey === items.key ? "border-blue-500 border-2" : "border-gray-500"}`}
                onClick={() => {
                  setActiveKey(items.key);
                  handleEdit(items.key);
                  setPageShow(true);
                }}
              >
                <div>
                  <h1>{items.name}</h1>
                  <h1
                    className={`text-green-800 text-[18px] ${!status && `text-red-600`}`}
                  >
                    {status ? "Running" : "Stoped"}
                    <span className="text-gray-500"> A/B Test</span>
                  </h1>
                </div>

                <div className="flex w-[25%] justify-end items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="h-6 w-6"
                  >
                    <path
                      fill="rgb(89, 149, 255)"
                      d="M96 96C113.7 96 128 110.3 128 128L128 464C128 472.8 135.2 480 144 480L544 480C561.7 480 576 494.3 576 512C576 529.7 561.7 544 544 544L144 544C99.8 544 64 508.2 64 464L64 128C64 110.3 78.3 96 96 96zM208 288C225.7 288 240 302.3 240 320L240 384C240 401.7 225.7 416 208 416C190.3 416 176 401.7 176 384L176 320C176 302.3 190.3 288 208 288zM352 224L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224zM432 256C449.7 256 464 270.3 464 288L464 384C464 401.7 449.7 416 432 416C414.3 416 400 401.7 400 384L400 288C400 270.3 414.3 256 432 256zM576 160L576 384C576 401.7 561.7 416 544 416C526.3 416 512 401.7 512 384L512 160C512 142.3 526.3 128 544 128C561.7 128 576 142.3 576 160z"
                    />
                  </svg>

                  <h1 className="text-blue-600 font-semibold text-[20px]">
                    ...
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DevelopmentList;
