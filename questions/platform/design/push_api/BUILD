python_library(
  name = 'app',
  sources = ['app_server.py'],
  dependencies = [
    'third_party/third_party:Flask',
    'third_party/third_party:requests',
    'third_party/third_party:simplejson',
  ],
)

python_binary(
  name = 'push_server',
  source = 'web_server.py',
  dependencies = [
    ':app',
    'third_party/third_party:gunicorn',
  ],
)
