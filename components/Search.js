import {motion as m} from 'framer-motion'
import { animationProps } from './animationProps'

const Search = ({ mode, clearSearch, setSearch, searchQuery }) => {
  const searchLabel = mode  === 'fancy' 
    ? 'Seo Search'
    : 'Enter Search Parameters for Seo Search'

  const searchPlaceHolder = mode  === 'fancy' 
    ? '...'
    : 'You can type here to search.'

  
  const variants = {
    label: {
      business: {
        padding: '0px',

      },
      fancy: {
        padding: '30px',
        fontFamily: 'monoSpace'
      },      
    },
    div: {
      business: {
        padding: '0px 0px',
        background: 'grey'
      },
      fancy: {
        background: 'red',
        padding: '20px 20px',
        scale: 2,
      },      
    },
    form: {
      business: {},
      fancy: {},      
    },
    button: {
      business: {
        padding: '10px',
      },
      fancy: {
        whileHove:{ scale: 1.1 },
        whileTap:{ scale: 0.9 }
      },      
    },
    input: {
      business: {},
      fancy: {},      
    }
  }
  console.log({mode,S: searchQuery})

  return (
    <m.AnimateSharedLayout>
    <m.form
      {...animationProps(mode)}
      variants={variants.form} 
      onSubmit={e => {
      e.preventDefault()
    }}>
    <m.div 
      {...animationProps(mode)}
      variants={console.log('d',mode) || variants.div}
    >
      <m.label 
        {...animationProps(mode)}
        variants={variants.label}
        htmlFor='searchInput'
      >
        {searchLabel}
      </m.label>

      <m.input 
        type='text' 
        id='search' 
        name='search' 
        value={searchQuery} 
        onChange={({ target: { value } }) => setSearch(value) }
      />
       
        <m.button 
          {...animationProps(mode)}
          variants={variants.button}
          type="submit" 
          id='search'
        > 
          <m.label 
            htmlFor='search'
            {...animationProps(mode)}
            variants={variants.label}
          >
            Search
          </m.label> 
         </m.button>

        <m.button 
          id="clear"
          name="clear"
          {...animationProps(mode)}
          variants={variants.button}
          type="button" onClick={() => clearSearch()}
        >
         <m.label 
            htmlFor='clear'
            initial="business"
            animate={mode}
            variants={variants.label}
          >
            clear
          </m.label> 
        </m.button>

      </m.div>
    </m.form>
    </m.AnimateSharedLayout>
  )
}



export default Search