Can I Animate?
==============

The source code for http://canianimate.com/


## Get it running locally

Clone the repository, then run:

    npm install

And you're done.

All the main workings are in, unsurprisingly, the `main` files (html, css, js).


## Building for production

To prepare the site for pushing to production, just run:

    npm run build

This combines all the CSS and JS files referenced in `main.html` and inlines them into the page to reduce the effects of network latency when loading the site.
The whole lot is then minified and output as `index.html`, ready for pushing live.
