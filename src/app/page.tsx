import UrlInput from "@/components/UrlInput";
import FormatInput from "@/components/FormatInput";
import SendRequest from "@/components/SendRequest";
import Download from "@/components/Download";
import PageTitle from "@/components/PageTitle";

export default function Page() {
  return (
    <main className="relative items-center justify-center shadow-xl border rounded-md w-80 h-44 py-2 mx-auto bg-zinc-500 text-zinc-50 flex flex-col">
      <PageTitle />
      <UrlInput />
      <FormatInput />
      <div className="flex-row flex gap-x-4">
        <SendRequest />
        <Download />
      </div>
    </main>
  );
}
