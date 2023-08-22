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

      // await fetch("https://flask.ivancetus.com", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({ url, format }),
      // })
      //   .then((res) => {
      //     // check response headers
      //     // console.log("Response Headers:");
      //     //@ts-ignore
      //     // for (const [name, value] of res.headers.entries()) {
      //     //   console.log(`${name}: ${value}`);
      //     // }
      //     if (res.headers.get("content-type") === "audio/mpeg") {
      //       const content_disposition = res.headers.get("Content-Disposition");
      //
      //       if (content_disposition) {
      //         const file_name_utf8 =
      //           content_disposition.split("filename*=UTF-8''")[1];
      //
      //         const file_name_normal =
      //           content_disposition.split("filename=")[1];
      //
      //         console.log("file name utf8: ", file_name_utf8);
      //         console.log("file name normal: ", file_name_normal);
      //
      //         // if utf8 filname is present, use that, else use default filname
      //         if (file_name_utf8) {
      //           const file_name_decoded = decodeURIComponent(
      //             file_name_utf8.split(".")[0]
      //           );
      //           console.log(
      //             "decoded file name: ",
      //             file_name_decoded.concat(".", format.toLowerCase())
      //           );
      //           setFileName(
      //             file_name_decoded.concat(".", format.toLowerCase())
      //           );
      //         } else {
      //           setFileName(file_name_normal);
      //         }
      //       }
      //       res.blob().then((blob) => {
      //         setDownloadLink(URL.createObjectURL(blob));
      //       });
      //     } else if (!res.ok) {
      //       res.text().then((message) => {
      //         if (res.status.valueOf() === 500) {
      //           setSubmitted(false);
      //           window.alert(message);
      //         }
      //         if (res.status.valueOf() === 503) {
      //           setSubmitted(false);
      //           window.alert(message);
      //         }
      //         if (res.status.valueOf() === 400) {
      //           setSubmitted(false);
      //           window.alert(message);
      //         }
      //         console.log(res);
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     setSubmitted(false);
      //     if (error instanceof TypeError) {
      //       window.alert("Server unavailable, please try again later!");
      //     } else {
      //       console.log(error);
      //       window.alert("Unknown cause of error, contact Ivan!");
      //     }
      //   });
      try {
        const response = await fetch("https://flask.ivancetus.com", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ url, format }),
        });
        if (!response.ok) {
          response.text().then((message) => {
            if (response.status.valueOf() === 500) {
              setSubmitted(false);
              window.alert(message);
            }
            if (response.status.valueOf() === 503) {
              setSubmitted(false);
              window.alert(message);
            }
            if (response.status.valueOf() === 400) {
              setSubmitted(false);
              window.alert(message);
            }
            console.log(response);
          });
        } else {
          if (response.headers.get("content-type") === "audio/mpeg") {
            const content_disposition = response.headers.get(
              "Content-Disposition"
            );

            if (content_disposition) {
              const file_name_utf8 =
                content_disposition.split("filename*=UTF-8''")[1];

              const file_name_normal =
                content_disposition.split("filename=")[1];

              console.log("file name utf8: ", file_name_utf8);
              console.log("file name normal: ", file_name_normal);

              // if utf8 filname is present, use that, else use default filname
              if (file_name_utf8) {
                const file_name_decoded = decodeURIComponent(
                  file_name_utf8.split(".")[0]
                );
                console.log(
                  "decoded file name: ",
                  file_name_decoded.concat(".", format.toLowerCase())
                );
                setFileName(
                  file_name_decoded.concat(".", format.toLowerCase())
                );
              } else {
                setFileName(file_name_normal);
              }
            }
            response.blob().then((blob) => {
              setDownloadLink(URL.createObjectURL(blob));
            });
          }
        }
      } catch (error) {
        console.log(error);
        // fetch backup api
        try {
          const response = await fetch("https://flask-railway.ivancetus.com", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ url, format }),
          });
          if (!response.ok) {
            response.text().then((message) => {
              if (response.status.valueOf() === 500) {
                setSubmitted(false);
                window.alert(message);
              }
              if (response.status.valueOf() === 503) {
                setSubmitted(false);
                window.alert(message);
              }
              if (response.status.valueOf() === 400) {
                setSubmitted(false);
                window.alert(message);
              }
              console.log(response);
            });
          } else {
            if (response.headers.get("content-type") === "audio/mpeg") {
              const content_disposition = response.headers.get(
                "Content-Disposition"
              );

              if (content_disposition) {
                const file_name_utf8 =
                  content_disposition.split("filename*=UTF-8''")[1];

                const file_name_normal =
                  content_disposition.split("filename=")[1];

                console.log("file name utf8: ", file_name_utf8);
                console.log("file name normal: ", file_name_normal);

                // if utf8 filname is present, use that, else use default filname
                if (file_name_utf8) {
                  const file_name_decoded = decodeURIComponent(
                    file_name_utf8.split(".")[0]
                  );
                  console.log(
                    "decoded file name: ",
                    file_name_decoded.concat(".", format.toLowerCase())
                  );
                  setFileName(
                    file_name_decoded.concat(".", format.toLowerCase())
                  );
                } else {
                  setFileName(file_name_normal);
                }
              }
              response.blob().then((blob) => {
                setDownloadLink(URL.createObjectURL(blob));
              });
            }
          }
        } catch (error) {
          setSubmitted(false);
          if (error instanceof TypeError) {
            window.alert("Server unavailable, please try again later!");
          } else {
            console.log(error);
            window.alert("Unknown cause of error, contact Ivan!");
          }
        }
      }
    } else {
      window.alert(
        "Invalid url, must start with one of the following, https://www.youtube.com/... or https://m.youtube.com/... or https://youtu.be/..."
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
        // className='
        // py-0.5 group bg-zinc-600 rounded-md w-full disabled:bg-zinc-300 disabled:text-zinc-500 transition-colors
        // border disabled:border-zinc-600 border-zinc-400 border-solid hover:bg-zinc-50 hover:text-zinc-800
        // '
        className="
        px-2 py-0.5 text-sm font-medium text-slate-300 rounded-lg disabled:bg-slate-300 disabled:text-slate-500
        bg-slate-900 hover:bg-slate-700 border border-slate-700
        focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150
        "
      >
        <span className="inline-block pt-2">
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
