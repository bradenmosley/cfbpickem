import { SignInButton } from "@clerk/nextjs";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-8 gap-8 m-auto">
      <h1 className="text-center">CFB Pick Em</h1>

      <SignInButton>
        <button className="flex gap-2 justify-center px-6 py-3 w-fit rounded-full bg-sky-500 font-semibold hover:bg-sky-600">
          <ArrowLeftEndOnRectangleIcon className="size-5" />
          Sign In
        </button>
      </SignInButton>
    </main>
  );
}
