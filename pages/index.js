import { motion as m, AnimateSharedLayout } from 'framer-motion'
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
    status,
    setStatus,
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
    <AnimateSharedLayout>
      <m.div
        {...animationProps(mode)(1.5)(2.5)}
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
            status={status}
          />

          <Switch mode={mode} setMode={setMode} setStatus={setStatus} />
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
              <img
                src="/logo.png"
                alt="InfoTrack Logo"
                className={styles.logo}
              />
            </a>
          </footer>
        </div>
      </m.div>
    </AnimateSharedLayout>
  )
}
