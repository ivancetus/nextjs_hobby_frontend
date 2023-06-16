"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export const generalContext = createContext<{
  url: string;
  format: string;
  downloadLink: string;
  setUrl: Dispatch<SetStateAction<string>>;
  setFormat: Dispatch<SetStateAction<string>>;
  setDownloadLink: Dispatch<SetStateAction<string>>;
  allowSubmit: boolean;
  setAllowSubmit: Dispatch<SetStateAction<boolean>>;
  fileName: string;
  setFileName: Dispatch<SetStateAction<string>>;
  isInit: boolean;
  setIsInit: Dispatch<SetStateAction<boolean>>;
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
}>({} as any);

export default function GeneralContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("MP3");
  const [downloadLink, setDownloadLink] = useState("");
  const [fileName, setFileName] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  return (
    <generalContext.Provider
      value={{
        url,
        setUrl,
        format,
        setFormat,
        downloadLink,
        setDownloadLink,
        allowSubmit,
        setAllowSubmit,
        fileName,
        setFileName,
        isInit,
        setIsInit,
        submitted,
        setSubmitted,
      }}
    >
      {children}
    </generalContext.Provider>
  );
}
