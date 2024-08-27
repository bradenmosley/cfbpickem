import { SignInButton } from "@clerk/nextjs";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-8 gap-8 m-auto">
      <div className="flex items-center justify-center gap-4 animate-logo">
        <Image src="/logo.svg" width={93} height={140} alt="logo" unoptimized />
        <div>
          <h1 className="text-7xl font-bold text-center">CFB</h1>
          <h1 className="text-4xl font-bold text-center">Pick Em</h1>
        </div>
      </div>

      <SignInButton>
        <button className="flex gap-2 justify-center px-6 py-3 w-fit rounded-full bg-sky-500 font-semibold hover:bg-sky-600 shadow-md">
          <ArrowLeftEndOnRectangleIcon className="size-5" />
          Sign In
        </button>
      </SignInButton>
    </main>
  );
}
