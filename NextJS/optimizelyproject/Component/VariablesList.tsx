"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { clearEditingVariable, deleteVariable ,duplicate, setEditingVariableId } from "./store/variableSlice";


const VariablesList = ({ type, setVal, value }: any) => {
  const [showType, setShowType] = useState(false);

  const formData = useSelector((state: RootState) => state.variable);
  const dispatch = useDispatch();
  return (
    <div className="mx-5 my-5 h-full w-full">
      <section className="flex w-full justify-between items-center">
        <label className="text-[30px] text-gray-700">Variable</label>
        <div className="flex justify-between w-70 relative">
          <button
            className="border-2 border-blue-500 px-2 py-1 rounded-md flex items-center hover:cursor-pointer"
            // onClick={() => router.push("/Variable/configurevariable")}
            onClick={() => setShowType(!showType)}
          >
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="M5 12h14m-7 7V5"
              />
            </svg>
            Add Variable
          </button>
          {showType && (
            <div className="absolute top-10 w-full bg-gray-200 hover:cursor-pointer">
              <div
                className="p-2 flex items-center"
                onClick={() => {
                  (type(true), dispatch(clearEditingVariable()),setVal("Boolean"), setShowType(false));
                }}
              >
                <p>
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.1"
                      d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"
                    />
                  </svg>
                </p>
                <div className="ml-5">
                  <h1 className="text-[15px]">Boolean</h1>
                  <label className="text-[12px]">
                    Use this for true/false values
                  </label>
                </div>
              </div>
              <div
                className="p-2 flex items-center"
                onClick={() => {
                  (type(true), dispatch(clearEditingVariable()),setVal("String"), setShowType(false));
                }}
              >
                <p>
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.1"
                      d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"
                    />
                  </svg>
                </p>
                <div className="ml-5">
                  <h1 className="text-[15px]">String</h1>
                  <label className="text-[12px]">
                    Use this for text values
                  </label>
                </div>
              </div>
              <div
                className="p-2 flex  items-center"
                onClick={() => {
                  (type(true), dispatch(clearEditingVariable()),setVal("Integer"), setShowType(false));
                }}
              >
                <p>
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.1"
                      d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"
                    />
                  </svg>
                </p>
                <div className="ml-5">
                  <h1 className="text-[15px]">Integer</h1>
                  <label className="text-[12px]">Use this for Integers</label>
                </div>
              </div>
            </div>
          )}
          <button className="border-2 border-blue-500 px-2 py-1  rounded-md">
            Brainstorm
          </button>
        </div>
      </section>
      {formData.variable.length !== 0 ? (
        <div className="mt-5">
          <div className="border border-gray-300 p-3 rounded-md mb-3 flex items-center justify-between bg-gray-200">
            <label>Variabel Key</label>
            <label>Type</label>
            <div className="flex gap-3">

            <label>Delete</label>
            <label>Duplicate</label>
            </div>
          </div>
          {formData.variable.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 p-3 rounded-md mb-3 flex justify-between items-center"
            > 
              {/* <h1>{item.id}</h1> */}
              <h1 className="text-[18px] text-blue-600 w-25  hover:cursor-pointer hover:underline" onClick={() => {type(true),setVal(item.type),dispatch(setEditingVariableId(item.id))}}>{item.name}</h1>
              <span>{item.type}</span> 
              <div className="flex gap-10">
                <button
                  className="h-10 w-10 hover:cursor-pointer"
                  onClick={() => dispatch(deleteVariable(item.id))}
                >
                  <abbr title="delete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path
                        fill="rgb(28, 147, 253)"
                        d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"
                      />
                    </svg>
                  </abbr>
                </button>
                <button className="h-10 w-10 hover:cursor-pointer" onClick={() => {dispatch(duplicate(item.id)),type(true),dispatch(setEditingVariableId(item.id))}}>
                  <abbr title="copy">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path
                        fill="rgb(28, 147, 253)"
                        d="M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z"
                      />
                    </svg>{" "}
                  </abbr>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <h1 className="text-[18px] border border-gray-300 p-4 rounded-md w-70 text-center">
            No variables added yet.
          </h1>
        </div>
      )}
    </div>
  );
};

export default VariablesList;
