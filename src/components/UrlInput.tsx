"use client";
import { useContext } from "react";
import { generalContext } from "@/context/GeneralContextProvider";

export default function UrlInput() {
  const { url, setUrl } = useContext(generalContext);
  //console.log("url change", url);
  return (
    <div className="flex flex-col text-lg">
      <input
        id="yt"
        className="
        text-teal-900 placeholder:italic placeholder:text-slate-400 block w-full border-slate-300 rounded-sm shadow-sm
        focus:outline-none focus:border-zinc-700 focus:ring-zinc-700 focus:ring-1 text-ellipsis
        "
        type="text"
        name="url"
        placeholder=" Youtube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  );
}
