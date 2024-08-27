import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center min-h-[80svh]">
      <p className="text-2xl">Your Picks Have Been Submitted</p>
      <Link
        href="/dashboard"
        className="flex gap-2 justify-center px-6 py-3 w-fit rounded-full bg-slate-600 font-semibold hover:bg-slate-500"
      >
        <HomeIcon className="size-5" />
        Home
      </Link>
    </div>
  );
}
