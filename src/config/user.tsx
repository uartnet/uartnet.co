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
    tools: {
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
            name: "rstream",
            description: "rstream delivers <span class=\"underline\">state-of-the-art networking solutions</span>, covering real-time connectivity and end-to-end zero-trust security. Designed to meet enterprise data sovereignty requirements, it provides secure, scalable access to otherwise unreachable online resources.",
            href: "https://rstream.io",
            labels: ["WIP"],
        },
    ],
    tools: [
        {
            name: "share files from command-line",
            description: "Share files directly from your terminal. Files are <span class=\"underline\">end-to-end encrypted</span> and accessible via the download link. The download link expires after 24 hours. Transfer up to 1 GB. Free. No account required.",
            href: "https://rstream.io/tools/file-sharing",
            labels: [],
        },
        {
            name: "linux toolchains for cross-compilation",
            description: "Cross-compile software using our pre-built toolchains for Linux for a variety of architectures.",
            href: "https://rstream.io/tools/linux-toolchains",
            labels: [],
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
