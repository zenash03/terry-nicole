"use client"
import { DribbbleLogoIcon, EnvelopeIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import React from 'react'

type Props = {}

export default function ContactSection({}: Props) {
    const listImage = [
        "/image/image 1.jpg",
        "/image/image 2.jpg",
        "/image/image 3.jpg",
        "/image/image 4.jpg",
        "/image/image 5.jpg",
        "/image/image 6.jpg",
        "/image/image 7.jpg",
        "/image/image 8.jpg",
        "/image/image 9.jpg",
    ];

  return (
    <div className="relative">
        <div className="max-w-[90rem] mx-auto py-20 min-h-full h-screen">
            <div className="flex flex-col items-center gap-2">
                <p className="text-slate-900 uppercase tracking-widest font-serif text-sm text-center mb-4">Last but not least</p>
                <p className="text-slate-900 capitalize font-heading text-6xl font-bold text-center mb-6">Let's Connect</p>
                <p className="text-slate-600 font-body w-1/3 text-center">
                    I'm excited to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out.
                </p>

                <div className="flex flex-row gap-12 flex-wrap mt-8">
                    <div className="text-center flex items-center gap-2">
                        <InstagramLogoIcon size={28} />
                        <p className="text-slate-800 font-body tracking-wide font-bold uppercase text-s">@terrynicole</p>
                    </div>
                    <div className="text-center flex items-center gap-2">
                        <YoutubeLogoIcon size={28} />
                        <p className="text-slate-800 font-body tracking-wide font-bold uppercase text-sm">Terry Nicole</p>
                    </div>
                    <div className="text-center flex items-center gap-2">
                        <DribbbleLogoIcon size={28} />
                        <p className="text-slate-800 font-body tracking-wide font-bold uppercase text-sm">@terrynicole</p>
                    </div>
                    <div className="text-center flex items-center gap-2">
                        <EnvelopeIcon size={28} />
                        <p className="text-slate-800 font-body tracking-wide font-bold uppercase text-sm">hello@terrynicole.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex absolute -bottom-10 left-0">
            {Array.from(listImage).map((_, i) => {
                const width = 180 + Math.random() * 40; // 180–220px
                const height = 200 + Math.random() * 50; // 200–250px
                const rotation = Math.random() * 12 - 6; // -6° to 6°
                const scale = 0.95 + Math.random() * 0.08; // 0.95–1.03
                const offsetX = Math.random() * 12 - 6; // -6px to 6px
                const offsetY = Math.random() * 12 - 6; // -6px to 6px

                return (
                <div
                    key={i}
                    className="bg-slate-200 shadow-md hover:shadow-lg transition-transform duration-300"
                    style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `rotate(${rotation}deg) scale(${scale})`,
                    marginLeft: `${offsetX}px`,
                    marginTop: `${offsetY}px`,
                    }}
                >
                    <img
                    src={listImage[i]}
                    alt={`image ${i + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                )
            })}
        </div>
    </div>
  )
}