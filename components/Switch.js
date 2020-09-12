import { motion as m } from 'framer-motion'
import { animationProps } from './index'

const Switch = ({ mode, setMode }) => {
  const variants = {
    label: {
      business: {
        padding: '0px',
        margin: '0px',
        fontSize: '1.5em',
        fontFamily: 'times',
      },
      fancy: {
        padding: '10px',
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
        padding: '10px',
      },
    },
  }

  const buttonText = (mode) =>
    mode === 'fancy' ? 'uncheck for all business' : 'Make it Fancy'

  return (
    <m.div {...animationProps(mode)(4)(5.5)} variants={variants.div}>
      <m.label variants={variants.label} htmlFor="fancy mode">
        <m.input
          variants={variants.input}
          id="fancy mode"
          type="checkbox"
          value={mode}
          onChange={() => setMode()}
        />
        <m.span className="slider" variants={variants.span}>
          {buttonText(mode)}
        </m.span>
      </m.label>
    </m.div>
  )
}

export default Switch
