"use client";

import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";

// đang dùng cdn worker 
// fixme sau này dùng local worker sẽ better
pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {
  file: File;
};

export function PdfViewer({ file }: Props) {
  const [numPages, setNumPages] = useState(0);

  return (
    <div className="flex gap-6">
      <div className="w-64 shrink-0 overflow-y-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="space-y-4">
          {Array.from(new Array(numPages), (_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-white/10"
            >
              <Page
                pageNumber={index + 1}
                width={220}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <div className="space-y-8">
            {Array.from(new Array(numPages), (_, index) => (
              <div
                key={index}
                className="flex justify-center"
              >
                <Page
                  pageNumber={index + 1}
                  width={800}
                />
              </div>
            ))}
          </div>
        </Document>
      </div>
    </div>
  );
}