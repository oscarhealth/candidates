from loremipsum import get_paragraphs, get_sentences
import json

CATEGORIES = [
  'World',
  'Opinion',
  'Business',
  'Technology',
  'Science',
  'Health',
  'Sports',
  'Arts',
  'Fashion'
]

articles = []
top_articles_in_category_map = {category: [] for category in CATEGORIES}

for i in range (0, 500):
  article = {}
  article['id'] = i

  article['title'] = get_sentences(1)[0]
  article['body'] = "\n".join(get_paragraphs(3))

  category = CATEGORIES[i % len(CATEGORIES)]
  article['category'] = category

  top_articles_in_category = top_articles_in_category_map[category]
  if len(top_articles_in_category) < 3:
    top_articles_in_category.append({
      'id': article['id'],
      'title': article['title']
    })


  articles.append(article)

f = open('testdata.json', 'w')
f.write(json.dumps({
  'articles': articles,
  'top_articles_in_category': top_articles_in_category_map
}))
f.close()
