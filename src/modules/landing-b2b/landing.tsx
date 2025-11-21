"use client";
import Header from "./components/header/header";
import Feature from "./components/feature/feature";
import Hero from "./components/hero/hero";
import Video from "./components/video/video";
import Analitics from "./components/analitics/analitics";
import Footer from "./components/footer/footer";
import CTA from "./components/cta/cta";
import Carrousel from "./components/carrousel/carrousel";


export default function Landing() {
    return ( 
        <>
            <Header />

            <Hero />

            <Feature />

            <div className="py-16">
                <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
                    Empresas Aliadas
                </h2>
                
                <p className="text-center text-slate-600 mb-4">
                    Conoce a las empresas que confían en Laboral AI.
                </p>
                
                <Carrousel direction="rtl" />
                
                <Carrousel direction="ltr" />
            </div>

            <div className="py-8">
                <h2 className="text-center text-gray-700 mb-4 text-2xl">“Laboral.AI: La IA que desbloquea el liderazgo”</h2>
            </div>

            <Analitics />

            <Video />

            <CTA />

            <Footer />
        </>
    );
}
