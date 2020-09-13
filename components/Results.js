import { motion as m, transform, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from '../styles/Results.module.css'
import { animationProps } from './index'
import useStore from '../store/store'

const Results = ({ mode, googleSeo, bingSeo }) => {
  const { status } = useStore()

  const animateIncremnet = (newValue, oldValue, setter) =>
    useEffect(() => {
      if (newValue === oldValue) return

      while (newValue <= oldValue) {
        setter(newValue + 1)
      }

      controls.start({
        scale: 1,
        transition: {
          type: 'spring',
          velocity: 100,
          stiffness: 700,
          damping: 80,
        },
      })
    }, [newValue])

  const [newGoogleSeo, setGoogleValue] = useState(0)
  const [newBingSeo, setBingValue] = useState(0)

  animateIncremnet(newGoogleSeo, googleSeo, setGoogleValue)
  animateIncremnet(newBingSeo, bingSeo, setBingValue)

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

  if (status.results === 'error') {
    return <div>Sorry something went wrong please refresh</div>
  }

  if (status.results === 'loading') {
    return <div data-testid="loader" className={styles.loader} />
  }

  if (status.results === 'ready') {
    return (
      <m.div
        {...animationProps(mode)(3)(4)}
        variants={variants.div}
        className={styles.resultsContainer}
      >
        <div className="results">
          <m.div variants={variants.results}>
            GOOGLE:
            <m.div
              animate={controls}
              style={{ color: mapRemainingToColor(newGoogleSeo) }}
            >
              {newGoogleSeo}
            </m.div>
          </m.div>
        </div>

        <div className="results">
          <m.div variants={variants.results}>
            BING:
            <m.div
              animate={controls}
              style={{ color: mapRemainingToColor(newBingSeo) }}
            ></m.div>
          </m.div>
        </div>
      </m.div>
    )
  }
}

export default Results
