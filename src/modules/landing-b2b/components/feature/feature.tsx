export default function Feature() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">Características</p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-4">
                        Beneficios de Nuestra IA de Selección
                    </h2>

                    <div className="space-y-6 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
                            <div className="flex flex-col items-center gap-4">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjPzihXgDZY5aJ25bM_tqBESz9L0hQT6QsgtOgofoOYCnfzLc"
                                    alt="Vista 1"
                                    className="rounded-2xl shadow-lg w-full max-w-[120px] aspect-square object-cover"
                                />
                                <p>Reducción de riesgos y rotación</p>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/752/752247.png"
                                    alt="Vista 2"
                                    className="rounded-2xl shadow-lg w-full max-w-[120px] aspect-square object-cover"
                                />
                                <p>Ahorro de tiempo y escala</p>
                            </div>
                            <div className="flex flex-col items-center md:col-span-2 gap-4">
                                <img
                                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/1200/external-Conversion-business-management-flatart-icons-outline-flatarticons.jpg"
                                    alt="Vista principal"
                                    className="rounded-2xl shadow-lg w-full max-w-[120px] aspect-square object-cover"
                                />
                                <p>Talento filtrado</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                    <img src="https://intercompras.com/blog/wp-content/uploads/2024/05/la-computadora-perfecta-para-tu-hogar-u-oficina.webp" alt="Evaluación IA" className="rounded-2xl shadow-lg w-[360px] max-w-md object-cover" />
                    <p className="text-gray-700 text-center">Acceda a Talento por Potencial, No por Papel. Nuestra IA evalúa Actitud, Habilidades Reales y Liderazgo en construcción, abriendo su pool a candidatos que la competencia ignora.</p>
                </div>
            </div>
        </section>

    )
}
