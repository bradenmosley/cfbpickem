import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 gap-8">
      <h1 className="text-center">CFB Pick 'Em</h1>

      <div className="w-full px-4 py-2 rounded-full bg-sky-500 text-center">
        <SignInButton />
      </div>
    </main>
  );
}
