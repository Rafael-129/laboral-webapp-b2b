export default function Feature() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">Características</p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Beneficios de Nuestra IA de Selección
                    </h2>
                    <p className="text-gray-700 mb-10">
                        Seleccione talento por <span className="font-medium">potencial y ajuste cultural</span>, no solo por antecedentes. Nuestro modelo de IA analiza señales de actitud, habilidades demostrables y liderazgo para priorizar a los candidatos con mayor probabilidad de éxito y permanencia.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Reducción de Riesgos y Rotación</h3>
                                <p className="text-gray-600 text-sm">Identifique candidatos con estabilidad y compatibilidad cultural.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Ahorro de Tiempo y Escala</h3>
                                <p className="text-gray-600 text-sm">Automatice procesos de selección y enfoque su equipo en decisiones estratégicas.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Talento Filtrado</h3>
                                <p className="text-gray-600 text-sm">Nuestra IA filtra por actitud, habilidades y potencial de crecimiento.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src="https://intercompras.com/blog/wp-content/uploads/2024/05/la-computadora-perfecta-para-tu-hogar-u-oficina.webp" alt="Evaluación IA" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
                </div>
            </div>
        </section>

    )
}
