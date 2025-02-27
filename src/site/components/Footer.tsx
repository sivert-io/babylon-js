export function Footer() {
  return (
    <footer className="w-full backdrop-blur-lg p-8 bg-black/25 flex justify-center items-start">
      <div className="w-full max-w-[1200px] grid gap-12 grid-cols-3 justify-center items-start text-primary">
        <div className="prose prose-invert prose-sm">
          <h2 className="font-bold">Links</h2>
          <div className="flex flex-col gap-1 items-start justify-start">
            <a href="/">Home</a>
            <a href="/game">Game</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="prose prose-invert prose-sm">
          <h2 className="font-bold">About</h2>
          <div className="flex flex-col gap-1 items-start justify-start">
            <p>
              Qubix is a game development company that specializes in creating
              fun and engaging games for all ages.
            </p>
          </div>
        </div>

        <div className="prose prose-invert prose-sm">
          <h2 className="font-bold">Legal</h2>
          <div className="flex flex-col gap-1 items-start justify-start">
            <a href="/privacy">Privacy Policy</a>
            <a href="/tos">Terms of Service</a>
            <p>
              Copyright {new Date().getFullYear()} &copy; Qubix. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
