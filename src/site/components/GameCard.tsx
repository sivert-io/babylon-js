import { Star, TrendUp } from "@phosphor-icons/react";
import { Place } from "../types/place";

function GameTag({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "bg-fun-pink" | "bg-fun-purple";
}) {
  return (
    <span
      className={`flex items-center gap-1 ${color} text-white text-xs font-medium px-2 py-1 rounded-full`}
    >
      {children}
    </span>
  );
}

export function GameCard({ game }: { game: Place }) {
  return (
    <a
      href="/game"
      className="select-none w-full h-full flex flex-col justify-start clickable overflow-hidden bg-black/25"
    >
      <div className="relative flex-5/6">
        <img
          draggable={false}
          className="object-cover object-center w-full h-full"
          src={game.image}
          alt={game.name}
        />
        <div className="absolute top-2 right-2 flex gap-2 items-center">
          {game.favorites > 10000 && (
            <GameTag color="bg-fun-pink">
              Players Choice <Star size={12} weight="fill" />
            </GameTag>
          )}
          {game.visits > 10000 && (
            <GameTag color="bg-fun-purple">
              Rising Star <TrendUp size={12} weight="fill" />
            </GameTag>
          )}
        </div>
      </div>
      <div className="w-full flex-1/6 flex items-center justify-between px-4 text-xs">
        <p className="font-bold">{game.name}</p>
        {game.creator && <p>{game.creator}</p>}
      </div>
    </a>
  );
}
