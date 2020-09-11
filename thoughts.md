# My Thoughts

This is where I like to collect my idea and thoughts while doing the project, it includes challenges I had, and also reasons and justifications.


#### Technology Choices
- Nextjs: React has become an overwhelming land of templates and folder structures and opinions. Next offers a fantastic file based routing system, lambda functions and a nice easy way to deploy. Offers much the same experience as Create-react-app without some of the bloat.

- Framer-motion: I knew I wanted to make something a bit more fun, and that means it's needs to be animated, originally I was thinking graphs using [Nivo Charts](https://nivo.rocks/) but I think a rocket flying about the page could be more fun, especially as a suprise addition.

- State management : I know the JD asked if I know how to use redux, but it's way over kill for this sort of thing, and adds a lot of verbosity. I recently found [zustand](https://github.com/react-spring/zustand) which is a very nice looking, elegant state library which I would like to try out.


- For testing, jest and maybe a cypress run through to allow for easy of testing the moving parts.

- For the server I originally played with JSON-server by manually parsing each page with a html to JSON chrome extention and then throwing the results into a JSON file and serving it from a node server, but that seems super manual and finiky. 

At the moment I'm using a small node server to scrape the html and return it. 




