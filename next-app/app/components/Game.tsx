import { getXataClient } from "@/xata";
import Team from "./Team";
import { MapPinIcon } from "@heroicons/react/24/solid";

const xata = getXataClient();

export default async function Game({
  gameNumber,
  awayTeam,
  homeTeam,
  location,
}: {
  gameNumber: number;
  awayTeam: string;
  homeTeam: string;
  location: string;
}) {
  let awayLogo: string | undefined = "";
  let homeLogo: string | undefined = "";

  const queryAwayLogo = await xata.db.teams
    .filter({ teamName: awayTeam })
    .getFirst()
    .then((result) => (awayLogo = result?.logo?.url));

  const queryHomeLogo = await xata.db.teams
    .filter({ teamName: homeTeam })
    .getFirst()
    .then((result) => (homeLogo = result?.logo?.url));

  Promise.all([queryAwayLogo, queryHomeLogo]);

  if (awayLogo === undefined) {
    awayLogo = "/helmet.svg";
  }
  if (homeLogo === undefined) {
    homeLogo = "/helmet.svg";
  }

  return (
    <div className="flex flex-col w-full px-8 py-4 gap-2 rounded-xl bg-slate-800 shadow-md">
      <Team
        gameNumber={gameNumber}
        team={awayTeam}
        logo={awayLogo}
        required={true}
      />
      <Team
        gameNumber={gameNumber}
        team={homeTeam}
        logo={homeLogo}
        required={false}
      />
      <div className="flex gap-1">
        <MapPinIcon className="size-5" />
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
}
