---
# share with candidate
##Prompt (for candidate):

Write a function which tags a string and returns all elements which have a class which matches the string.
    // className is a string and is the class we want to target
    // should return list of all elements which have class which matches className
    function getElementsByClassName(className) {

    }


---

# internal only

## Solution:
    <body class="test-class">
      <div class="test"></div>
      <span class="test-class">
        <span class="test">
          <span class="class">
            <a href="" class="test-class"></a>
          </span>
        </span>
      </span>
      <script type="text/javascript">
        // recursive solution
        //
        function getElementsByClassName(className) {
          var foundTags = [];
          var startNode = document.body;

          getTags(startNode);

          function hasClass(node) {
              var nodeClasses = node.className.split(" ");
              var isMatch = false;

              [].forEach.call(nodeClasses, function(nodeClass) {
                  if (nodeClass === className) {
                    isMatch = true;
                  }
              });
              return isMatch;
          }

          function getTags(node) {
              if (hasClass(node)) {
                foundTags.push(node);
              }

              var childrenNodes = node.children;

              if (childrenNodes.length) {
                [].forEach.call(childrenNodes, function(childNode) {
                  getTags(childNode);
                });
              }
          }

          return foundTags;
        }

        console.log(getElementsByClassName('test-class'));


        // Non recursive solution
        //
        function getElementsByClassNameNoRecursion(className) {
          var matches = [];
          var allNodes = document.getElementsByTagName('*');

          [].forEach.call(allNodes, function(currentNode) {
            var nodeClasses = currentNode.className.split(" ");

            // since you cannot break a forEach loop, use every instead
            [].every.call(nodeClasses, function(nodeClass) {
                if (nodeClass === className) {
                  matches.push(currentNode);
                  return false;
                }
            });

          });

          return matches;
        }

        console.log(getElementsByClassNameNoRecursion('test-class'));

      </script>
    </body>



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
