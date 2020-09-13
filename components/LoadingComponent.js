import useStore from '../store/store'
import styles from '../styles/Loader.module.css'
import { motion as m } from 'framer-motion'
import { animationProps } from './index'

const variants = {
  business: {
    color: '#704d4d',
  },
  fancy: {
    color: '#efefef',
  },
}

const LoadingComponent = () => {
  const { status } = useStore()

  return status.results === 'loading' ? (
    <div className={styles.loaderContainer}>
      <m.div
        {...animationProps}
        variants={variants}
        className={styles.loader}
      />
    </div>
  ) : null
}

export default LoadingComponent
