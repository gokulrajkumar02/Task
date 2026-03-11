"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MxAppBar from "@/Component/MxPlayerComponent/MxAppBar";
import MxAside from "@/Component/MxPlayerComponent/MxAside";
import MxSlideBar from "@/Component/MxPlayerComponent/MxSlideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSlideBar, setOpenSlideBar] = useState(false);
  const pathName = usePathname();

  return (
    <div className="h-screen w-screen flex justify-center flex-col relative overflow-x-hidden">
      
      {openSlideBar && (
        <MxSlideBar
          setOpenSlideBar={setOpenSlideBar}
          openSlideBar={openSlideBar}
        />
      )}

      <MxAppBar
        setOpenSlideBar={setOpenSlideBar}
        openSlideBar={openSlideBar}
      />

      <div className="flex flex-1 overflow-hidden">

        {pathName !== "/MxPlayer/Movies" && (
          <MxAside openSlideBar={openSlideBar} />
        )}

        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>

      </div>
    </div>
  );
}