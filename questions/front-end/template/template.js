(function() {
  window.oscarTemplate = function(templateString) {
    // templateString is a string that may contain markers formatted like so:
    // 
    //     <%= key %>
    //
    // The return value of oscarTemplate should be a function that, when
    // called with an object, interpolates the aforementioned markers in the
    // template string with the values corresponding to the keys of the
    // passed-in object. For example:
    //
    //     var template = oscarTemplate("hello <%= world %>");
    //     var ret = template({ world: 'oscar' });
    //
    // The variable "ret" would contain the string "hello oscar".
    //
    // Fill in your template function here.
    
    /*
    "world": [
        {
            "start": ...
            "end": ...
        },
        {
        
        }
    ]
    */
    var keys = {


    };

    var markerStart = "<%=";
    var markerEnd = "%>";
    var cursor = 0;
    var startPos = 0;
    var stopCond = 1;
    while (stopCond > 0) {
        cursor = templateString.indexOf(markerStart, startPos);

        endPosition = templateString.indexOf(markerEnd, cursor);
        inBetween = templateString.substr(cursor+3, endPosition-cursor-3);
        inBetween = inBetween.trim();
        
        if (!keys[inBetween]) {
            keys[inBetween] = [];
        }
        
        keys[inBetween].push({
            start: cursor,
            end: endPosition
        });
        console.log(inBetween, keys[inBetween]);
        startPos = endPosition;
        stopCond--;
    }
    return function(params) { 
        var result = templateString;
        for(var key in params) {
            var value = params[key];
            var locations = keys[key];
            locations.forEach(function(config) {

            });
        }
    };
  };
})()
