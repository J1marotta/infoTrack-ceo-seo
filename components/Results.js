import { motion as m, transform, useAnimation } from 'framer-motion'
import styles from '../styles/Results.module.css'
import { animationProps } from './index'
import useStore from '../store/store'

const Results = () => {
  const { googleData, bingData, mode } = useStore()

  const variants = {
    results: {
      business: {
        borderWidth: '2px',
        borderStyle: 'inset',
        borderColor: 'black',
        boxShadow: '0 0px 0px 0px rgba(149, 169, 179, 0)',
        height: 'fit-content',
        borderRadius: '0%',
        padding: '0px',
        fontFamily: 'Times',
        height: 'min-content',
      },

      fancy: {
        borderStyle: 'none',
        height: '100px',
        boxShadow: '0 7px 30px -10px rgba(149, 169, 179, 1)',
        borderRadius: '5%',
        padding: '10px',
        fontFamily: 'Courier',
        height: 'min-content',
      },
    },
  }

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
            {...animationProps(mode)(3)(4)}
            style={{ height: 'fit-content' }}
          >
            <pre>{JSON.stringify(googleData, null, 2)}</pre>
          </m.div>
        </m.div>
      </div>

      <div className="results">
        <m.div variants={variants.results}>
          BING:
          <m.div
            {...animationProps(mode)(3)(4)}
            style={{ height: 'fit-content' }}
          >
            <pre>{JSON.stringify(bingData, null, 2)}</pre>
          </m.div>
        </m.div>
      </div>
    </m.div>
  )
}

export default Results
