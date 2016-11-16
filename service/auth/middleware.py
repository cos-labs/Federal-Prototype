

from django.contrib.auth import login
from django.contrib.auth.models import User, Group

import urllib
import json
import requests


class OSFTokenAuthMiddleware(object):
   
    def process_request(self, request):
        
        if 'ember_simple_auth:session' not in request.COOKIES:
            return None

        osf_bearer_token = json.loads(urllib.parse.unquote(request.COOKIES['ember_simple_auth:session']))['authenticated']['attributes']['accessToken']

        osf_user = requests.get('http://staging-api.osf.io/v2/users/me/', headers={'Authorization': 'Bearer {}'.format(osf_bearer_token)})
        if osf_user.status_code is not 200:
            return None

        try:
            user = User.objects.get(username=osf_user.json()['data']['id'])
            ##return HttpResponse('Unauthorized', status=401)
        except:
            user = User.objects.create_user(osf_user.json()['data']['id'])
        
        user.backend = 'django.contrib.auth.backends.ModelBackend' # Hack to allow login without authentication
        login(request, user)

        return None


