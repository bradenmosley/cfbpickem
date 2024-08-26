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
    <>
      <h1>Picks</h1>
      <h4>{params.weekNumber}</h4>

      <form action={submitPicks}>
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
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </>
  );
}
