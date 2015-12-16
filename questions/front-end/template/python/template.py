def oscar_template(template_string):
    """
    templateString is a string that may contain markers formatted like so::

        <%= key %>

    The return value of oscar_template should be a function that, when
    called with an object, interpolates the aforementioned markers in the
    template string with the values corresponding to the keys of the
    passed-in object. For example::

        template_fn = oscar_template("hello <%= world %>")
        ret = template_fn({ 'world': 'oscar' });

    The variable "ret" would contain the string "hello oscar".

    Fill in your template function here.
    """
    pass
