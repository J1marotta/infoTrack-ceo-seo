import { motion as m } from 'framer-motion'
import { animationProps } from './index'
import styles from '../styles/Search.module.css'

const Search = ({ mode, clearSearch, setSearch, searchQuery }) => {
  const searchLabel =
    mode === 'fancy' ? 'Seo Search' : 'Enter Search Parameters for Seo Search'

  const searchPlaceHolder =
    mode === 'fancy' ? '...' : 'You can type here to search.'

  const variants = {
    label: {
      business: {
        padding: '0px',
        fontFamily: 'Times',
      },
      fancy: {
        padding: '10px',
        width: '100%',
        fontFamily: 'Courier',
      },
    },
    div: {
      business: {
        padding: '0px 0px',
        background: 'grey',
      },
      fancy: {
        background: 'white',
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
      },
      fancy: {
        height: '50px',
        width: '100%',
        whileHover: { scale: 1.001 },
        onTap: { scale: 0.7 },
      },
    },
    input: {
      business: {
        padding: '0px',
      },
      fancy: {
        height: '50px',
        width: '100%',
        padding: '10px',
        marginRight: '10px',
      },
    },
  }

  const sharedButtonProps = (mode) => ({
    whileHover: { scale: mode === 'fancy' ? 1.2 : 1 },
    whileTap: { scale: mode === 'fancy' ? 0.9 : 1 },
  })

  return (
    <m.div {...animationProps(mode)} variants={variants.div}>
      <m.form
        {...animationProps(mode)}
        variants={variants.form}
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className={styles.searchContainer}
      >
        <div className={styles.searchInput}>
          <m.label
            {...animationProps(mode)}
            variants={variants.label}
            htmlFor="searchInput"
          >
            {searchLabel}
          </m.label>

          <m.input
            {...animationProps(mode)}
            variants={variants.input}
            type="text"
            id="searchInput"
            name="search"
            value={searchQuery}
            onChange={({ target: { value } }) => setSearch(value)}
          />
        </div>

        <div>
          <div>
            <m.button
              {...animationProps(mode)}
              {...sharedButtonProps(mode)}
              variants={variants.button}
              type="submit"
              id="search"
            >
              <m.label
                htmlFor="search"
                {...animationProps(mode)}
                variants={variants.label}
              >
                Search
              </m.label>
            </m.button>
          </div>

          <div>
            <m.button
              id="clear"
              name="clear"
              {...animationProps(mode)}
              {...sharedButtonProps(mode)}
              variants={variants.button}
              type="button"
              onClick={() => clearSearch()}
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
        </div>
      </m.form>
    </m.div>
  )
}

export default Search
