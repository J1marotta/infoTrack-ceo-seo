import { motion as m } from 'framer-motion'
import { animationProps } from './index'
import styles from '../styles/Switch.module.css'

const Switch = ({ mode, setMode }) => {
  const variants = {
    label: {
      business: {
        padding: '10px',
        margin: '0px',
        fontSize: '1.5em',
        fontFamily: 'times',
      },
      fancy: {
        padding: '15px',
        margin: '10px',
        fontSize: '2em',
        fontFamily: 'Courier',
      },
    },
    input: {
      business: {
        border: '1px solid grey',
        padding: '0px',
        height: '30px',
        width: '30px',
      },
      fancy: {
        border: '0px solid grey',
        padding: '10px',
        height: '50px',
        width: '50px',
      },
    },
    switch: {
      business: {
        borderRadius: 0,
      },
      fancy: {
        borderRadius: 30,
      },
    },
    handle: {
      business: {
        borderRadius: 0,
        height: '20px',
      },
      fancy: {
        borderRadius: 10,
        height: '20px',
      },
    },
    div: {
      business: {
        border: '1px solid grey',
        padding: '0px',
      },
      fancy: {
        border: '0px solid grey',
        padding: '10px',
      },
    },
  }

  const buttonText = (mode) =>
    mode === 'fancy' ? 'uncheck for all business' : 'Make it Fancy'

  return (
    <m.div
      {...animationProps(mode)(2.5)(3)}
      variants={variants.div}
      className={styles.switchContainer}
    >
      <m.div
        variants={variants.switch}
        className={styles.switch}
        data-isOn={mode}
        role="radio"
        id="fancy mode"
        onClick={() => setMode()}
      >
        <m.div className={styles.handle} variants={variants.handle} layout />
      </m.div>

      <div className={styles.spaceNames}>
        <m.span variants={variants.span}>
          <m.label variants={variants.label} htmlFor="fancy mode">
            Business
          </m.label>
        </m.span>
        <m.span variants={variants.span}>
          <m.label variants={variants.label} htmlFor="fancy mode">
            Fancy
          </m.label>
        </m.span>
      </div>
    </m.div>
  )
}

export default Switch
