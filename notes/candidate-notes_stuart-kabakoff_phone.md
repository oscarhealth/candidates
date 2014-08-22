Stuart Kabakoff| Senior Front End | 8/21/14, 6pm
===============================================

6:00 pm EDT Thu, Aug 21  |  Phone number: 315-440-7388. Room 3 - De la Hoya  |  45 mins

-----------
## info

+ **Interviewer:** John Ong
+ **Role:** Front End (Senior)
+ **Interview Type:** Phone Screen
+ **Question:** getElementsByClassName

-----------



## tl; dr;

Candidate was very strong techincally, a few problems with the code 


------------
## notes:

- implement bower
- use require
- get things going

- AMD/Require.js 
  - developing is AMD
  - r.js for production assets
  - community around Require
- don't like browserify, too hard to debug
- commonjs was designed for Node

- grunt vs. gulp vs. brunch vs ...
	- community support

### Scroll Monitor
- why is it so fast
	- touches dom
	- each watcher knows top and bottom
	- doesn't make variables
	- simple comparisons
- on scroll and and resize
	- need to re-calc watchers


### technical

#### summary
got to a 90% solution very quickly, did not talk about non-recursive solution, this was my fault for not asking. Pushed him to solve without Regex, and went with indexOf, which has substring issue. Did not see it, but recognized that splitting was a valid approach.

He had well thought out opinions on build tools, and code managament and seemed very much in favor of bower/require. Glad to hear he had opinions, but would be sure to check that he's also flexible.


- thought about well formed input
- asked to use modern iterator
- went with regex
	- missed case
- missed partial strings

- position attr:
- static
- relative: set number of pictures
- fixed: viewport
- absolute: relative to the nearest positioned el
- inherit



### personal
*general*
- gets right to details


*why oscar*
- doing something that will help people
- add to the good, not the bad


*tell me about yourself*

- almost all js since 2010, Nook
	- used knockout
- mlb.com
	- used knockout
	- and he liked it!
- worked at onswipe, but got acquired and don't like new company
	- app used to crash
	- memory witch hunt
	- two big things: ajax calls weren't cached
	- google tag lib does not support creation/deletion
	- very shitty carousel
	- lead re-write
	- tech stack
		- scala backend
		- library ora
	- moved to swiper

*what do you want to do*
- depends on what needs to be done
- wants to stay on as a senior developer

---
### techincal answer


	Write a function which tags a string and returns all elements which have a class which matches the string.
	
    function getElementsByClassName(className) {
        var elements = [];
        className = ' '+className+' ';
        var regex = new RegExp('^'+className+' | '+className+' | '+className+'$|^'+className'+'$'); 
        
        function getEls( el ) {
            var elClass = ' '+el.className+' ';
            if (elClass.indexOf(className) !== -1) {
                elements.push(el);
            }
            
            Array.prototype.forEach.apply(el.children, getEls);
        }
        
        getEls(document.body);
        
        return elements;
    }

