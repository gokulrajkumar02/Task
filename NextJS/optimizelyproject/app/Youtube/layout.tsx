"use client";
import YoutubeAside from "@/Component/YoutubeAside";
import YouTubeNav from "@/Component/YouTubeNav";
import YoutubeSlidebar from "@/Component/YoutubeSlidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSlideBar, setOpenSlideBar] = useState(false);
  return (
    <div className="h-screen w-screen flex flex-col relative">
      {openSlideBar && (
        <YoutubeSlidebar
          setOpenSlideBar={setOpenSlideBar}
          openSlideBar={openSlideBar}
        />
      )}
      <YouTubeNav
        setOpenSlideBar={setOpenSlideBar}
        openSlideBar={openSlideBar}
      />
      <div className="flex flex-1 overflow-hidden">
        <YoutubeAside openSlideBar={openSlideBar} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
