import { revalidatePath } from "next/cache";
import QueryGames from "@/app/components/QueryGames";
import { Suspense } from "react";
import GameSkeleton from "@/app/components/GameSkeleton";

/*
Picks Page
Receives the week number from the url param and uses it to query the corresponding week's game
*/

export default function Page({ params }: { params: { weekNumber: number } }) {
  // Used to update the weekNumberButton styling
  revalidatePath("/picks/[weekNumber]", "layout");

  return (
    <div className="flex flex-col gap-4 max-w-[500px] pt-6 pb-24 m-auto">
      <Suspense fallback={<GameSkeleton />}>
        <QueryGames weekNumber={params.weekNumber} />
      </Suspense>
    </div>
  );
}
