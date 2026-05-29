"use client";

import { useState } from "react";

import { PdfViewer } from "@/components/pdf/pdf-viewer";
import { UploadDropzone } from "@/components/pdf/upload-dropzone";

export default function ViewPage() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-5xl font-bold">
          PDF Viewer
        </h1>

        {!file ? (
          <UploadDropzone onFileSelect={setFile} />
        ) : (
          <PdfViewer file={file} />
        )}
      </div>
    </main>
  );
}