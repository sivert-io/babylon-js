import { GameView } from "./GameView";
import { FrontPage } from "./site/views/FrontPage";
import { Route, Routes } from "react-router";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/game" element={<GameView />} />
    </Routes>
  );
}
