import { GameView } from "./site/views/GameView";
import { FrontPage } from "./site/views/FrontPage";
import { Route, Routes } from "react-router";
import { NotFound } from "./site/views/NotFound";
import { BrowseView } from "./site/views/BrowseView";
import { MarketView } from "./site/views/MarketView";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/game" element={<GameView />} />
      <Route path="/browse" element={<BrowseView />} />
      <Route path="/market" element={<MarketView />} />
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
