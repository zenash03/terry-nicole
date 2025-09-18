"use client"
import { CameraIcon, HighDefinitionIcon, VideoCameraIcon } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function ServiceSection({}: Props) {
    return (
        <div className="mx-auto py-20 min-h-full bg-gradient-to-b from-white via-blue-50 to-white  px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900">My Services</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Offering a wide range of creative services with years of expertise to
                    bring your vision to life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="w-full h-96 relative rounded-2xl">
                        <Image
                            src={"/take-a-picture.png"}
                            alt="image take a picture"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col items-end gap-6">
                        {[
                            {
                            icon: <CameraIcon size={64} weight="duotone" className="text-blue-500" />,
                            title: "Photography",
                            experience: "More than 10 years of experience",
                            level: "Expert",
                            badgeColor: "bg-blue-100 text-blue-700",
                            },
                            {
                            icon: <VideoCameraIcon size={64} weight="duotone" className="text-purple-500" />,
                            title: "Videography",
                            experience: "More than 5 years of experience",
                            level: "Expert",
                            badgeColor: "bg-purple-100 text-purple-700",
                            },
                        ].map((service) => (
                            <div
                            key={service.title}
                            className="flex flex-col items-center text-center w-full max-w-xs bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:scale-105 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                            >
                            <div className="w-20 h-20 flex items-center justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-1 text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{service.experience}</p>
                            <span className={`inline-block px-4 py-2 ${service.badgeColor} rounded-full text-sm font-semibold`}>
                                {service.level}
                            </span>
                            </div>
                        ))}
                        </div>

                        {/* Right column: center 1 card */}
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-col items-center text-center w-full max-w-xs bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:scale-105 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                                <div className="w-20 h-20 flex items-center justify-center rounded-full">
                                <HighDefinitionIcon size={64} weight="duotone" className="text-green-500" />
                                </div>
                                <h3 className="text-lg font-semibold mb-1 text-gray-900">Editing</h3>
                                <p className="text-sm text-gray-500 mb-2">More than 8 years of experience</p>
                                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                                Advanced
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
