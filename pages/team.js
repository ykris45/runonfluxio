import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { TeamPage } from '../components/teamPage/teamPage'
import { NavBar } from '../components/navbar/navbar'
import ThemeToggle from '../components/themeToggle/ThemeToggle';
export default function Team() {
  return (
    <div>
      <Head>
        <title>Flux | Team</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KTKEYE3YMN" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-KTKEYE3YMN');
            `}
        </Script>
        <ThemeToggle />
      <NavBar/>
     <TeamPage/>
    </div>
  )
}