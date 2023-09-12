// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import type { Metadata } from 'next'

export const config: {
    metadata: Metadata
} = {
    metadata: {
        title: "@uartnet",
        description: "software engineer",
        authors: { name: "@uartnet", url: "https://x.com/uartnet" },
        creator: "@uartnet",
        robots: "index, follow",
        openGraph: {
            type: "website",
            url: "https://uartnet.co",
            title: "@uartnet",
            description: "software engineer",
            siteName: "@uartnet",
            images: [{
                url: "/uartnet.png",
            }],
        },
        twitter: { card: "summary_large_image", creator: "@uartnet", "images": "/uartnet.png" },
    }
}
