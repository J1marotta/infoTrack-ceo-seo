import { motion as m, AnimateSharedLayout } from 'framer-motion'
import styles from '../styles/Home.module.css'
import useStore from '../store/store'
import {
  Search,
  Switch,
  Meta,
  Results,
  animationProps,
  ErrorComponent,
  LoadingComponent,
} from '../components'

export default function Home() {
  const { mode, setMode } = useStore()

  const footerWords = (mode) =>
    mode === 'business' ? `CEO SEO - Powered by: ` : ''

  const variants = {
    container: {
      business: {
        backgroundColor: '#6c6c6c',
      },
      fancy: {
        backgroundColor: '#fff',
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
          <Search />

          <Switch setMode={setMode} />

          <Results />

          <ErrorComponent />
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
