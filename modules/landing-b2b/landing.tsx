"use client";
import Header from "./components/header/header";
import Feature from "./components/feature/feature";
import Hero from "./components/hero/hero";
import Video from "./components/video/video";
import Analitics from "./components/analitics/analitics";

type Props = {
 
}

export default function Landing({}: Props) {
    return ( 
        <>
            <Header />

            <Hero />

            <Feature />

            <Analitics />

            <Video />
        </>
    );
}
