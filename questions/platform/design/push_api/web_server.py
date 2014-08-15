from gunicorn.app.base import Application
from gunicorn import util
import logging


class PushApplication(Application):

    def __init__(self, options):
        self.options = options
        super(PushApplication, self).__init__()

    def init(self, *args):
        return self.options

    def load(self):

        logging.basicConfig(filename='server.log',
                            format='%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]',
                            level=logging.INFO)

        return util.import_app("app_server")


if __name__ == "__main__":
    app_options = {
        'bind': 'localhost:8888',
        'workers': 4,
        'errorlog': 'error.log',
        'logLevel': 'info'
    }
    app = PushApplication(app_options)
    app.run()
