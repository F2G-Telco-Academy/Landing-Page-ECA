import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import UseCases from '@/components/sections/UseCases'
import TechStack from '@/components/sections/TechStack'
import Comparison from '@/components/sections/Comparison'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>ECA - Extended Cellular Analyzer | Professional Network Analysis Tool</title>
        <meta
          name="description"
          content="Free, open-source cellular network analysis tool for RF engineers. Real-time LTE, 5G NR, WCDMA monitoring with GPS mapping, KPI extraction, and protocol debugging."
        />
        <meta
          name="keywords"
          content="cellular analyzer, network testing, drive testing, 5G analysis, LTE monitoring, RF engineering, QXDM alternative, network KPI, protocol analyzer"
        />
        <meta name="author" content="ECA Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eca-analyzer.dev/" />
        <meta property="og:title" content="ECA - Extended Cellular Analyzer | Professional Network Analysis" />
        <meta
          property="og:description"
          content="Free, open-source cellular network analysis tool for RF engineers. Real-time monitoring, GPS mapping, and 90+ KPIs."
        />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eca-analyzer.dev/" />
        <meta property="twitter:title" content="ECA - Extended Cellular Analyzer" />
        <meta
          property="twitter:description"
          content="Free, open-source cellular network analysis tool for RF engineers."
        />
        <meta property="twitter:image" content="/og-image.png" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <Hero />
          <Features />
          <HowItWorks />
          <UseCases />
          <TechStack />
          <Comparison />
          <FAQ />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  )
}
