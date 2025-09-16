"use client"
import { DribbbleLogoIcon, EnvelopeIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import React from 'react'

type Props = {}

export default function ContactSection({}: Props) {
  return (
    <div>
        <div className="max-w-[90rem] mx-auto py-20 min-h-full">
            <div>
                <p>Last but not least</p>
                <p>Let's Connect</p>
                <p>
                    I'm excited to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out.
                </p>

                <div>
                    <div>
                        <InstagramLogoIcon size={32} />
                        <p>@terrynicole</p>
                    </div>
                    <div>
                        <YoutubeLogoIcon size={32} />
                        <p>Terry Nicole</p>
                    </div>
                    <div>
                        <DribbbleLogoIcon size={32} />
                        <p>@terrynicole</p>
                    </div>
                    <div>
                        <EnvelopeIcon size={32} />
                        <p>hello@terrynicole.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}