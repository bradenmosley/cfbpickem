import { UserButton } from "@clerk/nextjs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="sticky top-0 z-10 flex px-6 py-2 justify-between bg-slate-900/95 border-b border-slate-700 shadow">
        <h3>CFB Pick 'Em</h3>
        <UserButton />
      </nav>
      <main className="px-4 py-2">{children}</main>
    </>
  );
}
