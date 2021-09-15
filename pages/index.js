import Head from 'next/head'
import About from '../components/about'
import Banner from '../components/banner'
import ComingSoon from '../components/comingSoon'
import Contact from '../components/contact'
import Description from '../components/description'
import Footer from '../components/footer'
import MarketPlace from '../components/marketPlace'
import Partners from '../components/partners'

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <Head>
        <title>Momentables</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Banner />
      <Description />
      <Partners />
      <About />
      <ComingSoon />
      <MarketPlace />
      <Contact />
      <Footer />
    </div>
  )
}
