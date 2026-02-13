import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import UseCases from '@/components/sections/UseCases'
import TechStack from '@/components/sections/TechStack'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>ECA - Extended Cellular Analyzer | F2G-SOLUTIONS</title>
        <meta
          name="description"
          content="Professional cellular network analysis tool by F2G-SOLUTIONS. Real-time LTE, 5G NR, WCDMA monitoring with GPS mapping, KPI extraction, and protocol debugging."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/f2g_logo.png" />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
          <HowItWorks />
          <UseCases />
          <TechStack />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
