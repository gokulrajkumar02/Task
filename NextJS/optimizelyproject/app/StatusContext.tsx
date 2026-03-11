"use client";
import { createContext, useState, useMemo } from "react";
export const StatusContext = createContext<any>(null);

export const StatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState(true);
  const value = useMemo(() => ({ status, setStatus }), [status]);
  
  return (
    <div>
      <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
    </div>
  );
};
