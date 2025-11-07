export default function Hero() {
    return (
      <section className="w-full py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10">
              <div className="px-6 md:px-10 py-10 md:py-14">
                <div className="space-y-4 md:space-y-6 text-gray-900">
                  <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">Solución IA en Selección</p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                    ¿Cansado de filtrar currículums que ocultan a los
                    <br className="hidden sm:block" />
                    <span className="font-extrabold"> LÍDERES del mañana?</span>
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl leading-snug">
                    Deje de contratar <span className="text-gray-500">experiencia pasada</span>. Empiece
                    <br className="hidden sm:block" />
                    a invertir en <span className="font-extrabold">potencial futuro</span>
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                    Solicite su Demo Personalizada y descubra cómo nuestra IA identifica a los Líderes
                    Empleables con el mejor fit cultural y de crecimiento para su organización.
                  </p>

                  <div>
                    <a
                      href="#demo"
                      className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-white text-sm sm:text-base font-medium shadow-sm bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-colors"
                    >
                      Es el momento
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative pl-4 pr-4 md:pr-8 md:pl-0 py-6 md:py-0">
                <div className="relative aspect-[4/3] md:aspect-[5/4] max-w-xl md:max-w-none mx-auto">
                  <img
                    src="https://img.freepik.com/foto-gratis/hombre-que-sostiene-varias-notas-universidad_1368-3656.jpg"
                    alt="Profesional estresado con pilas de documentos"
                    className="w-full h-full object-contain object-center drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }