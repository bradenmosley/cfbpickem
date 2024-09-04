import { getXataClient } from "@/xata";
import GameForm from "@/app/components/GameForm";
import { GameInfo } from "@/app/utils/types";
import GameSkeleton from "@/app/components/GameSkeleton";
import { submitPicks } from "../utils/submitPicks";

const xata = getXataClient();

export default async function QueryGames({
  weekNumber,
}: {
  weekNumber: number;
}) {
  const games = await xata.db.games
    .select([
      "awayTeam.teamName",
      "awayTeam.logo.url",
      "homeTeam.teamName",
      "homeTeam.logo.url",
      "location",
    ])
    .filter({ weekNumber: parseInt(weekNumber.toString()) })
    .getAll();

  // Skeleton if the week's picks are not available yet
  if (games.length == 0) {
    return (
      <>
        <p className="text-center text-2xl font-medium">Coming Soon...</p>
        <GameSkeleton />
      </>
    );
  }

  const gameList: GameInfo[] = [];
  games.map((game, key) =>
    gameList.push({
      awayTeamName: game.awayTeam?.teamName,
      awayTeamLogo: game.awayTeam?.logo?.url,
      homeTeamName: game.homeTeam?.teamName,
      homeTeamLogo: game.homeTeam?.logo?.url,
      location: game.location,
    })
  );

  return (
    <>
      <p className="text-center text-3xl font-semibold">Week {weekNumber}</p>
      <form action={submitPicks} className="flex flex-col gap-6">
        <GameForm gameList={gameList} weekNumber={weekNumber} />
      </form>
    </>
  );
}
