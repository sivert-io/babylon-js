import React from "react";

export function Bento({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="grid auto-rows-[256px] grid-cols-3 gap-4">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 h-full ${
            i === 3 || i === 6 ? "col-span-2" : ""
          }`}
        >
          {childrenArray[i] ?? (
            <div className="w-full h-full bg-black/25 rounded" />
          )}
        </div>
      ))}
    </div>
  );
}
