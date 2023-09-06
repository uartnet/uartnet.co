// Copyright (C) UARTNET - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

import { labels } from '@/config/labels'
import { user } from '@/config/user'
import Image from 'next/image'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

function Projects({ projects }: { projects: typeof user.projects }) {
  return (
    <article>
      <h2 className="text-lg leading-none font-mono text-gray-900">projects</h2>
      <ul role="list" className="flex flex-col space-y-8 py-8">
        {projects.map((project) => (
          <li key={project.name} className="flex items-center justify-between gap-x-6">
            <a className="min-w-0" href={project.href}>
              <div className="flex items-start items-center gap-x-3">
                <p className="text-base leading-none font-mono underline underline-offset-2 text-gray-900">{project.name}</p>
                {project.labels.map((label) => (
                  <p
                    className={classNames(
                      labels[label],
                      'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-mono ring-1 ring-inset'
                    )}
                    key={label}
                  >
                    {label}
                  </p>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-x-2">
                <p className="text-base leading-5 text-gray-600">{project.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
      <div className="flex flex-col space-y-16 py-16">
        <header>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src={user.avatar.src} alt={user.avatar.alt} width={42} height={42} className="rounded-full bg-white" />
              <div className="flex flex-col space-y-1">
                <span className="text-lg leading-none font-mono text-gray-900">{user.name}</span>
                <span className="text-base leading-5 text-gray-600">{user.description}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {user.social.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0">
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </header>
        <main>
          <Projects projects={user.projects} />
        </main>
        <footer>
          <div className="flex items-center justify-between">
            <span className="text-lg leading-none font-mono text-gray-900">build your dreams</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
