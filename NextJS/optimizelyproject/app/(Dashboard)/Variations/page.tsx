"use client";
import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/Component/store/store";
import VariationList from "@/Component/VariationList";
import { useDispatch } from "react-redux";
import { setVariation } from "@/Component/store/variableSlice";

type VariableInput = {
  id: number;
  name: string;
  type: string;
  data: string | number | boolean;
};

type FormData = {
  name: string;
  id: string;
  description: string;
  variables: VariableInput[];
};

const VariationPage = () => {
  const [pageShow, isPageShow] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const Variables = useSelector((state: RootState) => state.variable.variable);
  const variation = useSelector((state: RootState) => state.variable.variation);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
    control,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      id: "",
      description: "",
      variables: [],
    },
  });

  const { fields, replace } = useFieldArray({
    control,
    name: "variables",
  });

  useEffect(() => {
    reset({
      name: "",
      id: "",
      description: "",
      variables: Variables.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        data: item.defaultvalue ?? "",
      })),
    });
  }, [resetForm, Variables, reset]);

  useEffect(() => {
    if (selectedId === null) return;

    const selected = variation.find((v) => v.id === selectedId);
    if (!selected) return;
    console.log("Selected Variation:", selected);

    reset({
      name: selected.name,
      id: String(selected.id),
      description: selected.description,
      variables: selected.variables.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        data: item.data,
      })),
    });

    isPageShow(true);
  }, [selectedId]);

  const nameValue = watch("name");

  useEffect(() => {
    const generatedKey = nameValue
      ?.toLowerCase()
      .replace(/\s+=/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    setValue("id", generatedKey);
  }, [nameValue]);

  const onSubmit = (data: FormData) => {
    // console.log("Submitted data:", data);
    dispatch(setVariation(data));
  };

  return (
    <div className="w-full box-border flex overflow-hidden ">
      <div className="w-[50%] border border-gray-300 flex box-border ">
        <VariationList
          type={isPageShow}
          setResetFrom={setResetForm}
          resetForm={resetForm}
          setSelectedId={setSelectedId}
        />
      </div>

      {pageShow && (
        <div className="w-[50%] ml-3 mt-3 overflow-y-auto">
          <h2 className="text-blue-900 text-[35px]">Configure Variations</h2>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-blue-800">Name *</label>
            <input
              className="border w-[90%] h-10 rounded-md p-2 mt-1"
              {...register("name", { required: "Name required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <label className="text-blue-800 mt-5">Key *</label>
            <input
              disabled
              className="border w-[90%] p-2 rounded-md mt-1 bg-gray-100"
              {...register("id", { required: true })}
            />

            <label className="text-blue-800 mt-5">Description</label>
            <textarea
              className="border w-[90%] p-2 rounded-md mt-1"
              {...register("description", { required: "Description required" })}
            />

            {fields.length !== 0 && (
              <div className="mt-6">
                <h3 className="text-blue-800">Variables</h3>

                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="border w-[90%] border-gray-300 p-3 rounded-md mb-3 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-gray-500 text-xs">
                        ID: {watch(`variables.${index}.id`)}
                      </p>
                      <h1 {...register(`variables.${index}.name`)}>
                        {field.name}
                      </h1>
                      <span {...register(`variables.${index}.type`)}>
                        {field.type}
                      </span>
                    </div>

                    <div>
                      {field.type !== "Boolean" ? (
                        <input
                          type={field.type === "Integer" ? "number" : "text"}
                          className="border p-1 rounded-md"
                          {...register(`variables.${index}.data`)}
                        />
                      ) : (
                        <select
                          className="border p-1 rounded-md"
                          {...register(`variables.${index}.data`)}
                        >
                          <option value="">Select</option>
                          <option value="true">True</option>
                          <option value="false">False</option>
                        </select>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex w-[90%] justify-end mt-10 gap-4">
              <button
                type="reset"
                onClick={() => {
                  isPageShow(false);
                }}
                className="border bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:cursor-pointer"
              >
                Cancel
              </button>

              <button
                className={`border bg-blue-500 text-white px-4 py-2 rounded-md ${
                  isDirty
                    ? "hover:bg-blue-700 hover:cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }`}
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

export default VariationPage;
