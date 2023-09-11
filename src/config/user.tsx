// Copyright (C) UARTNET - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

import { faGithub, faXTwitter, faReddit, faProductHunt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export const user: {
    name: string
    description: string
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
    name: '@uartnet',
    description: 'software engineer',
    avatar: {
        src: '/uartnet.png',
        alt: '@uartnet',
    },
    products: [
        {
            name: 'nouvel.dev',
            description: 'nouvel saves developers weeks to months of time by offering a <span class="underline">comprehensive Next.js boilerplate designed for enterprise grade solutions</span>. A single payment provides lifetime code access to features including authentication, APIs, payment systems, multi tenancy, administration console, custummer support, and more. Highly customizable, it serves as a rapid foundation for scaling any online business.',
            href: 'https://nouvel.dev',
            labels: ['WIP'],
        },
        {
            name: 'rstream.io',
            description: 'rstream delivers <span class="underline">state-of-the-art networking solutions</span>, covering real-time connectivity and end-to-end zero-trust security. Designed to meet enterprise data sovereignty requirements, it provides secure, scalable access to otherwise unreachable online resources.',
            href: 'https://rstream.io',
            labels: ['WIP'],
        },
    ],
    social: [
        {
            name: 'x',
            href: 'https://x.com/uartnet',
            icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => (
                <FontAwesomeIcon {...props} icon={faXTwitter} />
            ),
        },
        {
            name: 'github',
            href: 'https://github.com/uartnet',
            icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => (
                <FontAwesomeIcon {...props} icon={faGithub} />
            ),
        },
        {
            name: 'product-hunt',
            href: 'https://www.producthunt.com/@uartnet',
            icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => (
                <FontAwesomeIcon {...props} icon={faProductHunt} />
            ),
        },
        {
            name: 'reddit',
            href: 'https://www.reddit.com/user/uartnet',
            icon: (props: Omit<FontAwesomeIconProps, 'icon'>) => (
                <FontAwesomeIcon {...props} icon={faReddit} />
            ),
        },
    ],
}
