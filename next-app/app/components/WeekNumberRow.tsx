import { Schedule } from "@/xata";
import WeekNumberButton from "./WeekNumberButton";

export default function WeekNumberRow({ weekList }: { weekList: Schedule[] }) {
  const today = new Date();
  let currentWeekNumber = 0;

  return (
    <div className="flex gap-4">
      {weekList.map((week, key) => {
        const startDate = new Date(week.startDate);
        if (today >= startDate) {
          const endDate = new Date(week.endDate);
          if (today <= endDate) currentWeekNumber = week.weekNumber;
        }
        return (
          <WeekNumberButton
            weekNumber={week.weekNumber}
            currentWeekNumber={currentWeekNumber}
            key={key}
          />
        );
      })}
    </div>
  );
}
