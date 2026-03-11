"use client";
import { useEffect, useMemo, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DevelopmentList from "@/Component/DevelopmentList";
import TrafficAllocation from "@/Component/TrafficAllocation";
import VariantAllocationPanel from "@/Component/VariantAllocationPanel";
import { RootState } from "@/Component/store/store";
import RuleHeader from "@/Component/RuleHeader";
import {
  addingRuleData,
  clearEditingRuleData,
  setEditingRuleSet,
} from "@/Component/store/variableSlice";

const countries = ["India", "Germany", "Japan"];

type FormData = {
  name: string;
  key: string;
  audience: string;
  distribution_mode: string;
  variationSelectBaselineInput: number;
  variationSelectOtherInput: number;
};

const Development = () => {
  const [pageShow, setPageShow] = useState(false);
  const [pageShowReset, setPageShowReset] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountry, setShowCountry] = useState(false);
  const [activeKey, setActiveKey] = useState("");
  const variationValue = useSelector(
    (state: RootState) => state.variable.variation,
    shallowEqual,
  );
  const editingRuleData = useSelector(
    (state: RootState) => state.variable.editingRuleData,
  );

  useEffect(() => {
    console.log("Data", editingRuleData);
    if (!editingRuleData) return;

    reset(editingRuleData);
  }, [editingRuleData]);

  const disPatch = useDispatch();
  const methods = useForm<FormData>({
    defaultValues: {
      name: "",
      key: "",
      audience: "",
      distribution_mode: "auto",
      variationSelectBaselineInput: 50,
      variationSelectOtherInput: 50,
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = methods;

  const developmentName = watch("name");
  const distribution_mode = watch("distribution_mode");
  useEffect(() => {
    const generatedKey = developmentName
      ?.toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    setValue("key", generatedKey);
  }, [developmentName]);

  useEffect(() => {
    setValue(
      "variationSelectBaselineInput",
      distribution_mode === "manual" ? 0 : 50,
    );
    setValue(
      "variationSelectOtherInput",
      distribution_mode === "manual" ? 0 : 50,
    );
  }, [distribution_mode]);

  useEffect(() => {
    reset({
      name: "",
      key: "",
      audience: "",
      distribution_mode: "auto",
      variationSelectBaselineInput: 50,
      variationSelectOtherInput: 50,
    });
    setCountrySearch("");
    setShowCountry(false);
  }, [pageShowReset]);

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(countrySearch.toLowerCase()),
  );
  const methodsMemo = useMemo(() => methods, [methods]);
  const handleSelect = (country: string) => {
  setValue("audience", country, { shouldDirty: true });
  setCountrySearch("");
  setShowCountry(false);
};

  const onSubmit = (data: any) => {
    disPatch(setEditingRuleSet(data.key))
    disPatch(addingRuleData(data));
    reset(data)
  };

  return (
    <div className="w-full box-border flex">
      <div className="w-[50%]  border border-gray-300 flex box-border">
        <DevelopmentList
          setPageShow={setPageShow}
          pageShowReset={pageShowReset}
          setPageShowReset={setPageShowReset}
          setActiveKey={setActiveKey}
          activeKey={activeKey}
        />
      </div>
      {pageShow && (
        <div className="w-[50%] box-border mx-6 my-5 overflow-y-auto scrollbar-hide">
          <RuleHeader />
          <FormProvider {...methodsMemo}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-5 flex justify-between">
                <label className="text-blue-800 font-semibold">
                  Name
                  <span className="text-red-500 text-[20px] font-bold">*</span>
                </label>
                <p className="text-blue-600">Add description</p>
              </div>
              <input
                type="text"
                className="border border-gray-400 w-[100%] h-10 rounded focus:outline-none focus:border-blue-500 focus:border-2 p-2"
                {...register("name", {
                  required: "Name required..",
                })}
              />
              <div className="mt-5">
                <label className="text-blue-800 font-semibold">
                  Key
                  <span className="text-red-500 text-[20px] font-bold">*</span>
                </label>
              </div>
              <input
                disabled
                type="text"
                className="border border-gray-400 w-[100%] h-10 rounded focus:outline-none focus:border-blue-500 focus:border-2 p-2"
                {...register("key", { required: true })}
              />
              <p className="text-blue-800">
                Rule key canot be changed after they're created
              </p>

              <div className="mt-5">
                <div className="flex justify-between">
                  <label className="text-blue-800 font-semibold">
                    Audience
                  </label>
                  <p className="text-blue-600">Code Mode</p>
                </div>

                {!watch("audience") && (
                  <div className="relative mt-4">
                    <input
                      type="text"
                      {...register("audience", { required: true })}
                      value={countrySearch}
                      placeholder="🔍︎ Search and Add Audience"
                      className="border border-gray-400 w-full h-10 rounded p-2 focus:outline-none focus:border-blue-500 focus:border-2"
                      onChange={(e) => {
                        setCountrySearch(e.target.value);
                        // setShowCountry(true);
                      }}
                      onClick={() => setShowCountry(true)}
                    />
                    {showCountry && (
                      <div className="absolute top-11 left-0 w-full border border-gray-300 bg-white rounded shadow-md z-10">
                        {filteredCountries.map((country) => (
                          <div
                            key={country}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(country)}
                          >
                            {country}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {watch("audience") && (
                  <div className="relative mt-4">
                    <input
                      {...register("audience", { required: true })}
                      type="text"
                      disabled
                      value={watch("audience")}
                      className="border border-gray-400 w-full h-10 rounded p-2 bg-gray-100"
                    />
                    <span
                      className="absolute right-4 top-2 cursor-pointer text-blue-800 font-bold"
                      onClick={() => {
                        setValue("audience", "");
                        setShowCountry(true);
                      }}
                    >
                      ×
                    </span>
                  </div>
                )}
              </div>
              <TrafficAllocation />

              <div className="mt-5">
                <h1 className=" text-blue-800 font-semibold">
                  Distribution Mode
                </h1>
                <select
                  {...register("distribution_mode")}
                  className="w-[100%] h-8 rounded-md mt-3 border border-gray-500 focus:outline-none focus:border-blue-500 focus:border-2"
                >
                  <option value={"auto"}>Auto</option>
                  <option value={"manual"}>Manual</option>
                </select>
              </div>
              <h1 className="text-blue-800 font-semibold mt-5">Variations</h1>
              <VariantAllocationPanel
                variantName={"Baseline"}
                registerSelect={"variationSelectBaseline"}
                registerInput={"variationSelectBaselineInput"}
              />
              <VariantAllocationPanel
                variantName={"Other"}
                registerSelect={"variationSelectOther"}
                registerInput={"variationSelectOtherInput"}
              />

              <div className="flex w-[90%] justify-end mt-10 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCountry(false);
                    setActiveKey("");
                    setCountrySearch("");
                    disPatch(clearEditingRuleData());
                    reset({
                      name: "",
                      key: "",
                      audience: "",
                      distribution_mode: "auto",
                      variationSelectBaselineInput: 50,
                      variationSelectOtherInput: 50,
                    });
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
          </FormProvider>
        </div>
      )}
    </div>
  );
};

export default Development;
