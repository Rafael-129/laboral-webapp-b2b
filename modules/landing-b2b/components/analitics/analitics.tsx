import React from "react";

const AnalyticsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Columna Izquierda - Texto */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Impacto y Métricas
          </h2>
          <p className="text-gray-700 mb-8">
            Más de <span className="font-semibold text-indigo-600">10,000 usuarios evaluados</span> con una
            precisión validada de <span className="font-semibold">95%</span> en habilidades y ajuste cultural.
            Nuestros clientes reportan una <span className="font-semibold">reducción del 85% en tiempos de selección</span>
            y una mejora sostenida en la calidad de contratación.
          </p>

          {/* Métricas */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-indigo-600">+95%</p>
              <p className="text-gray-600 text-sm">
                Precisión en la evaluación de habilidades
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600">+10K</p>
              <p className="text-gray-600 text-sm">
                Candidatos evaluados con IA
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600">85%</p>
              <p className="text-gray-600 text-sm">
                Reducción en tiempo de selección
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600">120+</p>
              <p className="text-gray-600 text-sm">
                Empresas asociadas
              </p>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Imágenes */}
        <div className="flex justify-center flex-wrap gap-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4435/4435924.png"
            alt="Gráfico de crecimiento"
            className="w-40 md:w-48 lg:w-56 rounded-xl shadow-md"
          />
          <img
            src="https://media.istockphoto.com/id/1446021190/es/vector/plantilla-de-infograf%C3%ADa-de-gr%C3%A1fico-circular-c%C3%ADrculo-gr%C3%A1fico-dividido-en-4-segmentos.jpg?s=612x612&w=0&k=20&c=3G0bhQfoet_gel8rc2r527bBJXHbzpVDmV-S0FcIK8g="
            alt="Gráfico circular de métricas"
            className="w-40 md:w-48 lg:w-56 rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
