import Image from "next/image";

function createGameNumberKey(number: number) {
  return "game".concat(number.toString());
}

const imageStyle = {
  //   maxHeight: "60px",
  //   maxWidth: "100%",
  width: "auto",
  height: "60px",
};

export default function Team({
  gameNumber,
  team,
  logo,
}: {
  gameNumber: number;
  team: string;
  logo: string;
}) {
  return (
    <div className="group rounded-full px-8 py-4 bg-slate-600 has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200">
      <input
        type="radio"
        name={createGameNumberKey(gameNumber)}
        id={team}
        value={team}
        required
        className="hidden"
      />
      <label
        htmlFor={team}
        className="grid grid-cols-3 w-full items-center justify-items-center"
      >
        <Image
          src={logo}
          width={60}
          height={60}
          alt={team.concat(" logo")}
          unoptimized
          style={imageStyle}
        />
        <p className="grid-cols-subgrid col-span-2 font-medium text-2xl">
          {team}
        </p>
      </label>
    </div>
  );
}
