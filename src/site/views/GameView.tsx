import { useEffect, useRef, useState } from "react";
import { Game } from "../../game/engine/game";

export function GameView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function init(canvas: HTMLCanvasElement) {
      setIsLoaded(true);
      console.log(`Starting ${Game.name}`);
      const app = new Game(canvas, true);
      await app.init();
      app.run();
    }

    if (canvasRef.current && !isLoaded) init(canvasRef.current);
  }, [canvasRef, isLoaded]);

  return (
    <canvas
      className="fixed w-screen h-screen"
      ref={canvasRef}
      id="renderCanvas"
    />
  );
}
