# Benefits Parsing
## Summary
This can be used for front end or back end leaning candidates. The problem is broken into three parts:

1. parsing CSV string into json object []
    - `app/scripts/CSVParser.js`
2. loading benefits from json object into memory
    - `app/scripts/Benefits.js`
3. rendering simple template/styling for parsed benefits
    - `app/temmplates/benefits.hbs`
    - `app/stylesheets/benefits.scss`

Front end candidates should focus on 2) and 3), while back end candidates should focus on 2) and 3). The `private` directory has a full solution for reference. Overall app code is in `app/scripts/app.js`.

## Expectations
This question is written entirely in JS. Candidates are free to come up with their own solutions; exisiting scaffolding code does the app set up/wiring and is encouraged due to time constraints.

It's ok for candidate to look up how to use technologies they are not familiar with (e.g. Handlebars syntax).
