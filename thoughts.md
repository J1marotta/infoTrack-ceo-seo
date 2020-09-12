# My Thoughts

This is where I like to collect my idea and thoughts while doing the project, it includes challenges I had, and also reasons and justifications.
I really wanted to make this challenge fun, using css and getting away from a purely functional program.

#### Technology Choices

- **Nextjs**: React has become an overwhelming land of templates and folder structures and opinions. Next offers a fantastic file based routing system, lambda functions and a nice easy way to deploy. Offers much the same experience as Create-react-app without some of the bloat.

- **Framer-motion**: I knew I wanted to make something a bit more fun, and that means it's needs to be animated, originally I was thinking graphs using [Nivo Charts](https://nivo.rocks/) but I think a rocket flying about the page could be more fun, especially as a suprise addition.

---

#### State management

I know the JD asked if I know how to use redux, but it's way over kill for this sort of thing, and adds a lot of verbosity. I recently found [zustand](https://github.com/react-spring/zustand) which is a very nice looking, elegant state library which I would like to try out, at this point I might not even need it, and might just use state hooks.

- For testing - functionality is basic, so Jest should suffice, Cypress run through if I have time.

- For the server I originally played with JSON-server by manually parsing each page with a html to JSON chrome extention and then throwing the results into a JSON file and serving it from a node server, but that seems super manual and finiky.

At the moment I'm using a small node server to scrape the html and return it.

---

#### Design choices

Framer gives a freedom to do some cool things, I originally wanted the site to look basic until you clicks results then it was going to create adventure.

I attempted a flying rocket prototype but it looked a bit silly So I decided to change design to a business vs fancy version, I can imagine a busy CEO some-times just wants the answer so he can yell at some one, and other times he is in a good mood and wants to enjoy the design.

I think this could work quite well.

- Basic visual design can be see [here](./InfoTrackDesign1.png)

### Business mode

I envisage this to be really old school, sharp corners no border radius, little to no padding, lots of borders, old school windows 95 style [colors](https://www.color-hex.com/color-palette/4556)

### Fancy Mode

This will use rich colors and gradients, rounded edges, padding, a cleaner UI style, no borders.

- I couldn't find the Infotrack brand kit, so I just copied the colors from your marketing page and improvised.

#### Gpu-rendering

Okay So I Have a functional front end which matches my design, but unfortunately a lot of what I ended up animating was padding, as I wanted this old school feel before you hit the switch.

Unfortunately padding is not GPU friendly, so it locks up the main thread. While not too bad on chrome, and because it's quite a small application it's barable. But generally better to avoid it and stick with Transform, opacity and

I also wanted to allow for different variations in each component, but this instead just added to a lot of repetition.
I think a better way might be to lock down some design ideas, and then have the variations be all kept in one place, ( like all buttons gain 10px padding for example)
Framer is an awesome Library and I think with a bit more tweaking this could be quite a fun website to play with.

Additionally because of the way I did the variations, usingReduced motion for accessability will make it harder as well.

Overall it's actually been really fun playing with the animations.
