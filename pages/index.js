import { motion as m } from 'framer-motion'
import styles from '../styles/Home.module.css'
import useStore from '../store/store'
import { Search, Switch, Meta, Results, animationProps } from '../components'

export default function Home() {
  const {
    setSearch,
    clearSearch,
    searchQuery,
    mode,
    setMode,
    googleData,
    bingData,
  } = useStore()

  const footerWords = (mode) =>
    mode === 'business' ? `CEO SEO - Powered by: ` : ''

  const variants = {
    container: {
      business: {
        backgroundColor: '#6c6c6c',
      },
      fancy: {
        backgroundColor: 'white',
        transitionEnd: {
          fontFamliy: 'Courier',
        },
      },
    },
  }

  return (
    <m.div
      {...animationProps(mode)}
      variants={variants.container}
      className={styles.container}
    >
      <Meta />
      <div className={styles.grid}>
        <Search
          mode={mode}
          setSearch={setSearch}
          clearSearch={clearSearch}
          searchQuery={searchQuery}
        />

        <Switch mode={mode} setMode={setMode} />
        <Results mode={mode} googleData={googleData} bingData={bingData} />
        <footer
          className={mode === 'fancy' ? styles.footerAlign : styles.footer}
        >
          <a
            href="https://InfoTrack.com.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            {footerWords(mode)}
            <img src="/logo.png" alt="InfoTrack Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </m.div>
  )
}
