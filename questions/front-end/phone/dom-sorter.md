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

### html

    <body>
      <article> <!-- This wrapper prevents infinite loops -->
        <div>div</div>
        <a>a</a>
        <p>p</p>
        <header>header</header>
        <div>
          <span>span</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <p>p</p>
        </div>
      </article>
    </body>


### CSS
    * {
      border: 1px solid black;
      padding-left: 10px;
      margin: 0;
    }


### js
    function nodeSorter($node) {
      $node = $node || $('article');
      var children = $node.children();
      var sortedObj = {};
      var keys = [];

      if (!children.length) {
        return;
      }

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var childType = child.nodeName;
        if (keys.indexOf(childType) === -1) {
          keys.push(childType);
          sortedObj[childType] = [child];
        } else {
          sortedObj[childType].push(child);
        }
        nodeSorter($(child));
      }

      keys = keys.sort();
      var sortedEls = [];
      for (var j = 0; j < keys.length; j++) {
        sortedEls = sortedEls.concat(sortedObj[keys[j]]);
      }

      if (sortedEls.length) {
        $node.empty().append(sortedEls);
      }
    }


    nodeSorter();



## Gotchas:
- Ignore text nodes if using jQuery (good candidates will ask)
- Reappending a script tag will re-run the JS. In something like codePen, this causes an infinite loop if the root is 'body'. It's okay not to handle this case - but, again, great if the candidate brings it up.
- If a node has no children, don't empty it (if they use empty() at all).
