/// class stuff

function Content() {
  this.content_id = null;
  this.url = '';
}


function Article(article) {
  Content.call(this);

  this.body = article.body;
  this.title = '';
  this.category = '';
  this.topArticlesInCategory = [];

  this.render = function() {
    return _.template($('.article-template').html())(this);
  }
}

_.templateSettings.variable = "x";

Article.prototype = Object.create(Content.prototype);
Article.prototype.constructor = Article;

$(function() {
  // get all articles
  URL = 'http://localhost:5000/articles';

  var test = $.ajax({
    url: URL,
    method: 'get',
    dataType: 'json'
  })
  .done(function(r) {
    articles = r;

    var page_articles = articles.map(function(article) {
      var tempArticle = new Article(article);

      tempArticle.content_id = article.id;
      tempArticle.title = article.title;
      tempArticle.category = article.category;
      tempArticle.topArticlesInCategory = article.top_articles_in_category;
      tempArticle.url = '/article/' + article.id;
      return tempArticle;
    });

    $('.js-content').empty();

    for(var i = 0; i < page_articles.length; i++) {
      if(page_articles[i].title && page_articles[i].body && page_articles[i].url) {
        $('.js-content').append(page_articles[i].render());
      }
    }
  })
})

