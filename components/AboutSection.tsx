import React from 'react'

type Props = {}

export default function AboutSection({}: Props) {
  return (
    <div className="w-full min-h-screen mx-auto my-20 p-4">
        <div className='max-w-[90rem] mx-auto py-20'>
            <h2 className="font-heading text-4xl font-semibold mb-4">About Me</h2>
            <span className="block w-20 h-1 bg-red-500 mb-4"></span>
            <div className="grid grid-cols-2 gap-8 py-8">
                <div className="w-full h-full relative">
                    <div className="">
                        <div className="w-full flex items-center justify-center">
                            <div className="w-3/5 h-full aspect-[14/16] bg-white p-8 flex flex-col rounded-sm shadow-lg -rotate-3">
                                <div className="w-full h-4/5 bg-gray-500 rounded-sm"></div>
                                <div className="w-full h-1/5 py-4 flex items-center justify-center">
                                    <p className="text-center font-heading italic text-2xl">Me</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className='flex flex-col justify-center gap-4 text-lg'>
                        <p className="font-heading text-3xl font-semibold">Hello There, I'm Terry Nicole</p>
                        <p className="font-roboto text-slate-800">
                            I'm a photographer based in New York City. I specialize in portrait and lifestyle photography, capturing authentic moments and emotions. With over 10 years of experience, I've had the privilege of working with diverse clients, from individuals to brands. My approach is collaborative and personalized, ensuring each session reflects the unique personality and story of my subjects. When I'm not behind the camera, I enjoy exploring the city, seeking inspiration from its vibrant culture and dynamic energy.
                        </p>
                        <p className="font-roboto text-slate-800">
                            Whether you're looking for a professional headshot, family portraits, or creative lifestyle shots, I'm here to help you create lasting memories. Let's work together to bring your vision to life!
                        </p>
                        <p className="font-roboto text-slate-800">
                            Feel free to reach out for inquiries or to book a session. I look forward to capturing your special moments! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}