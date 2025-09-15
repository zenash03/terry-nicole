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
                    <div className="absolute w-full top-20 left-20">
                        <div className="w-full ">
                            <div className="w-3/5 h-full aspect-[14/16] bg-white p-8 flex flex-col rounded-sm shadow-lg -rotate-12">
                                <div className="w-full h-4/5 bg-gray-500 rounded-sm"></div>
                                <div className="w-full h-1/5 py-4 flex items-center justify-center">
                                    <p className="text-center font-heading italic text-2xl">Me</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}