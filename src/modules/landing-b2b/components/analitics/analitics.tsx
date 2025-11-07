import React from "react";
import { motion } from "framer-motion";
import NumberCounter from "./NumberCounter";

const AnalyticsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda - Texto */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Impacto y Métricas</h2>
          <p className="text-gray-700 mb-8">
            Más de <span className="font-semibold text-indigo-600">10,000 usuarios evaluados</span> con una
            precisión validada de <span className="font-semibold">95%</span> en habilidades y ajuste cultural.
            Nuestros clientes reportan una <span className="font-semibold">reducción del 85% en tiempos de selección</span>
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

        {/* Columna Derecha - Gráficos sin datos (solo animación) */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Gráfico lineal animado sin ejes ni textos */}
          <div className="w-full md:w-1/2">
            <div className="relative h-48 w-full">
              <svg viewBox="0 0 320 160" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M32 130 L72 120 L112 100 L152 92 L192 80 L232 68 L272 60 L304 52"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength={1}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <motion.path
                  d="M32 144 L32 144 L72 134 L112 114 L152 106 L192 94 L232 82 L272 74 L304 66 L304 144 Z"
                  fill="url(#areaGradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
              </svg>
            </div>
          </div>

          {/* Gráfico circular (donut) animado sin leyendas */}
          <div className="w-full md:w-1/2">
            {(() => {
              const R = 42;
              const C = 2 * Math.PI * R;
              // 3 segmentos abstractos solo para animación
              const segments = [
                { pct: 0.6, color: "#22C55E" },
                { pct: 0.25, color: "#F59E0B" },
                { pct: 0.15, color: "#3B82F6" },
              ];
              let acc = 0;
              return (
                <svg className="h-28 w-28 mx-auto -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r={R} stroke="#E5E7EB" strokeWidth="10" fill="none" />
                  {segments.map((s, i) => {
                    const start = acc; acc += s.pct;
                    const dash = C * s.pct;
                    const gap = C - dash;
                    const offset = C * start;
                    return (
                      <motion.circle
                        key={i}
                        cx="50"
                        cy="50"
                        r={R}
                        stroke={s.color}
                        strokeWidth="10"
                        strokeLinecap="butt"
                        fill="none"
                        strokeDasharray={`${dash} ${gap}`}
                        strokeDashoffset={offset}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
                      />
                    );
                  })}
                </svg>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
