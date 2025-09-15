"use client"
import { InstagramLogoIcon } from '@phosphor-icons/react'
import React from 'react'

type Props = {}

export default function HeroSection({}: Props) {
  return (
    <div className="max-w-[90rem] mx-auto py-16 min-h-full">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="w-full h-full relative flex justify-end">
                    <div className="w-2/3 aspect-[3/4] rounded-tr-full rounded-tl-full bg-gray-400 relative">
                        <div className="w-20 h-20 rounded-full bg-red-400 absolute -top-4 -right-4"></div>
                        <div className="w-40 h-10 rounded-lg bg-red-400 absolute -bottom-0 translate-y-1/2 left-1/4 -translate-x-1/2"></div>
                    </div>
                    <div className="absolute top-10 left-4">
                        <p className=" font-heading font-bold text-8xl w-20 leading-tight">Terry Nicole</p>
                    </div>
                    <div className="absolute top-3/4 left-4">
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-10 w-1.5 bg-red-500"></div>
                                <p className="left-4 text-lg font-body">Photographer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full h-[80vh] relative flex flex-col justify-start">
                    <div className="flex justify-end w-full p-14">
                        <div className="w-2/3 flex flex-col font-heading text-3xl font-medium gap-4 relative">
                            <p className="text-slate-800 text-left">My Camera is a</p>
                            <p className="text-orange-500 text-right font-semibold">Sketchbook for my soul</p>
                            <p className="absolute -top-4 -left-8 text-4xl text-slate-800 font-serif">"</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-row gap-12 items-start">
                            <div className="flex-1">
                                <h2 className="font-heading text-4xl font-semibold mb-4">Let's Capture Your Moments</h2>
                                <span className="block w-20 h-1 bg-orange-500 mb-4"></span>
                                <p className="font-body text-lg text-slate-600 mb-4">
                                    I am Terry Nicole, a passionate photographer dedicated to capturing the beauty of life's moments. With a keen eye for detail and a love for storytelling through images, I strive to create photographs that evoke emotions and preserve memories.
                                </p>
                                <div className="my-4 border-t border-slate-300"></div>
                                <button className="px-6 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition uppercase tracking-wide rounded shadow">
                                    Contact me
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-center relative z-0">
                                <div className="top-0 left-0 absolute z-0 w-40 h-56 bg-slate-100 rounded-lg shadow mt-0"></div>
                                <div className="top-20 left-20 absolute z-10 w-40 h-56 bg-slate-200 rounded-lg shadow mt-0"></div>
                                <div className="top-40 left-40 absolute z-0 w-40 h-56 bg-slate-100 rounded-lg shadow mt-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}