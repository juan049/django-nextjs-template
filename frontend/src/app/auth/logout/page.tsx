"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LogoutButton from "./../../components/logoutButton"; // Asegúrate de importar el componente

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/auth/login"); // Redirige a login si no hay sesión
    return null;
  }

  return (
    <div>
      <h1>Bienvenido, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <LogoutButton /> {/* Aquí el botón de logout */}
    </div>
  );
}
