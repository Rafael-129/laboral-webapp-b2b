"use client";

import Logo from "@/src/modules/shared/components/icons/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo fill="#3461FF" width={120} height={38} />
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/70">
            <Link href="#" className="hover:text-foreground">Empresas</Link>
            <Link href="#" className="hover:text-foreground">Blog</Link>
            <Link href="#" className="hover:text-foreground">Postulantes</Link>
            <Link href="#" className="hover:text-foreground">Contacto</Link>
          </nav>
        </div>

        <div className="mt-8 text-xs text-foreground/60">
          © {new Date().getFullYear()} Laboral. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
