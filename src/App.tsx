import { useState } from "react";
import { GameView } from "./GameView";
import { FrontPage } from "./site/views/FrontPage";
import { NavBar } from "./site/components/NavBar";
export function App() {
  const [showGameView, setShowGameView] = useState(false);

  return showGameView ? (
    <GameView />
  ) : (
    <div className="p-12 bg-background fixed w-screen h-screen overflow-auto flex flex-col items-center justify-start">
      <div className="w-full max-w-[1200px] flex flex-col text-white gap-12">
        <NavBar />
        <FrontPage />
      </div>
    </div>
  );
}
