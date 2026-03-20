export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-5 animate-pulse space-y-3"
            >
              <div className="h-4 bg-zinc-200 rounded w-3/4" />
              <div className="h-3 bg-zinc-200 rounded w-1/2" />
              <div className="h-3 bg-zinc-200 rounded w-full" />
              <div className="h-3 bg-zinc-200 rounded w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
