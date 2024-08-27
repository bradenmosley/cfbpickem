import { getXataClient, GamesRecord } from "@/xata";
import Game from "@/app/components/Game";
import { submitPicks } from "@/app/utils/submitPicks";

const xata = getXataClient();

export default async function Page({
  params,
}: {
  params: { weekNumber: number };
}) {
  const games =
    await xata.sql<GamesRecord>`SELECT "awayTeam", "homeTeam", location FROM games WHERE "weekNumber" = ${params.weekNumber}`;

  return (
    <div className="flex flex-col gap-4 max-w-[500px] pb-24 m-auto">
      <p className="text-center text-3xl font-semibold">
        Week {params.weekNumber}
      </p>

      <form action={submitPicks} className="flex flex-col gap-6">
        {games.records.map((index, key) => (
          <Game
            key={key}
            gameNumber={key + 1}
            awayTeam={index.awayTeam}
            homeTeam={index.homeTeam}
            location={index.location}
          />
        ))}
        <input type="hidden" name="weekNumber" value={params.weekNumber} />
        <button
          type="submit"
          id="submit"
          className="px-1 py-2 rounded-full bg-slate-600 font-semibold hover:bg-slate-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
