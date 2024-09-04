import Team from "./Team";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { GameInfo } from "@/app/utils/types";

export default function Game({
  gameNumber,
  gameInfo,
}: {
  gameNumber: number;
  gameInfo: GameInfo;
}) {
  return (
    <div className="flex flex-col w-full px-8 py-4 gap-2 rounded-xl bg-slate-800 shadow-md">
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
