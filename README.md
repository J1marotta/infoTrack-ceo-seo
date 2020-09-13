# Welcome to CEO-SEO

The fastest way to know \*your Seo score

App is deployed [here](https://info-track.vercel.app/)

If you want to use the code locally :

To run the dev server

```bash
  install dependencies with npm i
```

```bash
  npm run dev
```

Currently it talks to a small express server which is hosted for free on [glitch](https://glitch.com/edit/#!/sudden-magic-pressure)
The app talks to [this Url](https://sudden-magic-pressure.glitch.me)

The server code is also available locally [here](https://github.com/J1marotta/Info-track-scraper)

You might need to wake it before it works, as they goto sleep after 5 minutes.

To see some of my challenges and thoughts during this exercise checkout [Thoughts.md](./thoughts.md)

#### How to use

Type a query and checks the for any links which include InfoTrack in the href, of the results
There are 10 results per page, so It returns a list, and we check 5 pages.

It returns the index of the results.. so 0 is actually first results

Here is some example results ![](./public/results.png)

You can upgrade to the Fancy version with the large button in the middle of the screen.
The animations have some delay (see [thoughts.md](./thoughts.md) for more on that )

![](./public/button.png)

based on the mode it will either hit the cached

\*- - note seo only valid for InfoTrack CEO customers
