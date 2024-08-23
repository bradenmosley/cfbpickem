import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CFB Pick 'Em</h1>
      <SignInButton />
    </main>
  );
}
