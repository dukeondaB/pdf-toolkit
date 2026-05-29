export function FeatureSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12">
        <h2 className="text-4xl font-bold">
          Built for modern workflows
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">
              Private
            </h3>

            <p className="mt-3 text-zinc-400">
              Files stay on your device.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Fast
            </h3>

            <p className="mt-3 text-zinc-400">
              Browser-native processing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Beautiful
            </h3>

            <p className="mt-3 text-zinc-400">
              Minimal modern experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}