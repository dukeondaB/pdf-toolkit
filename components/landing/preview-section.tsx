export function PreviewSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
        <div className="flex h-14 items-center gap-2 border-b border-white/10 px-6">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="grid min-h-[600px] grid-cols-[240px_1fr]">
          <div className="border-r border-white/10 bg-white/[0.02] p-4">
            <div className="space-y-4">
              {[1, 2, 3].map((page) => (
                <div
                  key={page}
                  className="aspect-[3/4] rounded-xl border border-white/10 bg-zinc-800"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center bg-zinc-950 p-10">
            <div className="aspect-[3/4] w-full max-w-md rounded-2xl bg-white shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}