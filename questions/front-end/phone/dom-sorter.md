---
# share with candidate
##Prompt (for candidate):

Write a function which sorts all of the nodes on a page alphabetically by tag name. If a node has children, its children should be similarly sorted. So, if a node has 2 children, a div then an anchor, after sorting the order should be anchor then div.

No return value, dom is expected to be mutated to reflect the sorted order.


    function nodeSorter($node) {

    }


---

# internal only

## Solution:
(link to full solution)[http://codepen.io/Kalmakazi/pen/wzlnt/]

## Gotchas:
- Ignore text nodes if using jQuery (good candidates will ask)
- Reappending a script tag will re-run the JS. In something like codePen, this causes an infinite loop if the root is 'body'. It's okay not to handle this case - but, again, great if the candidate brings it up.
- If a node has no children, don't empty it (if they use empty() at all).
