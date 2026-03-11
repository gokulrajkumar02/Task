import { usePathname } from "next/navigation";

type Props = {
  setOpenSlideBar: React.Dispatch<React.SetStateAction<boolean>>;
  openSlideBar: boolean;
};

const MxAppBar = ({ setOpenSlideBar, openSlideBar }: Props) => {

  const pathName = usePathname()
  return (
    <div className="w-full h-[70px] flex items-center justify-between sm:px-6 px-3 z-1">
      <div className="flex items-center justify-between w-[50%] sm:w-[30%] md:w-[35%] lg:w-[25%] md:justify-start">
        <svg
          className={`h-6 w-6 sm:w-8 sm:h-8 cursor-pointer flex ${pathName!= "/MxPlayer/Movies"?"md:hidden":"md:flex"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          onClick={() => setOpenSlideBar(!openSlideBar)}
        >
          <path
            fill="black"
            d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
          />
        </svg>

        <div className="flex items-center mt">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 md:h-15 md:w-15"
            viewBox="0 0 640 640"
          >
            <path
              fill="rgb(84, 132, 216)"
              d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM252.3 211.1C244.7 215.3 240 223.4 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4C269.2 206.9 259.9 206.7 252.3 210.9z"
            />
          </svg>
          <label className="text-[15px] sm:text-[25px] font-semibold">
            MX Player
          </label>
        </div>
      </div>
      <div className="flex w-[40%] sm:w-[20%] items-center gap-x-2 sm:gap-x-5">
        <input
          type="text"
          placeholder="🔍︎ Search"
          className="border border-gray-400 h-10 w-[100%] p-2 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default MxAppBar;
