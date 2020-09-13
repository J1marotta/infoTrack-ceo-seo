import { motion as m, transform, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from '../styles/Results.module.css'
import { animationProps } from './index'
import useStore from '../store/store'

const dummyData = [
  {
    Page02: [],
  },
  {
    Page01: [0],
  },
  {
    Page03: [],
  },
  {
    Page04: [],
  },
  {
    Page05: [],
  },
].sort((a, b) => a - b)

const Results = () => {
  const { googleData, bingData, mode } = useStore()

  const colors = mode === 'fancy' ? ['#f4dd03', '#00d4ff'] : ['#333', '#6c6c6c']

  // transform digits to colors
  const mapRemainingToColor = transform([10, 1], colors)
  const controls = useAnimation()

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
          <m.div animate={controls} style={{ height: 'fit-content' }}>
            <pre>{JSON.stringify(dummyData, null, 2)}</pre>
          </m.div>
        </m.div>
      </div>

      <div className="results">
        <m.div variants={variants.results}>
          BING:
          <m.div animate={controls} style={{ height: 'fit-content' }}>
            <pre>{JSON.stringify(dummyData, null, 2)}</pre>
          </m.div>
        </m.div>
      </div>
    </m.div>
  )
}

export default Results
