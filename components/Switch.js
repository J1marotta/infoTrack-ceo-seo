import { motion as m } from 'framer-motion'
import { animationProps } from './animationProps'

const Switch = ({ mode, setMode }) => {
  const variants = {
    label: {
      business: {},
      fancy: {
        padding: '10px',
        margin: '10px',
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
    span: {
      business: {},
      fancy: {},
    },
    div: {
      business: {
        border: '1px solid grey',
        padding: '0px',
      },
      fancy: {
        border: '0px solid grey',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
      },
    },
  }

  return (
    <m.div {...animationProps(mode)} variants={variants.div}>
      <m.label
        {...animationProps(mode)}
        variants={variants.label}
        htmlFor="fancy mode"
      >
        <m.input
          {...animationProps(mode)}
          variants={variants.input}
          id="fancy mode"
          type="checkbox"
          value={mode}
          onChange={() => setMode()}
        />
        <m.span
          {...animationProps(mode)}
          className="slider"
          variants={variants.span}
        />
      </m.label>
    </m.div>
  )
}

export default Switch
