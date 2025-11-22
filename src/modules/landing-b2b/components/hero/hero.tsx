import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10">
            
            {/* Contenido de texto */}
            <motion.div 
              className="px-6 md:px-10 py-10 md:py-14"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="space-y-4 md:space-y-6 text-gray-900">
                
                <motion.p 
                  className="text-indigo-600 text-sm font-semibold tracking-wide uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Solución IA en Selección
                </motion.p>
                
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  ¿Cansado de filtrar currículums que ocultan a los
                  <br className="hidden sm:block" />
                  <span className="font-extrabold"> LÍDERES del mañana?</span>
                </motion.h1>

                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl leading-snug"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Deje de contratar <span className="text-gray-500">experiencia pasada</span>. Empiece
                  <br className="hidden sm:block" />
                  a invertir en <span className="font-extrabold">potencial futuro</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.a
                    href="#demo"
                    className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-white text-sm sm:text-base font-medium shadow-sm bg-indigo-500 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-all duration-300 ease-in-out"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Solicite su demo
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Imagen */}
            <motion.div 
              className="relative pl-4 pr-4 md:pr-8 md:pl-0 py-6 md:py-0 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] md:aspect-[5/4] max-w-xl md:max-w-none mx-auto">
                <motion.img
                  src="https://img.freepik.com/foto-gratis/hombre-que-sostiene-varias-notas-universidad_1368-3656.jpg"
                  alt="Profesional estresado con pilas de documentos"
                  className="w-full h-full object-contain object-center drop-shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}