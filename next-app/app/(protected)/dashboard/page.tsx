import Link from "next/link";
import { ListBulletIcon, NumberedListIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      {/* <Link
        href="/leaderboard"
        className="flex flex-col gap-2 p-4 aspect-square justify-center items-center bg-slate-800 border-2 border-slate-700 rounded-xl"
      >
        <NumberedListIcon className="size-20" />
        Leaderboard
      </Link> */}

      <Link
        href="/picks"
        className="flex flex-col gap-2 p-4 aspect-square justify-center items-center bg-slate-800 border-2 border-slate-700 rounded-xl"
      >
        <ListBulletIcon className="size-20" />
        Picks
      </Link>
    </div>
  );
}
