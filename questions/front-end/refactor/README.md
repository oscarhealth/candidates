# Front-End Refactor README

## Question Intro
You are building the client portion of a news homepage with another engineer. The homepage contains several articles from various categories, as well as, links to the top articles in that article's category. You are expected to refactor, optimize and improve the front end code as you see fit and provide feedback to the back-end engineer on API design. This is a fairly open ended question, so don't worry too much about completeness.

## Setup

### File Structure
	--client/       // gruntjs based client app
	--v1/		 	// v1 article api
	--v2/           // v2 article api

#### Front end
(in `client/`)

1. `$ npm install`
2. `$ grunt`  // localhost:8888


#### Backend
(in `v1` or `v2`)

1. `$ pip install loremipsum`
2. `$ python testdata.py`
3. `$ python refactor.py`  // localhost:5000/articles


## Approx. Timeline
- 10 min : intro problem, discuss current API design and any improvements
- 20 min : refactor js code
- 15 min : intro and discuss v2 of api and refactor js code again

