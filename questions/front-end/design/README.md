# Glossary design
===

[full details here](https://docs.google.com/a/hioscar.com/document/d/1XisDnH7DJHQTZdkMi80y_UmMx7w8euYSlNRBseu9Ags/edit#heading=h.85d93c3x7kaq)

===

A much longer version of this question is available here: https://docs.google.com/a/hioscar.com/document/d/1XisDnH7DJHQTZdkMi80y_UmMx7w8euYSlNRBseu9Ags/edit#heading=h.85d93c3x7kaq

Question
Given a dictionary (word -> definition), write the necessary JavaScript and CSS to:
Highlight the words that are in the dictionary on the page (give them a yellow background)
When the word is clicked, open up a tooltip with the definition of the word
Style the tooltip with an arrow pointing at the word
Bootstrap file: glossary_sample.html
{
  "sundanese": "A member of a people of western Java.",
  "woman": "An adult female person.",
  "husband": "A married man.",
  "japanese": "Of, pertaining to, or characteristic of Japan, its people, or their language.",
  "troupe": "A group of dancers, actors, or other entertainers who tour to different venues."
}


What this tests
DOM knowledge (tree traversal, tree manipulation, node details)
jQuery Knowledge (basic)
Backbone (optional; events, view management)
Solution
This requires recursive tree traversal of the DOM (trying to treat the DOM as an HTML string pretty much means rebuilding a XML parser in JavaScript). You should identify the text nodes inside a given element by recursively iterating through https://github.com/bartaz/sandbox.js/blob/master/jquery.highlight.js is a good example of what to look for (the node skipping is a little less obvious than it could be, but it's commented). http://blog.alexanderdickson.com/javascript-replacing-text is a good example of pure JS for doing this.
This is a good place to use backbone if they have experience - it's pretty straightforward (setup an event for clicks from whatever class name they set when highlighting the words, handling closing the tooltip on body click using stopPropagation) and  it's a good place to see how they handle view management in backbone (i.e., memory management). This can either be a good place to use a singleton for handling the creation of the tooltip view, or they should be cleaning up the tooltips once they're closed.
Basically http://cssarrowplease.com/

Internal Feedback
David Bieber
Pros
Interviewee gets to build something real
You get to see the interviewee code in a real way — learn a ton about how they operate
Candidate probably will have to learn something in the interview

Cons
Very long
Not very interesting as an application
Writing vanilla JS not super common in production systems
Requires the candidate using an unfamiliar machine / dev environment