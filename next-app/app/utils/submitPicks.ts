"use server";

import { getXataClient, Schedule } from "@/xata";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const xata = getXataClient();

/*
Server action to write picks made to database
*/

export async function submitPicks(formData: FormData) {
  // Get the user's id
  const { userId } = auth();
  if (!userId) {
    redirect("/error?type=auth");
  }

  // Get the selections made from the form
  const rawFormData = Object.fromEntries(formData.entries());
  const weekNumber = parseInt(rawFormData.weekNumber.toString());

  // Queries the time picks have to be submitted by
  // If it has passed, shows an error message
  const queryLockTime =
    await xata.sql<Schedule>`SELECT "lockTime" FROM schedule WHERE "weekNumber" = ${weekNumber}`;
  const lockTime = new Date(queryLockTime.records[0].lockTime);
  const submittedTime = new Date();
  if (submittedTime > lockTime) {
    redirect("/error?type=time");
  }

  // Takes each team picked and places it into a string array that will be written to the database
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
    redirect("/error?type=db");
  }

  redirect("/success");
}
