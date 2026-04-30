"use client";

import Carousel from "@/Component/EmblaCarousel/Carousel";
import { useRef, useState, useEffect } from "react";

type StoryDataType = {
  id: string;
  imageUrl: string;
};

const StoryFeatures = () => {
  const [storyData, setStoryData] = useState<StoryDataType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const emblaApiRef = useRef<any>(null);

  const clearTimers = () => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    intervalRef.current = null;
    progressRef.current = null;
  };

  const startTimer = (index: number) => {
    clearTimers();
    setProgress(0);

    let elapsed = 0;
    progressRef.current = setInterval(() => {
      elapsed += 50;
      setProgress((elapsed / 3000) * 100);
    }, 50);

    intervalRef.current = setTimeout(() => {
      const next = index + 1;
      if (next >= storyData.length) {
        setIsViewOpen(false);
        clearTimers();
      } else {
        emblaApiRef.current?.scrollTo(next);
        setCurrentIndex(next);
        startTimer(next);
      }
    }, 3000);
  };

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewOpen(true);
  };

  useEffect(() => {
    if (isViewOpen) {
      startTimer(currentIndex);
    }
    return () => clearTimers();
  }, [isViewOpen, currentIndex]);

  useEffect(() => () => clearTimers(), []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result;
      if (!base64 || typeof base64 !== "string") return;

      setStoryData((prev) => {
        if (!prev) return [{ id: Date.now().toString(), imageUrl: base64 }];
        return [...prev, { id: Date.now().toString(), imageUrl: base64 }];
      });
    };
    reader.readAsDataURL(file);
  };

  const slides = storyData.map((s) => ({
    key: s.id,
    id: s.id,
    src: s.imageUrl,
    bg: s.imageUrl,
  }));

  return (
    <div className="w-full m-5 flex relative">
      <div className="flex gap-5 w-full h-30 items-center p-2">
        <label className="h-20 w-20 rounded-full flex justify-center items-center border-2 border-gray-200 hover:cursor-pointer ">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-5 h-5"
            fill="gray"
          >
            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
          </svg>
        </label>

        <div className="flex gap-5">
          {storyData?.map((stories, index) => (
            <div
              key={stories.id}
              className="h-20 w-20 rounded-full border-2 border-gray-200 hover:cursor-pointer overflow-hidden p-[3px] bg-linear-to-tr from-yellow-300 via-pink-500 to-purple-600"
              onClick={() => openViewer(index)}
            >
              <div className="bg-white w-full h-full rounded-full p-[3px]">
                <img
                  src={stories.imageUrl}
                  alt={stories.id}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {isViewOpen && slides.length > 0 && (
        <div className="fixed inset-0 z-50 bg-[#383838]">
          <div className="flex gap-1 w-full px-2 pt-3 absolute top-0 z-10">
            {storyData.map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 rounded-xl bg-white/30 overflow-hidden"
              >
                <div
                  className="h-full bg-white rounded-xl"
                  style={{
                    width:
                      index < currentIndex
                        ? "100%"
                        : index === currentIndex
                          ? `${progress}%`
                          : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="w-full h-full pt-6">
            <Carousel
              slides={slides}
              options={{
                loop: false,
                align: "center",
                startIndex: currentIndex,
              }}
              variant="StoryFeature"
              gridSelectIndex={currentIndex}
              navigateTo=""
              setIsViewOpen={setIsViewOpen}
              setCurrentIndex={setCurrentIndex}
              onSlideChange={(index: number) => {
                setCurrentIndex(index);
                startTimer(index);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryFeatures;
