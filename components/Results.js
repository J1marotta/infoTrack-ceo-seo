import { motion as m, transform, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from '../styles/Results.module.css'
import { animationProps } from './index'
import useStore from '../store/store'
import loaderStyles from '../styles/Loader.module.css'

const Results = ({ mode }) => {
  const { googleSeo, bingSeo, status } = useStore()

  const [tempGoogle, setTempG] = useState(100)
  const [tempBing, setTempB] = useState(100)

  useEffect(() => {
    if (tempBing <= bingSeo) return
    setInterval(() => setTempB(tempBing - 1), 500)
    controls.start()
  }, [tempBing])

  useEffect(() => {
    if (tempGoogle <= googleSeo) return

    setInterval(() => setTempG(tempGoogle - 1), 500)

    controls.start({
      scale: 1,
      transition: {
        type: 'spring',
        velocity: 700,
        stiffness: 700,
        damping: 80,
      },
    })
  }, [tempGoogle])

  // transform digits to colors
  const mapRemainingToColor = transform([10, 1], ['#ff008c', '#49E20E'])
  const controls = useAnimation()

  const variants = {
    results: {
      business: {
        borderWidth: '2px',
        borderStyle: 'inset',
        borderColor: 'black',
        boxShadow: 'none',
        height: 'fit-content',
        borderRadius: '5%',
        padding: '0px',
        fontFamily: 'Times',
      },

      fancy: {
        borderStyle: 'none',
        height: '100px',
        boxShadow: '0 7px 30px -10px #95a9b3',
        borderRadius: '5%',
        padding: '10px',
        fontFamily: 'Courier',
      },
    },
  }

  return (
    <m.div
      {...animationProps(mode)(3)(4)}
      variants={variants.div}
      className={styles.resultsContainer}
    >
      {status.results === 'loading' ? (
        <div data-testid="loader" className={loaderStyles.loader} />
      ) : null}
      {status.results === 'error' ? (
        <div>Sorry something went wrong please refresh</div>
      ) : null}
      <>
        <div className="results">
          <m.div variants={variants.results}>
            GOOGLE:
            <m.div
              animate={controls}
              style={{ color: mapRemainingToColor(tempGoogle) }}
            >
              {tempGoogle}
            </m.div>
          </m.div>
        </div>

        <div className="results">
          <m.div variants={variants.results}>
            BING:
            <m.div
              animate={controls}
              style={{ color: mapRemainingToColor(tempBing) }}
            >
              {tempBing}
            </m.div>
          </m.div>
        </div>
      </>
    </m.div>
  )
}

export default Results
