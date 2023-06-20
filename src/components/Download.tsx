"use client";
import { useContext, useEffect } from "react";
import { generalContext } from "@/context/GeneralContextProvider";
import { DownloadIcon, LoadingIcon2 } from "@/components/Icon";

export default function Download() {
  const { downloadLink, fileName, submitted, setSubmitted, setDownloadLink } =
    useContext(generalContext);
  //console.log(downloadLink);
  useEffect(() => {
    if (downloadLink) setSubmitted(false);
  }, [downloadLink, setSubmitted]);
  const handleClick = (e: React.FormEvent) => {
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = fileName;
    a.click();
    setDownloadLink("");
  };
  return (
    <div className="py-1 w-12 h-12 text-lg">
      <button
        disabled={!downloadLink}
        type="button"
        onClick={handleClick}
        // className='
        // py-0.5 group bg-zinc-600 rounded-md w-full disabled:bg-zinc-300 disabled:text-zinc-500 transition-colors border disabled:border-zinc-600 border-zinc-400 border-solid
        // hover:bg-zinc-50 hover:text-zinc-800
        // '
        className="
        px-2.5 py-1 text-sm font-medium text-slate-300 rounded-lg disabled:bg-slate-300 disabled:text-slate-500
        bg-slate-900 hover:bg-slate-700 border border-slate-700
        focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150
        "
      >
        <span className="inline-block pt-2">
          {submitted ? (
            <LoadingIcon2 className="w-5 h-5" />
          ) : (
            <DownloadIcon className="w-5 h-5" />
          )}
        </span>
      </button>
    </div>
  );
}
