"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import VariablesList from "@/Component/VariablesList";
import generateId from "@/Helper/generateId";
import {
  setVariable,
  setEditingVariableData,
  clearEditingVariable,
} from "@/Component/store/variableSlice";
import { RootState } from "@/Component/store/store";

type FormData = {
  id: number;
  name: string;
  description: string;
  defaultvalue: string | number | boolean;
};

const VariablePage = () => {
  const [pageShow, isPageShow] = useState(false);
  const [formType, setFormType] = useState("");

  const dispatch = useDispatch();

  const editingVariable = useSelector(
    (state: RootState) => state.variable.editingVariable,
  );

  useEffect(() => {
    if (editingVariable) {
      reset(editingVariable);
    }
  }, [editingVariable]);

  useEffect(() => {
    if (!editingVariable) {
      reset({
        name: "",
        description: "",
        defaultvalue: "",
      });
    }
  }, [formType]);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    // watch,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      description: "",
      defaultvalue: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // isPageShow(false);
    dispatch(clearEditingVariable());
    const creatingId = editingVariable ? editingVariable.id : generateId();
    console.log(creatingId);
    
    const variableData = { ...data, id: creatingId, type: formType };
    dispatch(setVariable(variableData));
    dispatch(setEditingVariableData(variableData));
    console.log("data", variableData);
    reset(data);
  };

  // const formalues = watch();
  // console.log("form values", formalues);

  return (
    <div className="w-full box-border flex overflow-x-hidden ">
      <div className="w-[50%]  border border-gray-300 flex box-border overflow-y-auto">
        <VariablesList
          type={isPageShow}
          setVal={setFormType}
          value={formType}
        />
      </div>
      {pageShow && (
        <div className="w-[50%]  ml-3 mt-3">
          <div>
            <h2 className="text-blue-900 text-[35px]">
              Configure {formType} variables
            </h2>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label className="text-blue-800">
                Variabel Key
                <span className="text-[25px] text-red-500 font-extrabold">
                  *
                </span>
              </label>
              <input
                type="text"
                className="border w-[90%] h-10 rounded-md p-2 mt-1"
                {...register("name", {
                  required: "Name required",
                })}
              />
              <p className="text-blue-800 text-[13px] mt-1">
                Variable key cannot be changed after they're created
              </p>
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full mt-6.25">
              <label className="text-blue-800">Description</label>
              <textarea
                placeholder="Add description"
                className="border w-[90%] h-15 p-2 rounded-md mt-1"
                {...register("description", {
                  required: "Description required",
                })}
              />
            </div>
            {errors.description && (
              <p className="text-red-500 mt-1">{errors.description.message}</p>
            )}

            <div className="flex flex-col mt-8">
              <label className="text-blue-800">
                Default Value
                <span className="text-[25px] text-red-500 font-extrabold">
                  *
                </span>
              </label>
              {formType !== "Boolean" && (
                <input
                  type={formType == "String" ? "text" : "number"}
                  min={formType == "Integer" ? 0 : undefined}
                  className="border w-[90%] h-10 rounded-md p-2 mt-1"
                  {...register("defaultvalue", {
                    required: "Default value required",
                  })}
                />
              )}
              {formType === "Boolean" && (
                <select
                  className="border w-[90%] h-10 rounded-md p-2 mt-1"
                  {...register("defaultvalue", {
                    required: "Default value required",
                  })}
                >
                  <option value="">Select an option</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              )}
              {errors.defaultvalue && (
                <p className="text-red-500">{errors.defaultvalue.message}</p>
              )}
            </div>

            <div className="flex w-[90%] justify-end mt-10 gap-4">
              <button
                type="reset"
                onClick={() => {
                  isPageShow(false);
                  dispatch(clearEditingVariable());
                  reset();
                }}
                className="border bg-gray-500 text-white px-4 py-2 rounded-md hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                className={`border bg-blue-700 text-white px-4 py-2 rounded-md  ${isDirty ? "hover:cursor-pointer" : "hover:cursor-no-drop opacity-50"}`}
                type="submit"
                disabled={!isDirty}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default VariablePage;
