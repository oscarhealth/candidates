---
# share with candidate
##Prompt (for candidate):

Write a function which tags a string and returns all elements which have a class which matches the string.


    function getElementsByClassName(className) {

    }


---

# internal only

## Solution:
(link to full solution)[http://codepen.io/Kalmakazi/pen/wzlnt/]

## Gotchas:
- recursive solution:
  - if you start at the body, be sure to check that node
  - `document.getElementsByTagName('*')` is hella fast
