import { IPData, toDisplayValue } from "../app/IpTracker/page";

type IpCardType = {
  ipData: IPData;
};

const IpCard = ({ ipData }: IpCardType) => {

  const geoLocation = ipData?.location;
const formattedLocation = geoLocation
  ? `${toDisplayValue(geoLocation.city)}, ${toDisplayValue(geoLocation.region)}${geoLocation.postalCode ? " " + geoLocation.postalCode : ""}`
  : "—";

  return (
    <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-4 w-full">
      <div className={`px-6 py-3 text-left`}>
        <p className="text-[10px] font-bold  uppercase text-gray-700 mb-2">
          IP ADDRESS
        </p>
        <p className="text-[16px] font-semibold text-gray-900" data-testid="ip-value">
          {ipData.ip ? toDisplayValue(ipData.ip) : "--"}
        </p>
      </div>
      <div className={`px-6 py-3 text-left`}>
        <p className="text-[10px] font-bold  uppercase text-gray-700 mb-2">
          LOCATION
        </p>
        <p className="text-[16px] font-semibold text-gray-900" data-testid="location-value">
          {formattedLocation}
        </p>
      </div>
      <div className={`px-6 py-3 text-left`}>
        <p className="text-[10px] font-bold  uppercase text-gray-700 mb-2" data-testid="time-zone">
          TIMEZONE
        </p>
        <p className="text-[16px] font-semibold text-gray-900" data-testid="timezone-value">
          {geoLocation?.timezone ? `${toDisplayValue(geoLocation.timezone)}` : "--"}
        </p>
      </div>
      <div className={`px-6 py-3 text-left`}>
        <p className="text-[10px] font-bold  uppercase text-gray-700 mb-2">
          ISP
        </p>
        <p className="text-[16px] font-semibold text-gray-900" data-testid="isp-value">
          {ipData?.isp ? toDisplayValue(ipData.isp) : "--"}
        </p>
      </div>
    </div>
  );
};

export default IpCard;
