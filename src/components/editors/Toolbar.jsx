import { Copy, Check, Upload, Download } from "lucide-react";
import { useState } from "react";
import UploadDialog from "../dialogs/UploadDialog";
import DownloadDialog from "../dialogs/DownLoadDialog";

export default function Toolbar({ text, copy, copied, roomId }) {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 mb-1 text-xs">
        {/* Copy Button */}
        <button
          onClick={() => copy(text)}
          disabled={copied}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-green-700 disabled:text-white"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>

        {/* Upload Button */}
        <button
          onClick={() => setUploadOpen(true)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200"
        >
          <Upload size={14} />
          Upload
        </button>

        {/* Download Button */}
        <button
          onClick={() => setDownloadOpen(true)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200"
        >
          <Download size={14} />
          Download
        </button>
      </div>

      <UploadDialog
        open={uploadOpen}
        onOpenChange={setUploadOpen}
        roomId={roomId}
        onUploadSuccess={() => {
          if (downloadOpen) {
            setDownloadOpen(false);
            setTimeout(() => setDownloadOpen(true), 200);
          }
        }}
      />

      <DownloadDialog
        open={downloadOpen}
        onOpenChange={setDownloadOpen}
        roomId={roomId}
        onUploadClicked={() => {
          setDownloadOpen(false);
          setUploadOpen(true);
        }}
      />
    </>
  );
}