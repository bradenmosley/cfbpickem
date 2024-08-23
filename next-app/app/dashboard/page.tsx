import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <main>
      <UserButton />
      <h1>Dashboard</h1>
    </main>
  );
}
