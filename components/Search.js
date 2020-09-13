import { motion as m } from 'framer-motion'
import { animationProps } from './index'
import styles from '../styles/Search.module.css'
import { fetchData } from '../store/FetchData'
import useStore from '../store/store'

const Search = () => {
  const { mode, searchQuery, status, set } = useStore()

  const searchLabel =
    mode === 'fancy' ? 'Seo Search' : 'Enter Search Parameters for Seo Search'

  const variants = {
    label: {
      business: {
        fontFamily: 'Times',
      },
      fancy: {
        width: '100%',
        fontFamily: 'Courier',
      },
    },
    div: {
      business: {
        borderWidth: '2px',
        borderStyle: 'inset',
        borderColor: 'black',
        padding: '0px 0px',
        background: '#6c6c6c',
      },
      fancy: {
        borderStyle: 'none',
        background: '#fff',
        padding: '5px 5px',
      },
    },
    form: {
      business: {
        padding: '0px',
      },
      fancy: {
        padding: '10px',
      },
    },
    button: {
      business: {
        padding: '4px',
        height: '30px',
        width: '100px',
      },
      fancy: {
        height: '50px',
        width: '100%',
      },
    },
    input: {
      business: {
        height: '50px',
        width: '300px',
        padding: '0px',
        marginRight: '0px',
      },
      fancy: {
        height: '50px',
        width: '100%',
        padding: '10px',
        marginRight: '10px',
      },
    },
    buttons: {
      business: {
        x: 100,
      },
      fancy: {
        x: 0,
      },
    },
  }

  const sharedButtonProps = (mode) => ({
    whileHover: { scale: mode === 'fancy' ? 1.2 : 1 },
    whileTap: { scale: mode === 'fancy' ? 0.9 : 1 },
  })

  return (
    <m.div {...animationProps(mode)(2)(2.5)} variants={variants.div}>
      <m.form
        variants={variants.form}
        onSubmit={(e) => {
          e.preventDefault()
          console.log('submit')
          fetchData({
            searchQuery,
            mode,
            set,
          })
        }}
        className={styles.searchContainer}
      >
        <div className={styles.searchInput}>
          <m.label variants={variants.label} htmlFor="searchInput">
            {searchLabel}
          </m.label>

          <m.input
            disabled={status !== 'ready'}
            variants={variants.input}
            type="text"
            id="searchInput"
            name="search"
            value={searchQuery}
            onChange={({ target: { value } }) => {
              set('searchQuery')(value)
            }}
          />
        </div>

        <m.div variants={variants.buttons}>
          <div>
            <m.button
              {...sharedButtonProps(mode)}
              variants={variants.button}
              type="submit"
              id="search"
            >
              <m.label htmlFor="search" variants={variants.label}>
                Search
              </m.label>
            </m.button>
          </div>

          <div>
            <m.button
              id="clear"
              name="clear"
              {...sharedButtonProps(mode)}
              variants={variants.button}
              type="button"
              onClick={() => setState({ searchQuery: '' })}
            >
              <m.label
                htmlFor="clear"
                initial="business"
                animate={mode}
                variants={variants.label}
              >
                clear
              </m.label>
            </m.button>
          </div>
        </m.div>
      </m.form>
    </m.div>
  )
}

export default Search
