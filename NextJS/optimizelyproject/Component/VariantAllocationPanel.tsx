import React from "react";
import { useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";
import { RootState } from "./store/store";

interface VariantAllocationPanelProps {
  variantName: string;
  registerInput: string;
  registerSelect: string;
}

const VariantAllocationPanel: React.FC<VariantAllocationPanelProps> = ({
  variantName,
  registerInput,
  registerSelect,
}) => {
  const { register, watch, setValue } = useFormContext();

  const variationValue = useSelector(
    (state: RootState) => state.variable.variation,
  );

  return (
    <div className="mt-5 w-[90%]">
      <label htmlFor="">{variantName}</label>
      <div className="flex gap-x-4 mt-4">
        <select
          className="border border-gray-500 w-[70%] h-10 px-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
          {...register(`${registerSelect}`)}
        >
          {variationValue.map((items, index) => {
            return (
              <option key={index} value={items.id}>
                {items.name}
              </option>
            );
          })}
        </select>
        <div className="flex items-center gap-x-1">
          <input
            {...register(`${registerInput}`)}
            type="number"
            className="border w-25 text-end rounded-md h-8 px-2"
          />
          <span className="">%</span>
        </div>
        <span className="font-extrabold text-blue-800">...</span>
      </div>
    </div>
  );
};

export default VariantAllocationPanel;
