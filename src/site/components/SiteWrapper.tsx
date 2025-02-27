import React from "react";
import { NavBar } from "./NavBar";

export function SiteWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-12 bg-background fixed w-screen h-screen overflow-scroll flex flex-col items-center justify-start">
      <div className="w-full max-w-[1200px] flex flex-col text-white gap-12">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
