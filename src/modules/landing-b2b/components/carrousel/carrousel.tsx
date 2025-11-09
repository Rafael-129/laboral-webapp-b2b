"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

type Direction = "rtl" | "ltr";

type Props = {
    direction: Direction;
    className?: string;
};

const brandsLTR = [{ src: "https://logo.clearbit.com/stripe.com", alt: "Stripe" }, { src: "https://logo.clearbit.com/airbnb.com", alt: "Airbnb" }, { src: "https://logo.clearbit.com/uber.com", alt: "Uber" }, { src: "https://logo.clearbit.com/hubspot.com", alt: "HubSpot" }, { src: "https://logo.clearbit.com/vercel.com", alt: "Vercel" },];
const brandsRTL = [{ src: "https://logo.clearbit.com/slack.com", alt: "Slack" }, { src: "https://logo.clearbit.com/atlassian.com", alt: "Atlassian" }, { src: "https://logo.clearbit.com/netflix.com", alt: "Netflix" }, { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft" }, { src: "https://logo.clearbit.com/spotify.com", alt: "Spotify" }, { src: "https://logo.clearbit.com/shopify.com", alt: "Shopify" },]

export default function Carrousel({ direction, className = "" }: Props) {
    const base = direction === "rtl" ? brandsRTL : brandsLTR;

    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [segmentWidth, setSegmentWidth] = useState(0);

    useEffect(() => {
        const measureWidth = () => {
            if (!containerRef.current) return;
            const firstSegment = containerRef.current.querySelector('[data-segment="0"]');
            if (firstSegment) {
                const width = firstSegment.getBoundingClientRect().width;
                setSegmentWidth(width);

                if (direction === "ltr") {
                    x.set(0);
                } else {
                    x.set(-width);
                }
            }
        };

        measureWidth();
        window.addEventListener("resize", measureWidth);

        const timer = setTimeout(measureWidth, 100);

        return () => {
            window.removeEventListener("resize", measureWidth);
            clearTimeout(timer);
        };
    }, [base, direction, x]);

    const SPEED = 60;

    useAnimationFrame((_, delta) => {
        if (!segmentWidth || segmentWidth === 0) return;

        const increment = (SPEED * delta) / 1000;
        const currentX = x.get();

        if (direction === "ltr") {
            const newX = currentX - increment;

            if (newX <= -segmentWidth) {
                x.set(newX + segmentWidth);
            } else {
                x.set(newX);
            }
        } else {
            const newX = currentX + increment;

            if (newX >= 0) {
                x.set(newX - segmentWidth);
            } else {
                x.set(newX);
            }
        }
    });

    return (
        <section className={`py-12 from-slate-50 to-slate-100 ${className}`}>
            <div className="max-w-7xl mx-auto px-4">

                <div className="relative overflow-hidden py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-20 from-slate-100 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 from-slate-100 to-transparent z-10 pointer-events-none" />

                    <motion.div
                        ref={containerRef}
                        className="flex items-center will-change-transform grayscale"
                        style={{ x }}
                    >
                        {[0, 1, 2].map((segmentIndex) => (
                            <div
                                key={segmentIndex}
                                data-segment={segmentIndex}
                                className="flex items-center gap-10 flex-shrink-0"
                                style={{ paddingRight: segmentIndex < 2 ? '2.5rem' : '0' }}
                            >
                                {base.map((item, idx) => (
                                    <div
                                        key={`${segmentIndex}-${item.alt}-${idx}`}
                                        className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 w-36 sm:w-40 h-16 flex items-center justify-center bg-white "
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="max-h-12 w-auto object-contain will-change-transform"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}