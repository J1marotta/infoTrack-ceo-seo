import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {motion as m} from 'framer-motion'
import useStore from '../store/store'
import Search from '../components/Search'
import Switch from '../components/Switch'
import { useState } from 'react'

export default function Home() {
  const { setSearch
      , clearSearch
      , searchQuery
      , mode
      , setMode
  } = useStore()

  return (
    <div className={styles.container}>
       <Head>
        <title>CEO SEO</ title>
        <meta
          name='description'
          content='Business or fancy Seo Checker.'
        />

        <meta property='og:image' content='/infoTrackLogo.jpg' />
        <meta property='og:image:width' content='200px' />
        <meta property='og:image:height' content='150px' />

        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:alt' content='InfoTrack with Yellow semi circle' />

        <meta name='og:title' content={'Business or Fancy Seo Checker'} />
        <meta name='twitter:card' content='summary_large_image' />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to CEO SEO
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
   
          <Search 
            mode={mode}
            setSearch={setSearch}
            clearSearch={clearSearch}
            searchQuery={searchQuery}
          />

          <Switch
            mode={mode}
            setMode={setMode}
          />

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <img src="/logo.png" alt="InfoTrack Logo" className={styles.logo} />
            </a>
          </footer> 
        </div>
      </main>

     
      

    </div>
  )
}
