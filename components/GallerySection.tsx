'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    const galleryItems = gallery.querySelector('.gallery-items') as HTMLElement | null
    if (!galleryItems) return

    const totalScrollWidth = galleryItems.scrollWidth - gallery.offsetWidth

    const tween = gsap.fromTo(
      galleryItems,
      { x: 2000 },
      {
        x: -totalScrollWidth - 500,
        ease: 'none',
        scrollTrigger: {
          trigger: gallery,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <div
  className="relative w-full h-screen p-20 -rotate-3 bg-white overflow-hidden hide-scrollbar"
  ref={galleryRef}
>
  <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-4xl font-heading text-slate-700 font-bold z-10">
    My Gallery
  </h2>

  <div className="gallery-items flex flex-nowrap gap-8 mt-24">
    <div className="flex-shrink-0 w-96 h-96 bg-slate-200"></div>
    <div className="flex-shrink-0 w-96 h-96 bg-slate-300"></div>
    <div className="flex-shrink-0 w-96 h-96 bg-slate-400"></div>
    <div className="flex-shrink-0 w-96 h-96 bg-slate-500"></div>
    <div className="flex-shrink-0 w-96 h-96 bg-slate-600"></div>
    <div className="flex-shrink-0 w-96 h-96 bg-slate-700"></div>
    <div className="flex-shrink-0 w-96 h-96 bg-slate-800"></div>
  </div>
</div>

  )
}
