
from rest_framework import permissions
import requests


class isDepartment(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # User was created without usertype specification
        import ipdb; ipdb.set_trace()
        try:
            usertype = request.user.usertype
        except:
            return False

        if usertype.usertype == "moderator":
            return obj.department == usertype.department
        return False
