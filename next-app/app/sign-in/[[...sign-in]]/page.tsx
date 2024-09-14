import { SignIn } from "@clerk/nextjs";

/*
Page to hold Clerk's sign in component
*/

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <SignIn />
    </main>
  );
}
