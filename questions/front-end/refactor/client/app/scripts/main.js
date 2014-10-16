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
  this.topArticlesInCategory = [];

  this.render = function() {
    return _.template($('.aritcle-template').html())(this)
  }
}

_.templateSettings.variable = "x";

Article.prototype = Object.create(Content.prototype);
Article.prototype.constructor = Article;
page_articles = [];

$(function() {
  // get all articles
  URL = 'http://localhost:5000/articles';

  var test = $.ajax({
    url: URL,
    method: 'get',
    dataType: 'text'
  })
  .done(function(r) {
    console.log('done');
    console.log(r)
    articles = eval(r);

    for(var i = 0; i < articles.length; ++i) {
      var tempArticle = new Article(articles[i]);

      tempArticle.content_id = articles[i].id;
      tempArticle.title = articles[i].title;
      tempArticle.body = articles[i].body;
      tempArticle.category = articles[i].category;
      tempArticle.topArticlesInCategory = articles[i].top_articles_in_category;
      tempArticle.url = '/article/' + articles[i].id;

      // console.log(tempArticle)

      page_articles.push(tempArticle);
    }

      $('.js-content').html('');

    for(var i = 0; i < page_articles.length; i++) {
      if(page_articles[i].title && page_articles[i].body && page_articles[i].url) {
        $('.js-content').append(page_articles[i].render());
      }
    }
  })
})

