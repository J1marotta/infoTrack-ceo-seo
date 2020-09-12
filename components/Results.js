import { motion as m } from 'framer-motion'
import styles from '../styles/Results.module.css'
import { animationProps } from './index'

const Results = ({ mode, googleData, BingData }) => {
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
      },

      fancy: {
        borderStyle: 'none',
        height: '100px',
        boxShadow: '0 7px 30px -10px #95a9b3',
        borderRadius: '5%',
        padding: '10px',
      },
    },
  }

  return (
    <m.div
      {...animationProps(mode)}
      variants={variants.div}
      className={styles.resultsContainer}
    >
      <div className="results">
        <m.div {...animationProps(mode)} variants={variants.results}>
          GOOGLE
        </m.div>
      </div>

      <div className="results">
        <m.div {...animationProps(mode)} variants={variants.results}>
          BING
        </m.div>
      </div>
    </m.div>
  )
}

export default Results
