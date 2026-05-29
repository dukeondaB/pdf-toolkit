"use client";

type Props = {
  onFileSelect: (file: File) => void;
};

export function UploadDropzone({
  onFileSelect,
}: Props) {
  return (
    <label
      className="
        flex min-h-[300px] cursor-pointer
        items-center justify-center rounded-3xl
        border border-dashed border-white/15
        bg-white/[0.03]
        transition hover:bg-white/[0.05]
      "
    >
      <input
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            onFileSelect(file);
          }
        }}
      />

      <div className="text-center">
        <p className="text-2xl font-semibold">
          Upload PDF
        </p>

        <p className="mt-3 text-zinc-400">
          Drag and drop your file here
        </p>
      </div>
    </label>
  );
}