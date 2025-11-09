"use client";
import Header from "./components/header/header";
import Feature from "./components/feature/feature";
import Hero from "./components/hero/hero";
import Video from "./components/video/video";
import Analitics from "./components/analitics/analitics";
import Footer from "./components/footer/footer";
import CTA from "./components/cta/cta";
import Carrousel from "./components/carrousel/carrousel";

type Props = {
 
}

export default function Landing({}: Props) {
    return ( 
        <>
            <Header />

            <Hero />

            <Feature />

            <Analitics />

            <div className="py-16">
                <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
                    Empresas Aliadas
                </h2>
                
                <p className="text-center text-slate-600 mb-4">
                    Conoce a las empresas que confían en Laboral AI para impulsar sus contrataciones.
                </p>
                
                <Carrousel direction="rtl" />
                
                <Carrousel direction="ltr" />
            </div>

            <Video />

            <CTA />

            <Footer />
        </>
    );
}
