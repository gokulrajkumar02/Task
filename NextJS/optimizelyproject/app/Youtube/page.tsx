"use client";
import { useRouter } from "next/navigation";
import videosIframe from "@/Helper/VideosIframe";
import { useEffect, useState } from "react";
type Video = {
  id: number;
  iframe: string;
  videoId: string;
};

const page = () => {
  const router = useRouter();
  const [videoIframe, setVideoIframe] = useState<Video[]>([]);

  useEffect(() => {
    setVideoIframe(videosIframe());
  }, []);
  
  return (
    <div className="w-full min-h-screen p-4">
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3
        gap-6
      "
      >
        {videoIframe.map((video) => (
          <div
            key={video.id}
            className="w-full cursor-pointer"
            onClick={() => router.push(`Youtube/${video.videoId}`)}
          >
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt="video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-2">
              <p className="font-semibold text-sm">Video Title</p>
              <p className="text-gray-500 text-sm">
                Channel Name • 1M views • 1 day ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
