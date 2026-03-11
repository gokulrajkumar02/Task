"use client";
import { useRef, useState } from "react";
import formatTime from "../../../Helper/formatTime";

const playPauseSvg = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path
      fill="rgb(0, 0, 0)"
      d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"
    />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <path
      fill="rgb(0, 0, 0)"
      d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"
    />
  </svg>,
];

const MoviesPage = () => {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timing, setTiming] = useState(false);
  const [isDraggingVolumn, setIsDraggingVolumn] = useState(false);
  const [isDraggingBrightNess, setIsDraggingBrightNess] = useState(false);
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(75);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startVolume = useRef(0);
  const startBrightNess = useRef(0);
  const clickTimer = useRef<NodeJS.Timeout>(null);

  const duration = videoRef.current?.duration || 0;
  const progress = duration ? (time / duration) * 100 : 0;

  const playPause = () => {
    const video = videoRef.current;
    if (!video || isDraggingVolumn) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    if (videoRef.current) {
      setTime(videoRef.current.currentTime);
    }
    if (videoRef.current?.currentTime === videoRef.current?.duration) {
      setIsPlaying(false);
    }
  };
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime: number = Number(e.target.value);
    video.currentTime = newTime;
    setTime(newTime);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    if (y > height * 0.75) return;
    if (x < width / 3) {
      setIsDraggingBrightNess(true);
      startBrightNess.current = e.clientY;
    } else if (x > (2 * width) / 3) {
      setIsDraggingVolumn(true);
      startVolume.current = e.clientY;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if ((!isDraggingVolumn && !isDraggingBrightNess) || !videoRef.current)
      return;
    if (isDraggingVolumn) {
      const diffVolumn = startVolume.current - e.clientY;
      let newVolume = volume + diffVolumn * 0.5;
      newVolume = Math.max(0, Math.min(100, newVolume));
      setVolume(newVolume);
      videoRef.current.volume = newVolume / 100;
      startVolume.current = e.clientY;
    } else {
      const diff = startBrightNess.current - e.clientY;
      let newBrightness = brightness + diff * 0.5;
      newBrightness = Math.max(0, Math.min(100, newBrightness));
      setBrightness(newBrightness);
      startBrightNess.current = e.clientY;
    }
  };

  const handleMouseUp = () => {
    isDraggingVolumn
      ? setIsDraggingVolumn(false)
      : setIsDraggingBrightNess(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setVolume(value);

    if (videoRef.current) {
      videoRef.current.volume = value / 100;
    }
  };

  const handleBrightNessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrightness(Number(e.target.value));
  };

  const handleSingleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    if(x > (2 * width) / 3 || x < width / 3) return

    if (clickTimer.current) return;

    clickTimer.current = setTimeout(() => {
      playPause();
      clickTimer.current = null;
    }, 250);
  };

  const handleDoubleClick = (e:React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    if(x > (2 * width) / 3 || x < width / 3) return
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }
    handleFullScreen();
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="w-[100%] h-[100%] flex justify-center">
      <div
        className="h-[70%] w-[90%] box-border relative"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <video
          className="w-full h-full object-cover"
          ref={videoRef}
          onClick={handleSingleClick}
          onDoubleClick={handleDoubleClick}
          onTimeUpdate={updateTime}
          style={{
            filter: `brightness(${brightness}%)`,
          }}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute bottom-5 w-full flex items-center justify-center flex-col">
          <div className="p-2 w-full">
            <input
              type="range"
              step="0.1"
              value={time}
              min={0}
              max={videoRef.current?.duration || 0}
              className="w-[100%] hover:cursor-pointer progress-bar"
              onChange={(e) => handleRangeChange(e)}
              style={{
                background: `linear-gradient(
                  to right,
                  #fff ${progress}%,
                  #555 ${progress}%
                )`,
                transition: "background 0.08s linear",
              }}
            />
          </div>
          <div className="flex w-[70%] md:w-[30%] lg:w-[25%] justify-between  items-center h-15">
            <div>
              <button
                onClick={playPause}
                className="h-8 w-8 hover:cursor-pointer"
              >
                {isPlaying ? playPauseSvg[1] : playPauseSvg[0]}
              </button>
            </div>
            <div
              className="w-[50%] font-semibold p-2  hover:bg-[#1a1a1a] hover:text-white text-center hover:rounded-3xl hover:cursor-pointer select-none"
              onClick={() => setTiming(!timing)}
            >
              <label className="hover:cursor-pointer">
                {timing
                  ? ` -${formatTime((videoRef.current?.duration || 0) - time)}`
                  : formatTime(time)}{" "}
                /
              </label>
              <label className="hover:cursor-pointer">
                {formatTime(videoRef.current ? videoRef?.current?.duration : 0)}
              </label>
            </div>
            <div>🔊 {Math.round(volume)}%</div>
            <div className="absolute right-2 md:right-10 bottom-4 hover:cursor-pointer">
              <h1
                className="text-white drop-shadow-md"
                onClick={handleFullScreen}
              >
                {isFullScreen ? (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M3.29 3.29C3.11 3.46 3.01 3.70 3.00 3.94C2.98 4.19 3.06 4.43 3.22 4.63L3.29 4.70L7.58 8.99H5C4.73 8.99 4.48 9.10 4.29 9.29C4.10 9.47 4 9.73 4 9.99C4 10.26 4.10 10.51 4.29 10.70C4.48 10.89 4.73 10.99 5 10.99H11V4.99C11 4.73 10.89 4.47 10.70 4.29C10.51 4.10 10.26 3.99 10 3.99C9.73 3.99 9.48 4.10 9.29 4.29C9.10 4.47 9 4.73 9 4.99V7.58L4.70 3.29L4.63 3.22C4.43 3.06 4.19 2.98 3.94 3.00C3.70 3.01 3.46 3.11 3.29 3.29ZM19 13H13V19C13 19.26 13.10 19.51 13.29 19.70C13.48 19.89 13.73 20 14 20C14.26 20 14.51 19.89 14.70 19.70C14.89 19.51 15 19.26 15 19V16.41L19.29 20.70L19.36 20.77C19.56 20.92 19.80 21.00 20.04 20.99C20.29 20.98 20.52 20.87 20.70 20.70C20.87 20.52 20.98 20.29 20.99 20.04C21.00 19.80 20.92 19.56 20.77 19.36L20.70 19.29L16.41 15H19C19.26 15 19.51 14.89 19.70 14.70C19.89 14.51 20 14.26 20 14C20 13.73 19.89 13.48 19.70 13.29C19.51 13.10 19.26 13 19 13Z"></path>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M10 3H3V10C3 10.26 3.10 10.51 3.29 10.70C3.48 10.89 3.73 11 4 11C4.26 11 4.51 10.89 4.70 10.70C4.89 10.51 5 10.26 5 10V6.41L9.29 10.70L9.36 10.77C9.56 10.92 9.80 11.00 10.04 10.99C10.29 10.98 10.52 10.87 10.70 10.70C10.87 10.52 10.98 10.29 10.99 10.04C11.00 9.80 10.92 9.56 10.77 9.36L10.70 9.29L6.41 5H10C10.26 5 10.51 4.89 10.70 4.70C10.89 4.51 11 4.26 11 4C11 3.73 10.89 3.48 10.70 3.29C10.51 3.10 10.26 3 10 3ZM20 13C19.73 13 19.48 13.10 19.29 13.29C19.10 13.48 19 13.73 19 14V17.58L14.70 13.29L14.63 13.22C14.43 13.07 14.19 12.99 13.95 13.00C13.70 13.01 13.47 13.12 13.29 13.29C13.12 13.47 13.01 13.70 13.00 13.95C12.99 14.19 13.07 14.43 13.22 14.63L13.29 14.70L17.58 19H14C13.73 19 13.48 19.10 13.29 19.29C13.10 19.48 13 19.73 13 20C13 20.26 13.10 20.51 13.29 20.70C13.48 20.89 13.73 21 14 21H21V14C21 13.73 20.89 13.48 20.70 13.29C20.51 13.10 20.26 13 20 13Z"></path>
                  </svg>
                )}
              </h1>
            </div>
          </div>
        </div>
        {isDraggingVolumn && (
          <div className="absolute top-[50%] right-3 rotate-270 ">
            <input
              type="range"
              value={volume}
              min={10}
              max={100}
              onChange={handleVolumeChange}
              className="appearance-none rounded-3xl bg-transparent"
              style={{
                background: `linear-gradient(
              to right,
              #0078d4 ${volume}%,
              #555 ${volume}%
            )`,
              }}
            />
          </div>
        )}
        {isDraggingBrightNess && (
          <div>
            <input
              type="range"
              className="absolute top-[50%] left-5 rotate-270 appearance-none rounded-3xl"
              min={0}
              max={100}
              value={brightness}
              onChange={handleBrightNessChange}
              style={{
                background: `linear-gradient(
              to right,
              #0078d4 ${brightness}%,
              #555 ${brightness}%`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
