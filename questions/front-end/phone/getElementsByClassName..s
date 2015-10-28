function getElementsByClassName(className) {
  // TODO return an array of matching elements
}

// Document object that mimicks window.document

var document = {
  children: [
    {
      className: 'myclass yourclass',
      children: [
        {
          className: 'thatclass',
          children: []
        },
        {
          className: 'thisclass thatclass',
          children: []
        }
      ]
    },
    {
      className: 'myclass',
      children: [
        {
          className: 'herclass thatclass',
          children: [
            {
              className: 'myclass thisclass',
              children: []
            }
          ]
        }
      ]
    },
    {
      className: 'yourclass',
      children: []
    },
    {
      className: 'hisclass',
      children: [
        {
          className: 'myclass',
          children: []
        },
        {
          className: 'thatclass',
          children: []
        }
      ]
    },
    {
      className: 'herclass myclass',
      children: [
        {
          className: 'thatclass herclass',
          children: []
        },
        {
          className: '',
          children: [
            {
              className: 'thatclass myclass',
              children: []
            }
          ]
        },
        {
          className: 'thisclass thatclass',
          children: []
        }
      ]
    }
  ]
};


var nodesWithClassName = getElementsByClassName('myclass');

var expect = require('chai').expect;

expect(nodesWithClassName).to.be.an('array');
expect(nodesWithClassName.length).to.be.equal(6);
expect(nodesWithClassName.indexOf(document.children[0])).to.not.equal(-1);
expect(nodesWithClassName.indexOf(document.children[1])).to.not.equal(-1);
expect(nodesWithClassName.indexOf(document.children[1].children[0].children[0])).to.not.equal(-1);
expect(nodesWithClassName.indexOf(document.children[3].children[0])).to.not.equal(-1);
expect(nodesWithClassName.indexOf(document.children[4])).to.not.equal(-1);
expect(nodesWithClassName.indexOf(document.children[4].children[1].children[0])).to.not.equal(-1);

console.log('All tests have passed!')
