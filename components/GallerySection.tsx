'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GallerySection() {
  const triggerRef = useRef<HTMLDivElement>(null)
  const galleryItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const trigger = triggerRef.current
    const galleryItems = galleryItemsRef.current
    if (!trigger || !galleryItems) return

    // Calculate total width of all gallery items including gaps
    const items = galleryItems.children as HTMLCollectionOf<HTMLDivElement>
    let totalItemsWidth = 0
    Array.from(items).forEach(item => {
      totalItemsWidth += item.offsetWidth
    })
    const gapWidth = 32 * (items.length - 1) // 32px gap (gap-8 in Tailwind = 2rem = 32px)
    totalItemsWidth += gapWidth

    // Calculate horizontal scroll distance
    const totalScrollWidth = totalItemsWidth - window.innerWidth

    // Set the trigger height to control scroll duration
    // Add window.innerHeight to allow pinning and smooth scroll
    gsap.set(trigger, {
      height: totalScrollWidth + window.innerHeight,
    })

    const tween = gsap.fromTo(
      galleryItems,
      { x: window.innerWidth }, // start off-screen right
      {
        x: -totalScrollWidth - 600, // end with last item aligned left
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: `+=${totalScrollWidth}`,
          scrub: 0.3,
          pin: true,
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
    <div ref={triggerRef} className="relative w-full max-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full p-20 -rotate-3 bg-white">
        <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-4xl font-heading text-slate-700 font-bold z-10">
          My Gallery
        </h2>

        <div className="gallery-items flex flex-nowrap gap-8 mt-24" ref={galleryItemsRef}>
          <div className="flex-shrink-0 w-96 h-96 bg-slate-200"></div>
          <div className="flex-shrink-0 w-96 h-96 bg-slate-300"></div>
          <div className="flex-shrink-0 w-96 h-96 bg-slate-400"></div>
          <div className="flex-shrink-0 w-96 h-96 bg-slate-500"></div>
          <div className="flex-shrink-0 w-96 h-96 bg-slate-600"></div>
          <div className="flex-shrink-0 w-96 h-96 bg-slate-700"></div>
          <div className="flex-shrink-0 w-96 h-96 bg-slate-800"></div>
        </div>
      </div>
    </div>
  )
}
