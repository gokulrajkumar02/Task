import { useRouter } from "next/navigation";

type Props = {
  setOpenSlideBar: React.Dispatch<React.SetStateAction<boolean>>;
  openSlideBar: boolean;
};

const slideBarContent = [
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 640 640">
        
        <path
          fill="rgb(0, 0, 0)"
          d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"
        />
      </svg>
    ),
    Title: " Home",
    NavitageTo :""
  },
  {
    svg: (
      <svg
      className="w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      >
        <path d="m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z" />
      </svg>
    ),
    Title: "Movies",
    NavitageTo :"/MxPlayer/Movies"
  },
  {
    svg: (
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M18 1H6a2 2 0 00-2 2h16a2 2 0 00-2-2Zm3 4H3a2 2 0 00-2 2v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2ZM3 20V7h18v13H3Zm13-6.5L10 10v7l6-3.5Z" />
      </svg>
    ),
    Title: "Trending",
    NavigatageTo:""
  },
  {
    svg: (
      <svg
      className="w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      >
        <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 016.447 15.276 7 7 0 00-12.895 0A9 9 0 0112 3Zm0 2a4 4 0 100 8 4 4 0 000-8Zm0 2a2 2 0 110 4 2 2 0 010-4Zm-.1 9.001L11.899 16a5 5 0 014.904 3.61A8.96 8.96 0 0112 21a8.96 8.96 0 01-4.804-1.391 5 5 0 014.704-3.608Z" />
      </svg>
    ),
    Title: "You",
    NavigatageTo:""
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 640 640">
        <path
          
          fill="rgb(0, 0, 0)"
          d="M320 128C426 128 512 214 512 320C512 426 426 512 320 512C254.8 512 197.1 479.5 162.4 429.7C152.3 415.2 132.3 411.7 117.8 421.8C103.3 431.9 99.8 451.9 109.9 466.4C156.1 532.6 233 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C234.3 64 158.5 106.1 112 170.7L112 144C112 126.3 97.7 112 80 112C62.3 112 48 126.3 48 144L48 256C48 273.7 62.3 288 80 288L104.6 288C105.1 288 105.6 288 106.1 288L192.1 288C209.8 288 224.1 273.7 224.1 256C224.1 238.3 209.8 224 192.1 224L153.8 224C186.9 166.6 249 128 320 128zM344 216C344 202.7 333.3 192 320 192C306.7 192 296 202.7 296 216L296 320C296 326.4 298.5 332.5 303 337L375 409C384.4 418.4 399.6 418.4 408.9 409C418.2 399.6 418.3 384.4 408.9 375.1L343.9 310.1L343.9 216z"
          />
      </svg>
    ),
    Title: "Watch Later",
    NavigatageTo:""
  },
];

const MxSlideBar = ({ setOpenSlideBar, openSlideBar }: Props) => {

  const router = useRouter()

  return (
    <div className="fixed inset-0 z-40">
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out
          ${
            openSlideBar
              ? "bg-black/20 backdrop-blur-md opacity-40"
              : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpenSlideBar(false)}
      ></div>

      <div
        className={`absolute top-0 left-0 w-[300px] h-full bg-white
        flex flex-col items-start p-3 shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${openSlideBar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="py-2 px-6 w-full h-full">
          <div className="flex justify-between items-center">
            <label className="text-[25px] font-semibold">MX Player</label>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-8 w-8 hover:cursor-pointer"
                onClick={() =>setOpenSlideBar(false)}
              >
                <path
                  fill="rgb(255, 0, 0)"
                  d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z"
                />
              </svg>
            </span>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[40%]">
            {slideBarContent.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push(item.NavitageTo || "/MxPlayer")}
                  className="flex gap-x-10 py-2 px-1 items-center hover:bg-gray-200 hover:rounded-md hover:cursor-pointer"
                >
                  <label className="h-8 w-8 hover:cursor-pointer">{item.svg}</label>
                  <label className="text-[20px] font-semibold hover:cursor-pointer select-none">
                    {item.Title}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MxSlideBar;
