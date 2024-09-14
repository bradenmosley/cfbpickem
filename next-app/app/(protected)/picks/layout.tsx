import WeekNumberRow from "@/app/components/WeekNumberRow";
import { getXataClient, Schedule } from "@/xata";

const xata = getXataClient();

/*
Layout for the Picks pages
Queries every week and its details for the Week Number Buttons
*/

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const weeks =
    await xata.sql<Schedule>`SELECT "weekNumber", "startDate", "endDate" FROM schedule`;

  return (
    <>
      <WeekNumberRow weekList={weeks.records} />
      {children}
    </>
  );
}
