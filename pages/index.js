import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AXOCON LABS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to AXOCON LABS" />
        <p className="description">
          Coming soon1
        </p>
      </main>

      <Footer />
    </div>
  )
}
