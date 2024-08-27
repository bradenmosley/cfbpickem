import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <SignIn />
    </main>
  );
}
