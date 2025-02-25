import { useState } from "react";
import { Button } from "./site/components/Button";
import { GameView } from "./GameView";

export function App() {
  const [showGameView, setShowGameView] = useState(false);

  return showGameView ? (
    <GameView />
  ) : (
    <div className="fixed w-screen h-screen flex flex-col items-center justify-center bg-neutral-900">
      <div className="prose prose-invert lg:prose-xl">
        <div className="flex flex-col">
          <h1>Welcome to Qubix!</h1>
          <Button onClick={() => setShowGameView(true)}>Play now!</Button>
        </div>
      </div>
    </div>
  );
}
