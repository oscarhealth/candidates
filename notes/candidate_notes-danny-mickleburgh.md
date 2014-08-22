(*Candidate Name*) | (*DateTime*)
===============================================
-----------
## info
+ **Interviewer:** John Ong
+ **Role:** Front End
+ **Interview Type:** phone
+ **Question:** getElementsByClassName

-----------

## tl; dr;

Candidate came from agency role, not strong on app side, expressed some hesitation with the 'full stack' part of the role. Didn't not show strong technical skills, and struggled to get to (mostly) working solution, despite aggressive coaching. Did not get to ask any follow up questions or css questions due to time constraints.


------------
## notes:

### general:
- some difficulty with articulation
- whole dept got layed off
- small projects in django at MRY

---

### qualitative:

*general*
- not looking for full stack
- told him about front-end/full stack
- did not get link

*tell me about yourself*
- started 3 or 4 years ago
- only developer who knew javascript

*tell me about an exciting project you've worked on*
- alamo
    - used druple (and learned)
    - bootstrap (2 or 3)
    - little bit of jquery
- bny mellon app (sum day)
    - twitter crawler for specific hashtag
    - facebook too
    - great designers


*why oscar*
- always wanted to go startup route
- MRY was kinda like a startup
    + beer fridge
    + flexible


*what do you want to do at oscar, what would you contribute?*
- adv js frameworks, single page apps

---

### technical:
- slow start
- haven't used dom api in a while
- wanted to use mdn, asked which is good!
- slow to verbally communicate

- doesn't know how to get document
- var in global
- knows he doesn't know
- very unfamiliar

- had to give this example


        // html
        <div class="class-one class-two"></div>
        
        //js
        el.className = "class-one class-two"


#### code:


    Write a function which tags a string and returns all elements which have a class which matches the string.

    function getElementsByClassName(className) {
        var arr = []
        for (var itr in document.getElementsByTagName(*)) {
            if (classname === document[itr].class){
                arr.push(document[itr])
            }
        }
        
        return arr;
    }
    
    
    // html
    <div class="class-one class-two"></div>
    
    //js
    el.className = "class-one class-two"



