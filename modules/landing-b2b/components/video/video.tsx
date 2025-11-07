import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function Video() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">Demostración</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Cómo nuestra IA acelera tu selección de talento</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Descubra cómo nuestro motor de IA evalúa actitud, habilidades y potencial de liderazgo para reducir el tiempo de contratación y elevar la calidad de sus candidatos.
          </p>
        </div>

        <div className="border-2 border-blue-400 rounded-2xl p-3 md:p-4 bg-white shadow-sm">
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden bg-gray-200">
            {/* Video relacionado a IA (puede reemplazarse por su propio enlace) */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/2ePf9rue1Ao"
              title="¿Qué es la Inteligencia Artificial?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button
            as={Link}
            href="/contacto/demo"
            color="primary"
            variant="flat"
            radius="full"
          >
            Solicitar demo
          </Button>
          <Button
            as={Link}
            href="/empresas/ia"
            variant="flat"
            radius="full"
          >
            Más información
          </Button>
        </div>
      </div>
    </section>
  );
}
