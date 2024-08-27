"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  let errorMessage = "";
  switch (type) {
    case "auth":
      errorMessage = "Please Sign In";
    case "db":
      errorMessage =
        "There Was An Error. Your Picks Were Not Able To Be Submitted. Please Submit Your Picks Again";
    case "time":
      errorMessage =
        "You Are Too Late. Your Picks Were Not Able To Be Submitted Because It Is Passed The Lock Time";
  }

  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center min-h-[80svh]">
      <p className="text-2xl">{errorMessage}</p>
      <Link
        href="/dashboard"
        className="flex gap-2 justify-center px-6 py-3 w-fit rounded-full bg-slate-600 font-semibold hover:bg-slate-500"
      >
        <ExclamationCircleIcon className="size-5" />
        Go Back
      </Link>
    </div>
  );
}
