"use client";
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import type { LenisRef } from 'lenis/react';

function SmoothScrolling({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }
  
        gsap.ticker.add(update)
  
        return () => gsap.ticker.remove(update)
    }, [])

    const lenis = useLenis((lenis) => {
        // called every scroll
        console.log(lenis)
    })
  
    return (
        <ReactLenis  root ref={lenisRef}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;