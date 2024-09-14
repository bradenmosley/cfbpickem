"use client";

import Image from "next/image";

function createGameNumberKey(number: number) {
  return "game".concat(number.toString());
}

const imageStyle = {
  height: "40px",
  width: "auto",
};

/*
Team Component
Creates a radio button and its label for the given team
Required is specified so it will only be set for one team in a given game
  allowing the alert message to only pop up once and not twice for each team
*/

export default function Team({
  gameNumber,
  team,
  logo,
  required,
}: {
  gameNumber: number;
  team: string | undefined;
  logo: string | undefined;
  required: boolean;
}) {
  return (
    <div className="group rounded-full px-8 py-4 bg-slate-700 has-[:checked]:bg-slate-300 has-[:checked]:text-slate-900 has-[:hover]:bg-slate-600 has-[:hover:checked]:bg-slate-300">
      {required ? (
        <input
          type="radio"
          name={createGameNumberKey(gameNumber)}
          id={team}
          value={team}
          required
          className="hidden"
          onInvalid={(e) =>
            alert(
              "You forgot to pick game number ".concat(gameNumber.toString())
            )
          }
        />
      ) : (
        <input
          type="radio"
          name={createGameNumberKey(gameNumber)}
          id={team}
          value={team}
          className="hidden"
        />
      )}
      <label
        htmlFor={team}
        className="grid grid-cols-3 w-full items-center justify-items-center cursor-pointer"
      >
        <Image
          src={logo === undefined ? "/helmet.svg" : logo}
          width={40}
          height={40}
          alt={team === undefined ? "a logo" : team.concat(" logo")}
          unoptimized
          style={imageStyle}
        />
        <p className="grid-cols-subgrid col-span-2 text-lg font-medium text-center">
          {team}
        </p>
      </label>
    </div>
  );
}
