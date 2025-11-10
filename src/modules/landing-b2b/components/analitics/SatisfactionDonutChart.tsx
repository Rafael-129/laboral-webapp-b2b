"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SatisfactionDonutChart() {
  return (
    <div className="relative h-56 w-full rounded-xl bg-white border border-indigo-200/50 shadow-sm flex items-center justify-center">
      <svg viewBox="0 0 200 200" width="180" height="180">
        {(() => {
          const R = 70;
          const C = 2 * Math.PI * R;
          const percentage = 0.9;
          const dashLen = C * percentage;
          const rest = C - dashLen;

          return (
            <>
              {/* Círculo de fondo */}
              <circle
                cx="100"
                cy="100"
                r={R}
                stroke="#E5E7EB"
                strokeWidth="16"
                fill="none"
              />

              {/* Círculo animado */}
              <motion.circle
                cx="100"
                cy="100"
                r={R}
                stroke="url(#circleGrad)"
                strokeWidth="16"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${dashLen} ${rest}`}
                transform="rotate(-90 100 100)"
                initial={{ strokeDashoffset: dashLen }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />

              <defs>
                <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>

              {/* Texto central */}
              <motion.text
                x="100"
                y="90"
                textAnchor="middle"
                fill="#111827"
                fontSize="32"
                fontWeight={700}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                90%
              </motion.text>
              <motion.text
                x="100"
                y="110"
                textAnchor="middle"
                fill="#6B7280"
                fontSize="13"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Estan satisfechos
              </motion.text>
              <motion.text
                x="100"
                y="126"
                textAnchor="middle"
                fill="#6B7280"
                fontSize="13"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                de la experiencia
              </motion.text>
            </>
          );
        })()}
      </svg>
    </div>
  );
}
