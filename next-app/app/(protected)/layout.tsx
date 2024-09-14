import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  ListBulletIcon,
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

import { getXataClient, Schedule } from "@/xata";

const xata = getXataClient();

/*
Layout for the main app
*/

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Queries every week and its starting and ending dates
  const weeks =
    await xata.sql<Schedule>`SELECT "weekNumber", "startDate", "endDate" FROM schedule`;
  const today = new Date();
  let currentWeekNumber = 0;

  // Compares each week queried to today to find the current week number
  weeks.records.forEach((week) => {
    const startDate = new Date(week.startDate);
    if (today >= startDate) {
      const endDate = new Date(week.endDate);
      if (today <= endDate) currentWeekNumber = week.weekNumber;
    }
  });

  return (
    <>
      {/* Top Header */}
      <nav className="sticky top-0 z-10 flex px-6 py-3 justify-between items-center bg-slate-900/95 border-b border-slate-700 shadow">
        <Link href="/dashboard" className="text-xl font-medium">
          CFB Pick Em
        </Link>
        <UserButton />
      </nav>

      {/* Navigation buttons */}
      <div className="grid grid-cols-3 mx-6 my-6 px-6 py-6 gap-3 text-center rounded-xl bg-slate-700">
        <Link
          href="/dashboard"
          className="flex flex-col items-center border-r border-slate-500"
        >
          <HomeIcon className="size-10" />
          Home
        </Link>

        <Link href="/leaderboard" className="flex flex-col items-center">
          <ChartBarIcon className="size-10" />
          Leaderboard
        </Link>

        <Link
          href={"/picks/".concat(currentWeekNumber.toString())}
          className="flex flex-col items-center border-l border-slate-500"
        >
          <ListBulletIcon className="size-10" />
          Picks
        </Link>
      </div>

      <main className="px-6">{children}</main>
    </>
  );
}
