from api.models import Document, Department, Usertype, Grant
from api.serializers import DocumentSerializer, DepartmentSerializer, UsertypeSerializer, UserSerializer, GrantSerializer
# from rest_framework import generics, permissions
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from django.contrib.auth.models import User
# from api.permissions import isDepartment


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'documents': reverse('document-list', request=request, format=format),
        'departments': reverse('department-list', request=request, format=format),
        'users': reverse('user-list', request=request, format=format),
        'usertypes': reverse('usertype-list', request=request, format=format),
        'grants': reverse('grant-list', request=request, format=format),
        # 'dynamicforms': reverse('dynamicform-list', request=request, format=format)
    })


class DocumentList(generics.ListCreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    # permission_classes = (permissions.IsAuthenticated, isDepartment)


class DocumentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    # permission_classes = (permissions.IsAuthenticated, isDepartment)


class DepartmentList(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class DepartmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UsertypeList(generics.ListCreateAPIView):
    queryset = Usertype.objects.all()
    serializer_class = UsertypeSerializer


class UsertypeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usertype.objects.all()
    serializer_class = UsertypeSerializer


class GrantList(generics.ListCreateAPIView):
    serializer_class = GrantSerializer
    def get_queryset(self):
        queryset = Grant.objects.all()
        pi = self.request.query_params.get('pi', None)
        institution = self.request.query_params.get('institution', None)
        status = self.request.query_params.get('status', None)
        if pi is not None:
            queryset = queryset.filter(pi=pi)
        if institution is not None:
            queryset = queryset.filter(institution=institution)
        if status is not None:
            queryset = queryset.filter(status=status)

        return queryset
    # permission_classes = (permissions.IsAuthenticated, isDepartment)


class GrantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Grant.objects.all()
    serializer_class = GrantSerializer
    # permission_classes = (permissions.IsAuthenticated, isDepartment)

#
# class DynamicformList(generics.ListCreateAPIView):
#     queryset = Dynamicform.objects.all()
#     serializer_class = DynamicformSerializer
#
#
# class DynamicformDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Dynamicform.objects.all()
#     serializer_class = DynamicformSerializer
