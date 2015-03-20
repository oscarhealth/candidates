# Summary
The goal of this project is to build a page to display benefit information. Benefits infomation data is stored in `app/data/benefits.csv`.

# Getting Started
This project is setup to use Grunt, Sass, Handlebars, and CommonJS modules.

The default `grunt` task will start `http://localhost:8000` with live reload.







---

# Trouble shooting
## Node

Install grunt

    npm install -g grunt-cli

Install dev modules

    npm install


## Ruby

To get source maps to work, only certain edge SASS gems will work. I recommend the following

    gem install sass -v '3.3.3'


# Usage
Run default task: `grunt`. This will start a local server on port 8000, compile css/js assets, and start watch task for live reload.

## optional

### Use Takana
[Takana](http://usetakana.com/) live reloads scss/css on change, not save, which can make dev even faster. Takana uses libsass under the hood, so it's not 100% equivalent to the Ruby version.

#### Setup
##### Install Module globally

    npm install -g takana

##### Add snippet to head

    <script type="text/javascript" src="http://localhost:48626/takana.js"></script>

##### Start process (parallel with grunt)

    takana app/

#### Tech Notes
Takana works by replacing the stylesheets on the page with a version Takana updates on change.

##### Issues
There is an open issue regarding initializing the submodule for the sublime plugin. If the styles are not updating on keystroke, this might be the culprit. Here's the [link](https://github.com/mechio/takana/issues/16).


# Rerferences
- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
- [grunt-contrib-coffee](https://github.com/gruntjs/grunt-contrib-coffee)
- [takana](https://github.com/mechio/takana)
