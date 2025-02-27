import { CaretDown, Coin, MoneyWavy } from "@phosphor-icons/react";
import { avatar } from "../utils/generateAvatar";
import numbro from "numbro";

export function NavBar() {
  const signedIn = true;
  return (
    <nav className="sticky -top-3 left-0 right-0 text-primary flex justify-center z-50">
      <div className="flex items-center justify-between gap-12 backdrop-blur p-8 bg-black/25 rounded-xl max-w-[1200px] w-full">
        <div className="flex items-center gap-12">
          <a className="clickable" href="/">
            <h1 className="text-2xl font-bold">Qubix</h1>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/browse" className="clickable">
              Browse
            </a>
            <a href="/market" className="clickable">
              Market
            </a>
            <a href="/forum" className="clickable">
              Forum
            </a>
          </div>
        </div>
        {signedIn ? (
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 text-xs font-medium items-end">
              <span className="flex items-center gap-1 text-green-200">
                {numbro(32434).format({ average: true, totalLength: 3 })}
                <MoneyWavy weight="bold" size={14} />
              </span>
              <span className="flex items-center gap-1 text-yellow-200">
                {numbro(143523412).format({ average: true, totalLength: 3 })}
                <Coin weight="bold" size={14} />
              </span>
            </div>
            <button className="flex items-center gap-2 relative clickable">
              <img
                className="w-10 h-10 rounded-full border-2 border-white z-10 absolute left-0"
                src={avatar("Username").toDataUri()}
                alt="User avatar"
              />
              <span className="bg-surface-1 border border-surface-2 text-primary pl-12 font-medium p-2 leading-0 rounded-full relative flex items-center gap-1">
                Username
                <CaretDown weight="bold" size={18} />
              </span>
            </button>
          </div>
        ) : (
          <a
            href="/login"
            className="text-sm rounded-full border-fun-pink border px-3 py-2"
          >
            Login / Register
          </a>
        )}
      </div>
    </nav>
  );
}
