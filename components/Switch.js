import { motion as m } from 'framer-motion'
import { animationProps } from './animationProps'
const Switch = ({ mode, setMode }) => {

  const variants = {
    label: {
      business: {},
      fancy: {
        padding: '10px',
      }
    },
    input: {
      business: {},
      fancy: {}
    },
    span: {
      business: {},
      fancy: {}
    },
    div: {
      business: { border: '1px solid grey' },
      fancy: {}
  },

  }


  return (
    <m.div
      {...animationProps(mode)}
      variants={variants.div}
    >
      <m.label
        {...animationProps(mode)}
        variants={variants.label}
        className="switch"
      >
        <m.input
          {...animationProps(mode)}
          type="checkbox"
          variants={variants.input}
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