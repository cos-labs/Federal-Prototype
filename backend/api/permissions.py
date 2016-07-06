from rest_framework import permissions

class isDepartment(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):

        # User was created without usertype specification
        try:
            usertype = request.user.usertype
        except:
            return False

        if usertype.usertype == "manager":
            return obj.department == usertype.department
        return False
