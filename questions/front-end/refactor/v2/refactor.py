from flask import Flask, jsonify, request
import json
from modules.crossdomain import crossdomain

app = Flask(__name__)


with open('testdata.json') as json_file:
    data = json.load(json_file)


@app.route('/articles', methods=['GET'])
@crossdomain(origin='*')
def get_articles():
    articles = data['articles']

    start = int(request.args.get('start', 0))
    limit = int(request.args.get('limit', len(articles)))

    articles = articles[start:start + limit]

    return jsonify(articles=articles,
                   topArticlesInCategory=data['top_articles_in_category'],
                   resultCount=len(articles),
                   apiVersion=2)

if __name__ == '__main__':
    app.debug = True
    app.run()
