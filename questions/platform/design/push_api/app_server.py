import logging

from flask import Flask, request, make_response
import requests
from simplejson import dumps

application = Flask(__name__)

logger = logging.getLogger(__name__)


@application.route('/')
def home():
    return "Apple Push API"


@application.route("/send_push", methods=['POST'])
def send_push():
    response = make_response()

    try:
        request_json = request.get_json()
    except:
        response.status_code = 400
        response.set_data('Unexpected error reading input.')
        return response

    expected_params = [
        'installation_id',
        'message',
    ]

    if any([expected_param not in request_json for expected_param in expected_params]):
        response.status_code = 400
        response.set_data('Missing required parameters')

    else:
        response_code = generate_action(
            installation_id=request_json['installation_id'],
            message=request_json['message'])

        response.set_data(dumps({'api_status_code': response_code}))

    return response


@application.route("/device_status", methods=['POST'])
def get_status():
    response = make_response()

    try:
        request_json = request.get_json()
    except:
        response.status_code = 400
        response.set_data('Unexpected error reading input.')
        return response

    expected_params = [
        'installation_id',
    ]

    if any([expected_param not in request_json for expected_param in expected_params]):
        response.status_code = 400
        response.set_data('Missing required parameters')

    else:
        response.set_data(dumps({'push_enabled': request_json['installation_id'] % 3 != 0}))

    return response


def generate_action(installation_id, message):

    installation_id = int(installation_id)

    if installation_id % 3 == 1:

        headers = {
            "X-Parse-Application-Id": "zQPFyH0PJHFgD0jah78g1o7F4cHNq95IyYwPC826",
            "X-Parse-REST-API-Key": "7LCApHW9YnHIKVIetxu7jV117ngYdlvRiQexWv5j",
            "Content-Type": "application/json"}

        try:
            payload = dict(
                where=dict(installationId='74e7f3fe-f970-4719-aef9-1d2210c92769'),
                expiration_interval=60,
                data=dict(alert=message))

            status = requests.post(
                url="https://api.parse.com/1/push",
                data=dumps(payload),
                headers=headers)

            logger.info("parse.com call status_code: %s", status.status_code)

            if status.status_code == 200:
                success = True
            else:
                success = False

        except requests.RequestException:
            logger.exception("error calling parse.com")
            success = False

        return int(success)

    elif installation_id % 3 == 2:
        return 2
    else:
        return 3
