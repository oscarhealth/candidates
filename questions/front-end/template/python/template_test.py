import unittest


class TemplateTest(unittest.TestCase):

    oscar_template = None

    @classmethod
    def setUpClass(cls):
        try:
            from template import oscar_template
            cls.oscar_template = staticmethod(oscar_template)
        except ImportError:
            pass

    def test_basic(self):
        self.assertTrue(
            callable(self.oscar_template),
            'template function is exported and callable'
        )

    def test_returns_function(self):
        template = self.oscar_template("hello <%= world %>")
        self.assertTrue(
            callable(template),
            'return value from oscar_template is a function'
        )

        template_result = template({'world': 'oscar'})

        self.assertIsInstance(
            template_result,
            (str, unicode),
            "Return type is a string or unicode string"
        )
        self.assertEqual(
            template_result,
            "hello oscar",
            "Returns the expected value"
        )

    def test_multiple_variables(self):
        multi_template = self.oscar_template(
            "<h1><%= title %></h1><p><%= content %></p>")
        template_result = multi_template(
            { 'title': 'Hello World', 'content': 'Content' })

        self.assertIsInstance(
            template_result,
            (str, unicode),
            'return value is a string or unicode'
        )

        self.assertEqual(
            template_result,
            '<h1>Hello World</h1><p>Content</p>',
            'return value interpolated correctly'
        )

    def test_multiple_interpolations(self):
        multi_template = self.oscar_template(
            '<h1><%= title %></h1><p><%= content %></p><p><%= content %></p>'
        )
        template_result = multi_template(
            { 'title': 'Hello World', 'content': 'Content' })

        self.assertEqual(
            template_result,
            '<h1>Hello World</h1><p>Content</p><p>Content</p>',
            'return value interpolated multiple times'
        )

    def test_whitespace(self):
        multi_template = self.oscar_template(
            '<h1><%=title%></h1><p><%=         content%></p><p><%=      content      %></p>'
        )
        template_result = multi_template(
            { 'title': 'Hello World', 'content': 'Content' })

        self.assertEqual(
            template_result,
            '<h1>Hello World</h1><p>Content</p><p>Content</p>',
            'correct return value with arbitrary whitespace'
        )
