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
            precisión validada de <span className="font-semibold">80%</span> en habilidades y ajuste cultural.
            Nuestros clientes reportan una <span className="font-semibold">reducción del 75% en tiempos de selección</span>
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
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tarjeta 1: Barras con flecha + línea mejorada */}
          <div className="w-full md:w-1/2">
            <div className="relative h-56 w-full rounded-xl bg-white border border-indigo-200/50 shadow-sm">
              <svg viewBox="0 0 320 200" className="absolute inset-0 w-full h-full p-6">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#111827" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* base */}
                <line x1="24" y1="170" x2="300" y2="170" stroke="#CBD5E1" strokeWidth="2" />

                {/* barras */}
                <motion.rect x="60" y="170" width="40" height="0" rx="6" fill="#FBBF24"
                  initial={{ height: 0, y: 170 }}
                  whileInView={{ height: 70, y: 100 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                />
                <motion.rect x="140" y="170" width="40" height="0" rx="6" fill="#F472B6"
                  initial={{ height: 0, y: 170 }}
                  whileInView={{ height: 110, y: 60 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
                />
                <motion.rect x="220" y="170" width="40" height="0" rx="6" fill="#06B6D4"
                  initial={{ height: 0, y: 170 }}
                  whileInView={{ height: 140, y: 30 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                />

                {/* área bajo la línea */}
                <motion.path d="M40 150 L100 120 L160 140 L220 80 L220 170 L40 170 Z" fill="url(#areaGrad)"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }}
                />

                {/* línea ascendente con gradiente */}
                <motion.path d="M40 150 L100 120 L160 140 L220 80" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: 'easeOut' }}
                />
                {/* puntos animados */}
                {[
                  { x: 40, y: 150 },
                  { x: 100, y: 120 },
                  { x: 160, y: 140 },
                  { x: 220, y: 80 },
                ].map((p, i) => (
                  <motion.circle key={i} cx={p.x} cy={p.y} r="4" fill="#111827"
                    initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  />
                ))}

                <motion.path d="M220 80 L212 84 L220 60 L228 84 Z" fill="#EF4444"
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}
                />
              </svg>
            </div>
          </div>

          {/* Tarjeta 2: Donut con 3 partes iguales y separación visual */}
          <div className="w-full md:w-1/2">
            <div className="relative h-56 w-full rounded-xl bg-white border border-indigo-200/50 shadow-sm grid place-items-center">
              {(() => {
                const R = 60;
                const C = 2 * Math.PI * R;
                // Tres partes iguales (1/3 cada una) con pequeño gap angular para separar visualmente
                const thirds = 1 / 3;
                const gapAngle = 4; // grados de separación entre segmentos
                const gap = C * (gapAngle / 360);
                const dashLen = C * thirds - gap;
                const segments = [
                  { pct: thirds, color: '#22C55E' },
                  { pct: thirds, color: '#F59E0B' },
                  { pct: thirds, color: '#3B82F6' },
                ];
                let acc = 0;
                return (
                  <svg className="-rotate-90" viewBox="0 0 200 200" width="200" height="200">
                    <circle cx="100" cy="100" r={R} stroke="#E5E7EB" strokeWidth="14" fill="none" />
                    {segments.map((s, i) => {
                      const start = acc; acc += s.pct;
                      const dash = dashLen; // longitud del trazo por segmento
                      const rest = C - dash;
                      // offset con medio gap al inicio para dejar separación visible
                      const offset = C * start + gap / 2;
                      return (
                        <motion.circle
                          key={i}
                          cx="100"
                          cy="100"
                          r={R}
                          stroke={s.color}
                          strokeWidth="14"
                          strokeLinecap="round"
                          fill="none"
                          strokeDasharray={`${dash} ${rest}`}
                          initial={{ strokeDashoffset: offset + dash, opacity: 0 }}
                          whileInView={{ strokeDashoffset: offset, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: i * 0.2 }}
                        />
                      );
                    })}

                    {/* Marcas % decorativas */}
                    <motion.text x="56" y="60" className="rotate-90" fill="#111827" fontSize="14" initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }}>%</motion.text>
                    <motion.text x="150" y="54" fill="#111827" fontSize="14" initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>%</motion.text>
                    <motion.text x="158" y="146" fill="#111827" fontSize="14" initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>%</motion.text>
                    <motion.text x="48" y="152" fill="#111827" fontSize="14" initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>%</motion.text>

                    {/* Texto centrado dentro del donut (contrarrotado) */}
                    <g transform="rotate(90,100,100)">
                      <motion.text x="100" y="96" textAnchor="middle" fill="#111827" fontSize="16" fontWeight={600}
                        initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                      >Eficiencia</motion.text>
                      <motion.text x="100" y="116" textAnchor="middle" fill="#6B7280" fontSize="12"
                        initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                      >Optimizada</motion.text>
                    </g>
                  </svg>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
