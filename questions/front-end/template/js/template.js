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
  };
})()
