from flask import Flask, Response
import json
from modules.crossdomain import crossdomain

app = Flask(__name__)


with open('testdata.json') as json_file:
  json_data = json.load(json_file)

@app.route('/articles')
@crossdomain(origin='*')
def get_articles():
  return Response(json.dumps(json_data), mimetype='application/json')

if __name__ == '__main__':
  app.debug = True
  app.run()
