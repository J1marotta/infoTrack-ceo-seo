import useStore from '../store/store'
import { motion as m } from 'framer-motion'
import { animationProps } from './index'
import styles from '../styles/Loader.module.css'

const variants = {
  business: {
    borderWidth: '1px',
    borderStyle: 'inset',
    borderColor: 'black',
    padding: '20px',
  },
  fancy: {
    borderStyle: 'none',
  },
}

const ErrorComponent = () => {
  const { status, mode } = useStore()

  const getErrors = (mode) => (mode === 'business' ? 'errors' : '')

  return (
    <m.div {...animationProps} variants={variants} className={styles.errorBox}>
      {getErrors(mode)}
      {status.page === 'error' ? (
        <div>Something went wrong with the overall App, try restarting</div>
      ) : null}
      {status.results === 'error' ? (
        <div>
          Something went wrong while fetching the results, try refreshing
        </div>
      ) : null}
    </m.div>
  )
}

export default ErrorComponent
