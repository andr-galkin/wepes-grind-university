'use client'

import React from 'react'
import { Ballet } from 'next/font/google'
import Navigation from '../components/Navigation/Navigation'
import BodyText from '../components/Text/BodyText'

const ballet = Ballet({
    subsets: ['latin'],
    weight: ['400'],
})

const Page = ({}) => {
    return (
        <div>
            <Navigation activeSection="about" />
            <div className="mt-5 xs:mt-56 sm:mt-56">
                <BodyText
                    size="medium"
                    color="text-black-100"
                    className={`text-center ${ballet.className} font-ballet`}
                >
                    <span
                        style={{
                            WebkitTextFillColor: 'white',
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: 'black',
                        }}
                    >
                        About
                    </span>
                </BodyText>
            </div>
            <div className="px-10 py-20">
                <BodyText
                    size="medium"
                    className="font-bold italic uppercase"
                    color="text-black-100"
                >
                    Wepes University -
                </BodyText>
                <BodyText
                    size="small"
                    className="font-light italic uppercase mt-6"
                    color="text-black-100"
                >
                    a conceptual community created by Kyiv youth to generate and
                    realize ideas in various spheres based on individual
                    experience, aesthetic and general views observing a certain
                    list of rules. An example of an initiative that unites youth
                    around common interests and promotes the development of
                    creative potential in the urban environment.
                </BodyText>
            </div>
            <div className="px-10 py-20">
                <BodyText
                    size="medium"
                    className="font-bold italic uppercase"
                    color="text-black-100"
                >
                    Contact/Order
                </BodyText>
                <BodyText
                    size="small"
                    className="font-light italic uppercase mt-6"
                    color="text-black-100"
                >
                    INSTAGRAM -{' '}
                    <a
                        href="https://www.instagram.com/wepesuniversity?igsh=MWNjaWt3ZGZ1aHF1Mw%3D%3D&utm_source=qr"
                        className="underline-offset-4 underline"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        wepesuniversity
                    </a>
                    <br />
                    Telegram -{' '}
                    <a
                        href="https://t.me/wepesgrinduniversity"
                        className="underline-offset-4 underline"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        wepesgrinduniversity
                    </a>
                </BodyText>
            </div>
            <div className="px-10 py-20">
                <BodyText
                    size="medium"
                    className="font-bold italic uppercase"
                    color="text-black-100"
                >
                    Custom Support
                </BodyText>
                <BodyText
                    size="small"
                    className="font-light italic uppercase mt-6"
                    color="text-black-100"
                >
                    ALL SALES ARE FINAL.
                    <br />
                    <br /> We Do Not Offer Returns or Exchanges for Anything.
                    Refer to the size charts provided with each product before
                    making your purchase.
                    <br />
                    <br />
                    Shipping anywhere except ruzzia and belarus.
                    <br />
                    <br />
                    Shipping time depends on your country.
                    <br />
                    <br />
                    Shipping time for Ukraine 3-6 days.
                </BodyText>
            </div>
        </div>
    )
}

export default Page
