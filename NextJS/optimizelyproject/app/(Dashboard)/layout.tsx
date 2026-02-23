import NavBar from "@/Component/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
         <div className="flex h-screen w-screen">
          <NavBar />
          {children}
  
          </div>
  );
}
