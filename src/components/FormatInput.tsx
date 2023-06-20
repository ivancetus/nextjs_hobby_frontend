"use client";
import { ChangeEvent, useContext } from "react";
import { generalContext } from "@/context/GeneralContextProvider";

export default function FormatInput() {
  const { format, setFormat } = useContext(generalContext);
  const handleFormatChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormat(e.target.value);
  };
  return (
    <div className="flex space-x-4 text-lg text-slate-200 font-bold mb-1">
      <label form="MP3">
        <input
          type="radio"
          value="MP3"
          onChange={handleFormatChange}
          checked={format === "MP3"}
        />
        &nbsp;MP3
      </label>
      <label form="MP4">
        <input
          type="radio"
          value="MP4"
          onChange={handleFormatChange}
          checked={format === "MP4"}
        />
        &nbsp;MP4
      </label>
    </div>
  );
}
