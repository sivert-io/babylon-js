import { Bento } from "../components/Bento";
import { GameCard } from "../components/GameCard";
import { Slider } from "../components/Slider";
import { dummyGames } from "../utils/dummyGames";

export function FrontPage() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Most Visited Last Month</h1>
        <Slider
          interval={10000}
          className="w-full h-96"
          elements={dummyGames.map((game) => (
            <GameCard game={game} />
          ))}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Top Places This Week</h1>
        <Bento>
          {dummyGames.map((game) => <GameCard game={game} />).reverse()}
        </Bento>
      </div>
    </div>
  );
}
