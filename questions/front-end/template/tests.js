(function() {
  var assert = chai.assert;

  suite('oscarTemplate', function() {
    test('exists on the window and is callable', function() {
      assert.isFunction(window.oscarTemplate);
    });

    test('returns a function', function() {
      var tplString = "hello <%= world %>";
      var template = oscarTemplate(tplString);

      assert.isFunction(template);
    });

    test('returns a working template', function() {
      var simpleTemplate = oscarTemplate("hello <%= world %>");
      var templateResult = simpleTemplate({ world: 'oscar' });

      assert.isString(templateResult);
      assert.equal(templateResult, "hello oscar");
    });

    test('can handle multiple variables', function() {
      var multiTemplate = oscarTemplate("<h1><%= title %></h1><p><%= content %></p>");
      var templateResult = multiTemplate({ title: 'Hello World', content: 'Content' });

      assert.isString(templateResult);
      assert.equal(templateResult, "<h1>Hello World</h1><p>Content</p>");
    });

    test('can interpolate same variable multiple times', function() {
      var multiTemplate = oscarTemplate("<h1><%= title %></h1><p><%= content %></p><p><%= content %></p>");
      var templateResult = multiTemplate({ title: 'Hello World', content: 'Content' });

      assert.isString(templateResult);
      assert.equal(templateResult, "<h1>Hello World</h1><p>Content</p><p>Content</p>");
    });

    test('can handle arbitrary whitespace between escape tags', function() {
      var multiTemplate = oscarTemplate("<h1><%=title%></h1><p><%=         content%></p><p><%=      content      %></p>");
      var templateResult = multiTemplate({ title: 'Hello World', content: 'Content' });

      assert.isString(templateResult);
      assert.equal(templateResult, "<h1>Hello World</h1><p>Content</p><p>Content</p>");
    });
  });
})();
