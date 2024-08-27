import Link from "next/link";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center min-h-[80svh]">
      <p className="text-2xl">
        There Was An Error. Please Submit Your Picks Again
      </p>
      <Link
        href="/dashboard"
        className="flex gap-2 justify-center px-6 py-3 w-fit rounded-full bg-slate-600 font-semibold hover:bg-slate-500"
      >
        <ExclamationCircleIcon className="size-5" />
        Try Again
      </Link>
    </div>
  );
}
