"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LineProductivityChart() {
  return (
    <div className="relative h-56 w-full rounded-xl bg-white border border-indigo-200/50 shadow-sm p-6">
      <svg viewBox="0 0 280 180" className="w-full h-full">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Ejes */}
        <line x1="30" y1="150" x2="260" y2="150" stroke="#E5E7EB" strokeWidth="2" />
        <line x1="30" y1="20" x2="30" y2="150" stroke="#E5E7EB" strokeWidth="2" />

        {/* Líneas de guía horizontales */}
        <line x1="30" y1="110" x2="260" y2="110" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="30" y1="70" x2="260" y2="70" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />

        {/* Línea y puntos derivados del mismo arreglo */}
        {(() => {
          const points = [
            { x: 30, y: 95 },
            { x: 80, y: 75 },
            { x: 130, y: 55 },
            { x: 180, y: 45 },
            { x: 230, y: 35 },
          ];
          const pathD = `M${points[0].x} ${points[0].y} ` + points
            .slice(1)
            .map((p) => `L${p.x} ${p.y}`)
            .join(" ");

          return (
            <>
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />

              {points.map((p, i) => (
                <motion.circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill="#fff"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                />
              ))}
            </>
          );
        })()}

        {/* Etiquetas del eje X */}
        {['Inicio', 'Mes 1', 'Mes 2', 'Mes 3', 'Mes 4'].map((label, i) => (
          <text 
            key={i}
            x={30 + i * 50} 
            y="168" 
            textAnchor="middle" 
            fill="#6B7280" 
            fontSize="9"
          >
            {label}
          </text>
        ))}

        {/* Título del gráfico */}
        <motion.text 
          x="145" 
          y="12" 
          textAnchor="middle" 
          fill="#374151" 
          fontSize="12" 
          fontWeight={600}
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          Aumento de Productividad
        </motion.text>
      </svg>
    </div>
  );
}
