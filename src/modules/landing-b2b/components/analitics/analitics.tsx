"use client";

import NumberCounter from "./NumberCounter";
import SatisfactionDonutChart from "./SatisfactionDonutChart";

const AnalyticsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda - Texto */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Impacto y Métricas</h2>
          <p className="text-gray-700 mb-8">
            Más de <span className="font-semibold text-indigo-600">10,000 usuarios evaluados</span> con una
            precisión validada de <span className="font-semibold">80%</span> en habilidades y ajuste cultural.
            Nuestros clientes reportan una <span className="font-semibold">reducción del 75% en tiempos de selección </span>
            y una mejora sostenida en la calidad de contratación.
          </p>

          {/* Métricas animadas */}
          <div className="grid grid-cols-2 gap-16 py-8">
            <div>
              <p className="text-5xl font-bold text-indigo-600 py-2"><NumberCounter value={80} prefix="+" />%</p>
              <p className="text-gray-600 text-sm">Precisión en la evaluación de habilidades</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600 py-2"><NumberCounter value={10} prefix="+" suffix="K" /></p>
              <p className="text-gray-600 text-sm">Candidatos evaluados con IA</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600 py-2"><NumberCounter value={75} prefix="+" />%</p>
              <p className="text-gray-600 text-sm">Reducción en tiempo de selección</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600 py-2"><NumberCounter value={30} prefix="+" /></p>
              <p className="text-gray-600 text-sm">Empresas asociadas</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Dos tarjetas animadas */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="flex w-full md:w-1/2 items-center justify-center">
            <SatisfactionDonutChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;