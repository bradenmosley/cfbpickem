import { getXataClient, TeamsRecord } from "@/xata";

const xata = getXataClient();

export default async function Game({
  awayTeam,
  homeTeam,
  location,
}: {
  awayTeam: string;
  homeTeam: string;
  location: string;
}) {
  const awayTeamLogo = await xata.db.teams
    .filter({ teamName: awayTeam })
    .getFirst();
  const homeTeamLogo = await xata.db.teams
    .filter({ teamName: homeTeam })
    .getFirst();

  const awayTeamLogoURL = awayTeamLogo?.toSerializable().logo?.url;
  const homeTeamLogoURL = homeTeamLogo?.toSerializable().logo?.url;

  return (
    <>
      <p>--- Game Card ---</p>
      <form>
        <div>
          <div>
            <input
              type="radio"
              name={homeTeam}
              id={awayTeam}
              value={awayTeam}
              required
            />
            <label htmlFor={awayTeam}>{awayTeam}</label>
          </div>

          <div>
            <input
              type="radio"
              name={homeTeam}
              id={homeTeam}
              value={homeTeam}
            />
            <label htmlFor={homeTeam}>{homeTeam}</label>
          </div>
        </div>
      </form>
      <p>{location}</p>
      <img src={awayTeamLogoURL} className="w-8 h-8" />
      <img src={homeTeamLogoURL} className="w-16" />
      <p>--- --- --- ---</p>
    </>
  );
}
