import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="sticky top-0 z-10 flex px-6 py-3 justify-between items-center bg-slate-900/95 border-b border-slate-700 shadow">
        <Link href="/dashboard" className="text-xl font-medium">
          CFB Pick Em
        </Link>
        <UserButton />
      </nav>
      <main className="px-6 py-6">{children}</main>
    </>
  );
}
