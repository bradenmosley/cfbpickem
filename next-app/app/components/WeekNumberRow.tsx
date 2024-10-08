import { Schedule } from "@/xata";
import WeekNumberButton from "./WeekNumberButton";

/*
Creates a Week Number Button for each week in the list received
Determines the current week number based on today's date
*/

export default function WeekNumberRow({ weekList }: { weekList: Schedule[] }) {
  const today = new Date();
  let currentWeekNumber = 0;

  return (
    <div className="flex gap-4 overflow-auto pb-2">
      {weekList.map((week, key) => {
        // Compares each week in the list to today to find the current week number
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
