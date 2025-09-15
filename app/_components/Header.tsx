"use client"

import { ListIcon } from '@phosphor-icons/react'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="w-full p-4 font-heading">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[90rem] mx-auto">
      <div className="">
        <h1>Terry Nicole Photography</h1>
      </div>
      <div className="flex-1 flex justify-end items-center gap-4">
        <nav className="px-10 flex gap-8 my-4 md:my-0">
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        </nav>
        <div className="">
          <ListIcon size={28} />
        </div>
      </div>
      </div>
    </div>
  )
}