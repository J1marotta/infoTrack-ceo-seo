# My Thoughts

This is where I like to collect my idea and thoughts while doing the project, it includes challenges I had, and also reasons and justifications.
I really wanted to make this challenge fun, using css and getting away from a purely functional program.

#### Technology Choices

- **Nextjs**: React has become an overwhelming land of templates and folder structures and opinions. Next offers a fantastic file based routing system, lambda functions and a nice easy way to deploy. Offers much the same experience as Create-react-app without some of the bloat.

- **Framer-motion**: I knew I wanted to make something a bit more fun, and that means it's needs to be animated, originally I was thinking graphs using [Nivo Charts](https://nivo.rocks/) but I think a rocket flying about the page could be more fun, especially as a suprise addition.

---

#### State management

I know the JD asked if I know how to use redux, but it's way over kill for this sort of thing, and adds a lot of verbosity. I recently found [zustand](https://github.com/react-spring/zustand) which is a very nice looking, elegant state library which I would like to try out, at this point I might not even need it, and might just use state hooks.

- For testing - functionality is basic, so jest and react testing library

- For the server I originally played with JSON-server by manually parsing each page with a html to JSON chrome extention and then throwing the results into a JSON file and serving it from a node server, but that seems super manual and finiky.

At the moment I'm using a small node server to scrape the html and return it.
This also gave me the opportunity to use [glitch](www.glitch.com) which is a fantastic website for small projects.

---

#### Design choices

Framer gives a freedom to do some cool things, I originally wanted the site to look basic until you clicks results then it was going to create adventure.

I attempted a flying rocket prototype but it looked a bit silly So I decided to change design to a business vs fancy version, I can imagine a busy CEO some-times just wants the answer so he can yell at some one, and other times he is in a good mood and wants to enjoy the design.

I think this could work quite well.

- Basic visual design can be see ![here](./public/InfoTrackDesign1.png)

### Business mode

I envisage this to be really old school, sharp corners no border radius, little to no padding, lots of borders, old school windows 95 style [colors](https://www.color-hex.com/color-palette/4556)

---

### Fancy Mode

This will use rich colors and gradients, rounded edges, padding, a cleaner UI style, no borders.
I couldn't find the Infotrack brand kit, so I just copied the colors from your marketing page and improvised.

EDIT: Colors ended up all being stripped back for more of a 'pure white' asthetic

---

#### Gpu-rendering

Okay So I Have a functional front end which matches my design, but unfortunately a lot of what I ended up animating was padding, as I wanted this old school feel before you hit the switch.

Unfortunately padding is not GPU friendly, so it locks up the main thread. While not too bad on chrome, and because it's quite a small application it's barable. But generally better to avoid it and stick with the [gpu friendly](https://www.framer.com/api/motion/component#transform)

I also wanted to allow for different variations in each component, but this instead just added to a lot of repetition.
I think a better way might be to lock down some design ideas, and then have the variations be all kept in one place, ( like all buttons gain 10px padding for example)
Framer is an awesome Library and I think with a bit more tweaking this could be quite a fun website to play with.

Additionally because of the way I did the variations, adding `useReduced motion` for accessability will almost impossible, because everything would have to be rewritten.

Overall it's actually been really fun playing with the animations.

But by the end it was a lot of work for minimal gain, because of how mine was structured.
I ended up making the whole UI twice.

---

### zustand

Overall A very nice library, but I think I would avoid using the `useStore` hook and instead just export the `getState` and `setState` functions from `zustand/vanilla`

I originally wanted to just pass the state down from my index.js to the components so I had the single point of entry but this proves annoying, and it's much nicer to just pluck what you need from `getState` and instead of having specific functions as keys in the store you can juse use `setState` nice an easily when ever you need it.

the setState was causing problems, and not updating correctly so I ending up making my own.

---

### Declarative views

```js
mode === 'fancy' ? x : y

vs

isFancy ? x : Y
```

While not the best use case for this with only two states, I've found I really enjoy writing declarative states instead of booleans which allows for much nicer to read view code

for example

```js
const view = ({ isLoading, isError }) => {
  if (isError) {
    ;<div>Error </div>
  } else if (isLoading) {
    ;<div>Loading</div>
  }
  ;<div>Success </div>
}

vs

const view = ({ status }) => {
  if (status === 'error') {
    ;<div>error</div>
  }
  if (status === 'loading') {
    ;<div>loading</div>
  }
  if (status === 'ready') {
    ;<div>Sucess</div>
  }
}
```

I think this allows for a much nicer way of handing state for the views, especially if you have several conditions to meet before getting to the happy path, bonus it makes it easier to add additional states later on, plus because it's declarative you know exactly what state you're in.

I'd love to know your opinion on this vsing lots of bools everywhere which can quickly get overwhelming if you have more than 2 to check.
Again probably not the best use case for `mode` but just some information around why I chose this style.

I Had to update this to be an object so I could have separate error and loading states for the UI, as I wanted the search button to disable when animating and the bottom to show a spinner when loading.

This now has problems with resetting the animations as the components are remounting so I will have to think up something else.

---

#### Web Scraping

I've never done any webscraping or JQuery before, so playing around with `cheerio` from npm on the server, was interesting.

Ultimately I hit some walls I didn't really know where to fix them, using selectors in the browser console I could select results from real google, but unfortunately converting the `NodeList` that cheerio returns seems to act differently with real google vs the fake one, wouldn't let me convert it to an array to be able to manipulate it. So I had to stop.

Fancy mode now also only hits the cached sites, which unfortunately means we are not using the Queries that you type it, it's a fixed result (this was confusing for me to understand from the beginner so I figured I'd add in the real google results)

---

#### Overall

I really enjoyed being able to try a bunch of new libraries, that really made this a lot more fun and gave me a much better sense of pride in it compared to other technical test I've done.
I think I definitely bit off a bit too much with the design, but I learned a lot about Framer-motion and it was an enjoyable weekend of coding.

I wanted to make something a bit silly and hopefully spark some laughs

I look forward to the follow up.
