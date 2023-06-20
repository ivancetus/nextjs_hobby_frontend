import Spotlight, { SpotlightCard } from "@/components/Spotlight";
import Image from "next/image";
import Card20 from "../../public/card-20.png";
import UrlInput from "@/components/UrlInput";
import FormatInput from "@/components/FormatInput";
import SendRequest from "@/components/SendRequest";
import Download from "@/components/Download";

export default function Page() {
  return (
    // <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-center lg:max-w-none group">
    <Spotlight className="w-full mx-auto items-center justify-center group">
      <SpotlightCard>
        <div className="relative h-full bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden">
          {/* Radial gradient */}
          <div
            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
          </div>
          <div className="flex flex-col h-full items-center text-center">
            {/* Image */}
            <div className="relative inline-flex -mt-3">
              <div
                className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                aria-hidden="true"
              ></div>
              <Image
                className="inline-flex"
                src={Card20}
                width={150}
                height={150}
                alt="Card 20"
                priority
              />
            </div>
            {/* Text */}
            <div className="grow mb-2">
              <h2 className="text-2xl text-slate-200 font-bold mb-1">
                YouTube Download
              </h2>
              <UrlInput />
            </div>
            <FormatInput />
            <div className="flex-row flex gap-x-4">
              <SendRequest />
              <Download />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
}
