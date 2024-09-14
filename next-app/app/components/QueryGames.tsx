import { getXataClient } from "@/xata";
import GameForm from "@/app/components/GameForm";
import { GameInfo } from "@/app/utils/types";
import GameSkeleton from "@/app/components/GameSkeleton";
import { submitPicks } from "../utils/submitPicks";

const xata = getXataClient();

/*
Component to query the given week's games
Seperated into its own compoent so React Suspense can be used
*/

export default async function QueryGames({
  weekNumber,
}: {
  weekNumber: number;
}) {
  // Queries the teams' name and logo and the game location based on the week number
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

  // If the week's picks are not available yet, show a skeleton
  if (games.length == 0) {
    return (
      <>
        <p className="text-center text-2xl font-medium">Coming Soon...</p>
        <GameSkeleton />
      </>
    );
  }

  // Reformats the query for easier passing through props
  const gameList: GameInfo[] = [];
  games.map((game) =>
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

      {/*
        Main form component with server action
        had to be seperate from the GameForm client component
        so React useFormStatus will work correctly 
      */}
      <form action={submitPicks} className="flex flex-col gap-6">
        <GameForm gameList={gameList} weekNumber={weekNumber} />
      </form>
    </>
  );
}
