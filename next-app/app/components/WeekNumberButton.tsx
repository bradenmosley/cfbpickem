"use client";

import Link from "next/link";
import clsx from "clsx";
import { useParams } from "next/navigation";

/*
Week Number Button Component
Checks the url param to see which week number page is displayed
  and highlights the corresponding button
*/

export default function WeekNumberButton({
  weekNumber,
  currentWeekNumber,
}: {
  weekNumber: number;
  currentWeekNumber: number;
}) {
  const params = useParams<{ weekNumber: string }>();
  let isCurrentWeek = false;
  let isSelected = false;
  if (weekNumber == currentWeekNumber) isCurrentWeek = true;
  if (parseInt(params.weekNumber) == weekNumber) isSelected = true;

  return (
    <Link
      href={`/picks/${weekNumber}`}
      className={clsx("rounded-full px-3 py-1 whitespace-nowrap", {
        "bg-sky-500": isCurrentWeek == true,
        "bg-slate-500": isSelected == true,
        "bg-slate-700": isSelected == false && isCurrentWeek == false,
      })}
    >
      Week {weekNumber}
    </Link>
  );
}
