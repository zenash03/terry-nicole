"use client"
import { InstagramLogoIcon } from "@phosphor-icons/react"
import React from "react"

type Props = {}

export default function HeroSection({}: Props) {
  return (
    <div className="max-w-[90rem] mx-auto py-12 px-0 sm:px-2 min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT COLUMN */}
        <div className="relative flex justify-center md:justify-end">
          <div className="w-2/3 aspect-[3/4] rounded-tr-full rounded-tl-full bg-gray-400 relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-400 absolute -top-4 -right-4"></div>
            <div className="w-28 sm:w-40 h-8 sm:h-10 rounded-lg bg-red-400 absolute -bottom-0 translate-y-1/2 left-1/4 -translate-x-1/2"></div>
          </div>

          {/* Name */}
          <div className="absolute top-6 left-2 sm:top-10 sm:left-4">
            <p className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-loose text-slate-800 mb-4">
                Terry
            </p>
            <p className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-loose text-slate-800">
                Nicole
            </p>
          </div>

          {/* Job title */}
          <div className="absolute bottom-8 left-2 sm:bottom-12 sm:left-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-1 bg-red-500"></div>
              <p className="text-base sm:text-lg font-body">Photographer</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full h-full relative flex flex-col justify-start">
          {/* Quote */}
          <div className="flex justify-end w-full sm:p-6 md:p-10 lg:p-14">
            <div className="w-full sm:w-4/5 md:w-2/3 flex flex-col font-heading text-xl sm:text-2xl md:text-3xl font-medium gap-3 sm:gap-4 relative">
              <p className="text-slate-800 text-left">My Camera is a</p>
              <p className="text-orange-500 text-right font-semibold">
                Sketchbook for my soul
              </p>
              <p className="absolute -top-4 -left-6 text-3xl sm:text-4xl text-slate-800 font-serif">
                "
              </p>
            </div>
          </div>

          {/* About & CTA */}
          <div className="p-2 sm:p-4">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                  Let&apos;s Capture Your Moments
                </h2>
                <span className="block w-16 sm:w-20 h-1 bg-orange-500 mb-4"></span>
                <p className="font-body text-base sm:text-lg text-slate-600 mb-4">
                  I am Terry Nicole, a passionate photographer dedicated to
                  capturing the beauty of life&apos;s moments. With a keen eye
                  for detail and a love for storytelling through images, I
                  strive to create photographs that evoke emotions and preserve
                  memories.
                </p>
                <div className="my-4 border-t border-slate-300"></div>
                <button className="px-6 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition uppercase tracking-wide rounded shadow">
                  Contact me
                </button>
              </div>

              {/* Floating boxes */}
              <div className="flex-1 flex items-center justify-center relative z-0">
                <div className="absolute top-0 left-0 z-0 w-28 h-40 sm:w-32 sm:h-48 md:w-40 md:h-56 bg-slate-100 rounded-lg shadow"></div>
                <div className="absolute top-10 left-10 sm:top-16 sm:left-16 z-10 w-28 h-40 sm:w-32 sm:h-48 md:w-40 md:h-56 bg-slate-200 rounded-lg shadow"></div>
                <div className="absolute top-20 left-20 sm:top-28 sm:left-28 z-0 w-28 h-40 sm:w-32 sm:h-48 md:w-40 md:h-56 bg-slate-100 rounded-lg shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
