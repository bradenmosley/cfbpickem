"use server";

import { getXataClient } from "@/xata";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const xata = getXataClient();

export async function submitPicks(formData: FormData) {
  const { userId } = auth();
  if (!userId) {
    redirect("/app/error");
  }

  const rawFormData = Object.fromEntries(formData.entries());
  const weekNumber = parseInt(rawFormData.weekNumber.toString());
  let teamsPicked: string[] = [];

  for (const [key, value] of Object.entries(rawFormData)) {
    if (key.startsWith("game")) {
      teamsPicked.push(value.toString());
    }
  }

  try {
    await xata.db.picks.create({
      userId: userId,
      weekNumber: weekNumber,
      teams: teamsPicked,
    });
  } catch (error) {
    redirect("/app/error");
  }

  redirect("/app/success");
}
