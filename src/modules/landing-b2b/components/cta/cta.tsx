"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 bg-content1">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center gap-6 bg-background">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Impulsa tus contrataciones con Laboral AI
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Publica vacantes, gestiona candidatos y acelera tus procesos de selección con nuestra plataforma.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button as={Link} href="/app/login" color="primary" radius="full">
              Comenzar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
