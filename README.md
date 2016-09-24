# Color Flashcards

A [simple web app](https://stowball.github.io/color-flashcards/) (in under 10kb gzipped) to help teach your children colors with both visual and audio cues.

Apologies in advance for it being in my voice, but I made it primarily for my daughter. Please feel free to fork this repo and replace the audio samples.

Low-vision users can mute the custom audio samples and instead listen to their screen reader's pronunciation of each color.

For supporting browsers of [Fetch](http://caniuse.com/#search=fetch), [FileReader](http://caniuse.com/#search=filereader) and [LocalStorage](http://caniuse.com/#search=localstorage), the audio clips will be stored to reduce bandwidth usage on repeat visits.

## Tech used

* Vanilla JS (ES2015)
* Redux
* Webpack
* Babel
* Sass
* Autprefixer
* SVG

## How to run locally

The following commands will install all of the dependencies, build the app, open it in your browser and watch for changes.

* `npm i`
* `npm run watch`

## TODO

* Use Service Workers to make it completely offline-capable
* Investigate using Webpack more efficiently to compile and bundle more of the assets
* Smarter watching
* Dev and Prod builds
* Add tests
* Create native mobile apps
