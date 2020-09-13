import { motion as m, AnimateSharedLayout } from 'framer-motion'
import styles from '../styles/Home.module.css'
import useStore from '../store/store'
import { Search, Switch, Meta, Results, animationProps } from '../components'

export default function Home() {
  const { status, mode, setMode } = useStore()

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

  if (status === 'error') {
    return <div>Sorry something went wrong please refresh</div>
  }

  if (status === 'loading') {
    return <div>...</div>
  }

  if (status === 'ready') {
    return (
      <AnimateSharedLayout>
        <m.div
          {...animationProps(mode)(1.5)(2.5)}
          variants={variants.container}
          className={styles.container}
        >
          <Meta />
          <div className={styles.grid}>
            <Search />

            <Switch setMode={setMode} />
            <Results />
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
}
