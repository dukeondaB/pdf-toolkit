import {
  Combine,
  Scissors,
  FileImage,
  ScanText,
} from "lucide-react";

const tools = [
  {
    title: "Merge PDF",
    icon: Combine,
  },
  {
    title: "Split PDF",
    icon: Scissors,
  },
  {
    title: "PDF to Image",
    icon: FileImage,
  },
  {
    title: "OCR Scanner",
    icon: ScanText,
  },
];

export function ToolGrid() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight">
          Everything you need
        </h2>

        <p className="mt-4 text-zinc-400">
          Powerful PDF tools designed for speed and simplicity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
  key={tool.title}
  className="
    group relative overflow-hidden rounded-3xl
    border border-white/10
    bg-white/[0.03]
    p-8
    transition-all duration-300
    hover:-translate-y-2
    hover:border-white/20
    hover:bg-white/[0.05]
  "
>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-semibold">
                {tool.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Fast and private PDF processing directly in your browser.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}