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
  message: string;
  downloadLink: string;
  setUrl: Dispatch<SetStateAction<string>>;
  setFormat: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setDownloadLink: Dispatch<SetStateAction<string>>;
  allowSubmit: boolean;
  setAllowSubmit: Dispatch<SetStateAction<boolean>>;
  fileName: string;
  setFileName: Dispatch<SetStateAction<string>>;
  isInit: boolean;
  setIsInit: Dispatch<SetStateAction<boolean>>;
}>({} as any);

export default function GeneralContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("MP3");
  const [message, setMessage] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [fileName, setFileName] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [isInit, setIsInit] = useState(true);
  return (
    <generalContext.Provider
      value={{
        url,
        setUrl,
        format,
        setFormat,
        message,
        setMessage,
        downloadLink,
        setDownloadLink,
        allowSubmit,
        setAllowSubmit,
        fileName,
        setFileName,
        isInit,
        setIsInit,
      }}
    >
      {children}
    </generalContext.Provider>
  );
}
