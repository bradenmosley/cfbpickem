import WeekNumberRow from "@/app/components/WeekNumberRow";
import { getXataClient, Schedule } from "@/xata";

const xata = getXataClient();

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
