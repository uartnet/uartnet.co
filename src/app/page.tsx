// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import { labels } from '@/config/labels'
import { user } from '@/config/user'
import Image from 'next/image'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

function About({ about }: { about: typeof user.about }) {
  return (
    <section>
      <h2 className="text-lg leading-none font-mono text-gray-900">about me</h2>
      <p className="text-base leading-5 text-gray-600 pt-6">
        {about}
      </p>
    </section>
  )
}

function Connect({ social }: { social: typeof user.social }) {
  return (
    <section>
      <h2 className="text-lg leading-none font-mono text-gray-900">connect</h2>
      <ul role="list" className="flex flex-col space-y-8 pt-6">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {social.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex items-center justify-center p-0">
              <item.icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
              <span className="sr-only">{item.name}</span>
            </a>
          ))}
        </div>
      </ul>
    </section>
  )
}

function Articles({ title, articles }: { title: string, articles: typeof user.products | typeof user.tools }) {
  return (
    <article>
      <h2 className="text-lg leading-none font-mono text-gray-900">{title}</h2>
      <ul role="list" className="flex flex-col space-y-8 pt-6">
        {articles.map((article) => (
          <li key={article.name} className="flex items-center justify-between gap-x-6">
            <a className="min-w-0" href={article.href}>
              <div className="flex items-start items-center gap-x-3">
                <p className="text-base leading-none font-mono underline underline-offset-2 text-gray-900">{article.name}</p>
                {article.labels.map((label) => (
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
                <p className="text-base leading-5 text-gray-600" dangerouslySetInnerHTML={{ __html: article.description }} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </article>
  )
}

function Products({ products }: { products: typeof user.products }) {
  return (
    <Articles title="featured products" articles={products} />
  )
}

function Tools({ tools }: { tools: typeof user.tools }) {
  return (
    <Articles title="free tools" articles={tools} />
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
      <div className="flex flex-col space-y-16 py-12">
        <header>
          <div className="space-y-6">
            <Image src={user.avatar.src} alt={user.avatar.alt} width={80} height={80} className="rounded-full bg-white" />
            <div className="flex flex-col space-y-1">
              <span className="text-xl leading-none font-mono text-gray-900">{user.name}</span>
              <span className="text-base leading-5 text-gray-600">{user.description}</span>
            </div>
          </div>
        </header>
        <main>
          <div className="flex flex-col space-y-16">
            <About about={user.about} />
            <Connect social={user.social} />
            <Products products={user.products} />
            <Tools tools={user.tools} />
          </div>
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
