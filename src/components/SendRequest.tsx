"use client";
import { useContext, useEffect } from "react";
import { generalContext } from "@/context/GeneralContextProvider";
import { LoadingIcon, SendIcon } from "@/components/Icon";

export default function SendRequest() {
  const {
    url,
    format,
    setDownloadLink,
    allowSubmit,
    setAllowSubmit,
    fileName,
    setFileName,
    isInit,
    setIsInit,
    setSubmitted,
  } = useContext(generalContext);

  useEffect(() => {
    if (url === "") {
      setAllowSubmit(false);
      setIsInit(true);
    } else {
      setIsInit(false);
      setAllowSubmit(true);
    }
  }, [url, setAllowSubmit, setIsInit]);

  const handleClick = async () => {
    if (
      url.startsWith("https://www.youtube.com/watch?v=") ||
      url.startsWith("https://m.youtube.com/watch?v=") ||
      url.startsWith("https://youtu.be/")
    ) {
      setSubmitted(true);
      setAllowSubmit(false);

      await fetch("https://flask.ivancetus.com", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ url, format }),
      })
        .then((res) => {
          // check response headers
          // console.log("Response Headers:");
          //@ts-ignore
          // for (const [name, value] of res.headers.entries()) {
          //   console.log(`${name}: ${value}`);
          // }

          if (res.headers.get("content-type") === "audio/mpeg") {
            const file_name_utf8 = res.headers
              .get("Content-Disposition")
              ?.split("filename*=UTF-8''")[1];

            console.log("utf8 file name: ", file_name_utf8);
            if (file_name_utf8) {
              const file_name_decoded = decodeURIComponent(
                file_name_utf8.split(".")[0]
              );
              console.log(
                "decoded file name: ",
                file_name_decoded.concat(".", format.toLowerCase())
              );
              setFileName(file_name_decoded.concat(".", format.toLowerCase()));
            }

            res.blob().then((blob) => {
              setDownloadLink(URL.createObjectURL(blob));
            });
          } else if (!res.ok) {
            if (res.status.valueOf() === 500)
              window.alert("server error, please try again later");
            if (res.status.valueOf() === 400)
              window.alert("video not found, make sure url is correct");
            console.log(res);
          }
        })
        .catch((e) => console.log(e));
    } else {
      window.alert(
        "invalid url, must start with one of the following, https://www.youtube.com/... or https://m.youtube.com/... or https://youtu.be/..."
      );
    }
    setIsInit(true);

    // mimic delay
    // @ts-ignore
    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    // setAllowSubmit(false);
    // console.log("submitted");
    // await delay(2000);
    // setAllowSubmit(true);
    // console.log("can submit again");
  };
  return (
    <div className="py-1 w-12 h-12 text-lg">
      <button
        disabled={!allowSubmit}
        type="button"
        onClick={handleClick}
        className={`
        py-0.5 group bg-zinc-600 rounded-md w-full disabled:bg-zinc-300 disabled:text-zinc-500 transition-colors 
        border disabled:border-zinc-600 border-zinc-400 border-solid hover:bg-zinc-50 hover:text-zinc-800
        `}
      >
        <span className={`inline-block pt-2`}>
          {isInit ? (
            <SendIcon className="w-6 h-6" />
          ) : (
            <>
              {allowSubmit ? (
                <SendIcon className="w-6 h-6" />
              ) : (
                <LoadingIcon className="" />
              )}
            </>
          )}
        </span>
      </button>
    </div>
  );
}
