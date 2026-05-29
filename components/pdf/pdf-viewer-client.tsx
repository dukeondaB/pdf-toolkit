"use client";

import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `/pdf.worker.min.mjs`;

type Props = {
  file: File;
};

export function PdfViewerClient({ file }: Props) {
  const [numPages, setNumPages] = useState(0);

  const [currentPage, setCurrentPage] =
    useState(1);

  return (
    <div className="grid grid-cols-[260px_1fr] gap-6">
      {/* Sidebar */}
      <aside className="h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-white/[0.03] p-4">
        <Document file={file}>
          <div className="space-y-4">
            {Array.from(
              new Array(numPages),
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                  className={`
            overflow-hidden rounded-xl border transition
            ${currentPage === index + 1
                      ? "border-white"
                      : "border-white/10"
                    }
          `}
                >
                  <Page
                    pageNumber={index + 1}
                    width={220}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </button>
              )
            )}
          </div>
        </Document>
      </aside>

      <main className="h-[90vh] overflow-auto rounded-3xl border border-white/10 bg-zinc-900 p-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm text-zinc-400">
            Page {currentPage} / {numPages}
          </div>

          <button
            onClick={() => setCurrentPage(1)}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm"
          >
            Back to first page
          </button>
        </div>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) =>
            setNumPages(numPages)
          }
          loading={
            <div className="text-zinc-400">
              Loading PDF...
            </div>
          }
        >
          <div className="flex justify-center">
            <Page
              pageNumber={currentPage}
              width={900}
            />
          </div>
        </Document>
      </main>
    </div>
  );
}