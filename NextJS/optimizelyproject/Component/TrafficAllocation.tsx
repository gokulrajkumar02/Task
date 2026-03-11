import { useState } from "react";

const TrafficAllocation = () => {
  const [allocationRange, setAllocationRange] = useState("100");
  const width = 400
  return (
    <div className="mt-6">
      <h1 className="text-blue-800 font-semibold text-lg">
        Traffic Allocation
      </h1>
      <div className="flex justify-between text-sm text-gray-500 mt-4 mb-2">
        <span>0%</span>
        <span>100%</span>
      </div>

      <div className="w-full flex items-center gap-4">
        <div className="flex-1 rounded-md px-3 py-3">
          <svg width={width} height="60">
            <defs>
              <linearGradient
                id="rampGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            <polygon
              points={`0,60 ${(+allocationRange / 100) * width},60 ${(+allocationRange / 100) * width},0`}
              fill="url(#rampGradient)"
            />

            {/* <circle
              cx={(+allocationRange / 100) * width}
              cy="30"
              r="8"
              fill="white"
              stroke="#1f2937"
              strokeWidth="2"
            /> */}
          </svg>
        </div>

        <div className="flex items-center border border-gray-300 rounded-md h-10 px-2">
          <input
            type="number"
            min={0}
            max={100}
            value={allocationRange}
            onChange={(e) => setAllocationRange(e.target.value)}
            className="w-14 outline-none text-center"
          />
          <span className="text-gray-500 text-sm ml-1">%</span>
        </div>
      </div>
    </div>
  );
};

export default TrafficAllocation;
