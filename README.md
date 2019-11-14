# Build your own Algolia!

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Why

[Algolia](https://www.algolia.com) is a powerful tool that boosts the search experience to bring knowldege to your fingertips. Well, what better way to display the accessibility of information than by displaying educational resources in [InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)

## What

Amidst the interwebs, there is a popular resource available on GitHub called [build-your-own-x](https://github.com/danistefanovic/build-your-own-x) which holds a collection of links/tutorials on making your own blockchain, text editor, and more. While it's certainly an incredible resource and is among one of the [most awesome resources](https://github.com/sindresorhus/awesome/) (see what I did there), a bland list is not the most effective way of sharing information. For leisurely viewing, sure; but if I were interested in looking at all the tutorials in [Node](https://nodejs.org/en/) without Control-F'ing around the page, I'd be at a loss. Hence, [build-your-own-algolia](https://github.com/yevbar/build-your-own-algolia)!


## How

To obtain the initial dataset, I obtained the [README](https://github.com/danistefanovic/build-your-own-x/blob/master/README.md), parsed the file using [python-markdown](https://github.com/Python-Markdown/markdown) and [lxml](https://lxml.de), then added my generated objects using [Algolia's API](https://www.algolia.com/doc/api-reference/api-methods/add-objects/#examples). The juice behind this is in the [data directory](https://github.com/yevbar/build-your-own-algolia/tree/master/data) in this repository. For the displaying of the results/search, I spun up a quick application using the [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) CLI and modified it accordingly for the results' attributes.

## Tags

Once I got my data in and all this knowledge was at my fingertips (insert evil chuckle), I wanted to solve the original problem noted above where I'd be able to filter through results by programming language. Rather than introduce a [custom SearchBox](https://www.algolia.com/doc/api-reference/widgets/search-box/react/#connector), I wanted to see if this could be tackled using the de facto one already provided. However, the initial obstacle is that the InstantSearch component does not feature an optional prop that'd allow me to inject some query (ie when a tag has been selected) _but_, there was a `defaultRefinement` prop that would be my starting point (it wasn't the final solution since updating props doesn't re-render children and the `defaultRefinement` value is only introduced on mount). So, with some [Redux](https://redux.js.org) here and some [hacky re-rendering](https://github.com/yevbar/build-your-own-algolia/blob/master/src/App.js#L60) there, it came together.


## Final product

You are able to search through the build-your-own-x tutorials using Algolia (you can search by different attributes including title and topic) and, when you click on a tag, it modifies your search query so you can navigate through results without a keyboard as well.

## Demo

There is a live demo for this project on [Netlify](https://build-your-own-algolia.netlify.com)

## Installation

To try out this project locally, grab the repository

```bash
$ git clone https://github.com/yevbar/build-your-own-algolia
```

Hop inside and install dependencies

```
$ cd build-your-own-algolia
$ npm i
```

Once you're prepped up, start the React app!

```bash
$ npm start
```

Now the app should be up on `http://localhost:3000` :slightly_smiling_face:

If you'd like to obtain a production build, run the following command and then the output will be in the `/build` directory

```bash
$ npm run build
```
