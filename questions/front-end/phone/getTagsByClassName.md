---
# share with candidate
##Prompt (for candidate):

Write a function which tags a string and returns all elements which have a class which matches the string.


    function getElementsByClassName(className) {

    }


---

# internal only

## Solution:
(link to full solution)[http://codepen.io/johnmanong/pen/FcAhb?editors=001]

## Gotchas:
- recursive solution:
  - if you start at the body, be sure to check that node
  - `document.getElementsByTagName('*')` is hella fast
- class matching
  - can use regex, but must account for 4 cases:
    1) only class
    2) last of many
    3) first of many
    4)middle of many
  - direct comprison
    - make sure they use '=='
    - `indexOf !== -1` will not work due to subString matching (e.g. 'partClass' vs. 'partClass--even-better')
    - split on space, not comma
