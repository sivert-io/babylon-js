import { GameView } from "./GameView";
import { FrontPage } from "./site/views/FrontPage";
import { Route, Routes } from "react-router";
import { NotFound } from "./site/views/NotFound";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/game" element={<GameView />} />
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
