"use client";

import Game from "@/app/components/Game";
import { submitPicks } from "@/app/utils/submitPicks";
import { useFormStatus } from "react-dom";
import { GameInfo } from "@/app/utils/types";

export default function GameForm({
  gameList,
  weekNumber,
}: {
  gameList: GameInfo[];
  weekNumber: number;
}) {
  const status = useFormStatus();

  return (
    <form action={submitPicks} className="flex flex-col gap-6">
      {gameList.map((game, key) => (
        <Game key={key} gameNumber={key + 1} gameInfo={game} />
      ))}

      <input type="hidden" name="weekNumber" value={weekNumber} />

      <button
        type="submit"
        disabled={status.pending}
        className="px-1 py-2 rounded-full bg-slate-600 font-semibold hover:bg-slate-500 shadow-md"
      >
        {status.pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
