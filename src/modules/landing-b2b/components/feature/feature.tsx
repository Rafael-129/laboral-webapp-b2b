"use client";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const features = [
    {
        title: "Reducción de Riesgos",
        description:
            "Tome decisiones más claras y confiables, basadas en información que impulsa mejores resultados.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        title: "Ahorro de Tiempo",
        description: "Minimice los tiempos de revisión manual gracias a un sistema inteligente que analiza y destaca a los candidatos adecuados.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Talento Filtrado",
        description:
            "Encuentre claridad en medio de la información y elija siempre con mayor precisión.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
        color: "bg-purple-100 text-purple-600",
    },
];

export default function Feature() {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-indigo-50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmNWY1ZjYiLz4KICA8cGF0aCBkPSJNMzAgMzBMMzAgMzBaIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K')] opacity-10" />

            <div className="container mx-auto px-4 relative z-10">

                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Transforme su forma de contratar con IA
                    </h2>
                    <p className="text-xl text-gray-600">
                        Descubra cómo nuestra plataforma revoluciona la selección de personal con tecnología de vanguardia
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">

                    {/* Features con animación fade in mejorada */}
                    <motion.div
                        className="space-y-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
                                whileHover={{
                                    y: -4,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Imagen con animación */}
                    {/* MOBILE: animación fade-in-up */}
                    <motion.div
                        className="relative h-full md:hidden"   // solo visible en mobile
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="sticky top-24 flex items-center h-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80"
                                    alt="Dashboard de análisis de candidatos"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* DESKTOP: animación fade-in from right */}
                    <motion.div
                        className="relative h-full hidden md:block"   // solo visible en desktop/tablet
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="sticky top-24 flex items-center h-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80"
                                    alt="Dashboard de análisis de candidatos"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}