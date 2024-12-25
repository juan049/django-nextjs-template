"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Asegúrate de que uses este desde `next/navigation`

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <button onClick={() => router.push("/auth/logout")}>Logout</button>
    </div>
  );
}
