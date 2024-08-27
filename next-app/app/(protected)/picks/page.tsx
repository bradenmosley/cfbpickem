import { getXataClient, Schedule } from "@/xata";
import Link from "next/link";

const xata = getXataClient();

export default async function Page() {
  const weeks = await xata.sql<Schedule>`SELECT "weekNumber" FROM schedule`;

  return (
    <div className="m-auto grid grid-cols-2 max-w-screen-sm bg-slate-800 border border-slate-400 rounded-lg text-center px-8 py-4 shadow-md">
      <div className="grid grid-cols-1 gap-4 h-min">
        <p className="border-b border-slate-400">Week #</p>
        {weeks.records.map((week, key) => (
          <Link
            href={"picks/".concat(week.weekNumber.toString())}
            key={key}
            className="underline"
          >
            Week {week.weekNumber}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 h-min">
        <p className="border-b border-slate-400">W/L</p>
      </div>
    </div>
  );
}
