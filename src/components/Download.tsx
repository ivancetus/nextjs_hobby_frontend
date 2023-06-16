"use client";
import { useContext, useEffect, useState } from "react";
import { generalContext } from "@/context/GeneralContextProvider";
import { DownloadIcon, LoadingIcon, SendIcon } from "@/components/Icon";

export default function Download() {
  const { downloadLink, fileName, isInit } = useContext(generalContext);
  //console.log(downloadLink);
  const handleClick = (e: React.FormEvent) => {
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = fileName;
    a.click();
  };
  return (
    // <div
    //   className={`py-1 w-32 h-12 text-lg ${
    //     downloadLink === "" ? "hidden" : ""
    //   }`}
    // >
    //   <button
    //     type="button"
    //     onClick={handleClick}
    //     className="
    //     p-1 py-0.5 bg-zinc-600 rounded-md w-full
    //     "
    //   >
    //     Download
    //   </button>
    // </div>
    <div className="py-1 w-12 h-12 text-lg">
      <button
        disabled={!downloadLink}
        type="button"
        onClick={handleClick}
        className={`
        py-0.5 group bg-zinc-600 rounded-md w-full disabled:bg-zinc-300 disabled:text-zinc-500 transition-colors border disabled:border-zinc-600 border-zinc-400 border-solid
        hover:bg-zinc-50 hover:text-zinc-800
        `}
      >
        <span className={`inline-block pt-2`}>
          <DownloadIcon className="w-6 h-6" />
        </span>
      </button>
    </div>
  );
}
