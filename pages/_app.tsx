import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className="p-4 bg-slate-600 text-slate-100 space-x-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </header>
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
