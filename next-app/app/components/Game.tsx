import { getXataClient } from "@/xata";
import Image from "next/image";
import Team from "./Team";

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
    <>
      <div className="flex flex-col w-full p-4 gap-1 rounded-xl bg-slate-400">
        <Team gameNumber={gameNumber} team={awayTeam} logo={awayLogo} />
        <Team gameNumber={gameNumber} team={homeTeam} logo={homeLogo} />
        <p>{location}</p>
      </div>
    </>
  );
}
