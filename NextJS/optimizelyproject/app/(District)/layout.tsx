import DistrictNavBar from "@/Component/DistrictNavBar";
import "../globals.css";
import { DistrictProvider } from "@/Context/DistrictContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full box-border flex flex-col">
      <DistrictProvider>
      <DistrictNavBar />
        {children}
        </DistrictProvider>
    </div>
  );
}
