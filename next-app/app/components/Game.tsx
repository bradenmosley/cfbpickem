import Team from "./Team";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { GameInfo } from "@/app/utils/types";

/*
Creates a Team component for both teams and displays the game's location
Required is set to true for only one team so an alert message will only pop up once for each game
*/

export default function Game({
  gameNumber,
  gameInfo,
}: {
  gameNumber: number;
  gameInfo: GameInfo;
}) {
  return (
    <div className="flex flex-col w-full px-8 py-4 gap-2 rounded-xl bg-slate-800 shadow-md">
      {/* Away team */}
      <Team
        gameNumber={gameNumber}
        team={gameInfo.awayTeamName}
        logo={gameInfo.awayTeamLogo}
        required={true}
      />
      <Team
        gameNumber={gameNumber}
        team={gameInfo.homeTeamName}
        logo={gameInfo.homeTeamLogo}
        required={false}
      />
      <div className="flex gap-1">
        <MapPinIcon className="size-5" />
        <p className="text-sm">{gameInfo.location}</p>
      </div>
    </div>
  );
}
