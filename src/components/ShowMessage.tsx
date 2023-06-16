"use client";
import { useContext, useEffect, useState } from "react";
import { generalContext } from "@/context/GeneralContextProvider";

export default function ShowMessage() {
  const { message, setMessage, downloadLink, fileName } =
    useContext(generalContext);
  useEffect(() => {
    if (downloadLink && fileName) {
      setMessage("file ready");
    }
  });
  return (
    <div className="right-3 bottom-5 text-center text-zinc-100 font-semibold absolute">
      {message && <p>{message}</p>}
    </div>
  );
}
