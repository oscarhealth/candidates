
function wrapTerms (textNode) {
	var content = textNode.textContent;

	if (!content.trim()) {
		return;
	}

	var currentWord = '';
	var newNodeString = '';

	var nodeAfter = textNode.nextSibling;
	var parentNode = textNode.parentNode;
	parentNode.removeChild(textNode);

	function append (node) {
		if (nodeAfter) {
			parentNode.insertBefore( node, nodeAfter );
		} else {
			parentNode.appendChild( node );
		}
	}

	function createGlossaryNode (word) {
		append( document.createTextNode(newNodeString) );
		var span = document.createElement('span');
		span.setAttribute('data-glossary-term', currentWord.toLowerCase());
		span.textContent = currentWord;
		append( span );
		currentWord = '';
		newNodeString = nextChar;
	}

	for (var i = 0; i < content.length; i++) {
		var nextChar = content.charAt(i);

		if (nextChar.match(/\w/)) {
			currentWord += nextChar;
		} else {
			if (glossaryTerms[currentWord.toLowerCase()]) {
				createGlossaryNode( currentWord );
			} else {
				newNodeString += currentWord + nextChar;
				currentWord = '';
			}
		}
	}
	if (glossaryTerms[currentWord.toLowerCase()]) {
		createGlossaryNode( currentWord );
	}
	newNodeString += currentWord;
	if (newNodeString) {
		append( document.createTextNode( newNodeString ) );
	}
}

function findTextNodes (node) {

	var textNodes = [];

	function iterate (node) {
		for (var i = 0; i < node.childNodes.length; i++) {
			if (node.childNodes[i].nodeType === 1) {
				iterate( node.childNodes[i] );
			}
			if (node.childNodes[i].nodeType === 3) {
				textNodes.push( node.childNodes[i] );
			}
		}
	}

	iterate( document.body );

	textNodes.forEach( wrapTerms );
}

findTextNodes();
var popup = document.getElementById('glossary-popup');
var definitionEl = popup.querySelector('.definition');
var popupVisible = false;
document.body.addEventListener('click', function (event) {
	if (popupVisible && event.target !== popup) {
		popup.classList.remove('visible');
		popupVisible = false;
		return;
	}
	if (event.target.hasAttribute('data-glossary-term')) {
		var term = event.target.getAttribute('data-glossary-term');
		var definition = glossaryTerms[term];

		var location = event.target.getBoundingClientRect();
		definitionEl.innerHTML = definition;

		popup.style.top = (location.bottom + 20) + 'px';
		popup.style.left = (location.left - 150) + 'px';

		popup.classList.add('visible');
		popupVisible = true;
	}
})
