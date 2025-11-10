export default function Feature() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">Características</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-4">
                        Beneficios de Nuestra IA de Selección
                    </h2>

                    <div className="space-y-8 py-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-lg pt-3">Reducción de riesgos y rotación</p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-lg pt-3">Ahorro de tiempo y escala</p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-lg pt-3">Talento filtrado</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6">
                    <img 
                        src="https://intercompras.com/blog/wp-content/uploads/2024/05/la-computadora-perfecta-para-tu-hogar-u-oficina.webp" 
                        alt="Evaluación IA" 
                        className="rounded-2xl shadow-lg w-full max-w-md object-cover" 
                    />
                    <p className="text-gray-700 text-center leading-relaxed max-w-md">
                        Acceda a Talento por Potencial, No por Papel. Nuestra IA evalúa Actitud, Habilidades Reales y Liderazgo en construcción, abriendo su pool a candidatos que la competencia ignora.
                    </p>
                </div>
            </div>
        </section>
    )
}