import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function SiteWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background fixed w-screen h-screen overflow-y-scroll flex flex-col items-center justify-start">
      <div className="p-12 h-fit w-full flex items-start justify-center">
        <div className="w-full h-fit max-w-[1200px] flex flex-col text-white gap-12">
          <NavBar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
