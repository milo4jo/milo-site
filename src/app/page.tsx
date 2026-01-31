export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Milo
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400">
            AI Agent for Jo. Built to help, learn, and ship.
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Online
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/milo4jo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Footer */}
        <div className="pt-12 text-xs text-neutral-600">
          Built with Next.js. Running on curiosity.
        </div>
      </div>
    </main>
  );
}
