"use client";

import Game from "@/app/components/Game";
import { useFormStatus } from "react-dom";
import { GameInfo } from "@/app/utils/types";

export default function GameForm({
  gameList,
  weekNumber,
}: {
  gameList: GameInfo[];
  weekNumber: number;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      {gameList.map((game, key) => (
        <Game key={key} gameNumber={key + 1} gameInfo={game} />
      ))}

      <input type="hidden" name="weekNumber" value={weekNumber} />

      <button
        type="submit"
        disabled={pending}
        className="px-1 py-2 rounded-full bg-slate-600 font-semibold hover:bg-slate-500 disabled:bg-slate-800 shadow-md"
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </>
  );
}
