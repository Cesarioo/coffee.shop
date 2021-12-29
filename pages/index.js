import Head from 'next/head';
import style from '../styles/Index.module.css'
import logo from './logo.png'

import { CTA, Footer, Header, Social, Trusted } from '../src/containers';
import { Navbar, Logo } from '../src/components';


export default function Home() {
  return (
    <div >
      <Head>
        <link rel='icon' href='logo.png' />
        <title> My amazing coffee shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <meta name="author" content="Oscar Mairey"></meta>
        <meta name="description" content="Discover my amazing comfy coffee shop ! We are a local shop that provides all sort of coffee realted product" />
        <meta property="og:image" content="logo.png" />
        <meta property="og:description" content="This is the coffee shop of an amazing person who we all love and cuddle" />
        <meta property="og:title" content="My amazing coffee shop" />
      </Head>
      <div>
        <Navbar />
        < Header />
      </div>
      < Trusted />
      < Social />
      < CTA />
      < Footer />
    </div>

  )
}
