// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import { faGithub, faXTwitter, faReddit, faProductHunt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export const user: {
    name: string
    description: string
    about: string
    avatar: {
        src: string
        alt: string
    }
    products: {
        name: string
        description: string
        href: string
        labels: string[]
    }[]
    social: {
        name: string
        href: string
        icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => ReactElement
    }[]
} = {
    name: "@uartnet",
    description: "software engineer",
    about: "I'm @uartnet, a Software Engineer focused on product development and deeply passionate about networking. I strive to create tech solutions that enrich people's lives and improve connectivity.",
    avatar: {
        src: "/uartnet.png",
        alt: "@uartnet",
    },
    products: [
        {
            name: "nouvel",
            description: "nouvel saves developers weeks to months of time by offering a <span class=\"underline\">comprehensive Next.js boilerplate designed for enterprise grade solutions</span>. A single payment provides lifetime code access to features including authentication, APIs, payment systems, multi tenancy, administration console, custummer support, and more. Highly customizable, it serves as a rapid foundation for scaling any online business.",
            href: "https://nouvel.dev",
            labels: ["WIP"],
        },
        {
            name: "rstream",
            description: "rstream delivers <span class=\"underline\">state-of-the-art networking solutions</span>, covering real-time connectivity and end-to-end zero-trust security. Designed to meet enterprise data sovereignty requirements, it provides secure, scalable access to otherwise unreachable online resources.",
            href: "https://rstream.io",
            labels: ["WIP"],
        },
    ],
    social: [
        {
            name: "x",
            href: "https://x.com/uartnet",
            icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => (
                <FontAwesomeIcon {...props} icon={faXTwitter} />
            ),
        },
        {
            name: "github",
            href: "https://github.com/uartnet",
            icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => (
                <FontAwesomeIcon {...props} icon={faGithub} />
            ),
        },
        {
            name: "product-hunt",
            href: "https://www.producthunt.com/@uartnet",
            icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => (
                <FontAwesomeIcon {...props} icon={faProductHunt} />
            ),
        },
        {
            name: "reddit",
            href: "https://www.reddit.com/user/uartnet",
            icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => (
                <FontAwesomeIcon {...props} icon={faReddit} />
            ),
        },
    ],
}
