import { getXataClient, GamesRecord } from "@/xata";
import Game from "@/app/components/Game";

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

      {games.records.map((index, key) => (
        <Game
          key={key}
          awayTeam={index.awayTeam}
          homeTeam={index.homeTeam}
          location={index.location}
        />
      ))}
    </>
  );
}
