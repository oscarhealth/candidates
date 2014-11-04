/// class stuff

function Content() {
  this.content_id = undefined;
  this.url = ''
}


function Article() {
  Content.call(this);

  this.body = '';
  this.title = '';
  this.category = '';
  this.topArticlesInCategory;

  this.render = function() {
    return _.template($('.aritcle-template').html())(this)
  }
}

_.templateSettings.variable = "x";

Article.prototype = Object.create(Content.prototype);
Article.prototype.constructor = Article;

$(function() {
  // get all articles
  var page_articles = [],
    URL = 'http://localhost:5000/articles';

  var test = $.ajax({
    url: URL,
    method: 'get',
    dataType: 'json'
  })
  .done(function(r) {
    console.log('done');
    console.log(r);
    // articles = eval(r);
    var articles = r.articles,
      topArticlesInCategory = r.topArticlesInCategory,
      len = articles.length;

    for(var i = 0; i < len; ++i) {
      var tempArticle = new Article();
      var article = articles[i];

      tempArticle.content_id = article.id;
      tempArticle.title = article.title ? article.title : 'Default Title';
      tempArticle.body = article.body;
      tempArticle.category = article.category;
      tempArticle.topArticlesInCategory = topArticlesInCategory[article.category];
      tempArticle.url = '/article/' + article.id;

      // console.log(tempArticle)

      page_articles.push(tempArticle);
    }

      $('.js-content').html('');

      var template = '';

    for(var i = 0; i < page_articles.length; i++) {
      if(page_articles[i].title && page_articles[i].body && page_articles[i].url) {
        template += page_articles[i].render();
      }
    }

    $('.js-content').append(template);
  })
})

