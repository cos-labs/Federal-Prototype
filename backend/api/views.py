
from api.models import Document, Agency, Grant, Institution
from api.serializers import DocumentSerializer, AgencySerializer, UserSerializer, GrantSerializer, InstitutionSerializer
from rest_framework import generics, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework_json_api.views import RelationshipView
from django.contrib.auth.models import User


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'agencies': reverse('agency-list', request=request, format=format),
        'documents': reverse('document-list', request=request, format=format),
        'grants': reverse('grant-list', request=request, format=format),
        'users': reverse('user-list', request=request, format=format),
        'institutions': reverse('institution-list', request=request, format=format),
    })


class AgencyViewSet(viewsets.ModelViewSet):
    queryset = Agency.objects.all()
    serializer_class = AgencySerializer
    
    def get_queryset(self):
        queryset = Agency.objects.all()
        return queryset
 

class AgencyRelationshipView(RelationshipView):
    queryset = Agency.objects.all()


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


#class DocumentRelationshipView(RelationshipView):
#    queryset = Document.objects.all()


class GrantViewSet(viewsets.ModelViewSet):
    queryset = Grant.objects.all()
    serializer_class = GrantSerializer

    def get_queryset(self):
        queryset=self.queryset
        if 'agency_pk' in self.kwargs:
            return queryset.filter(agency__pk=self.kwargs['agency_pk'])
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


#class GrantRelationshipView(RelationshipView):
#    queryset = Agency.objects.all()


class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    def get_serializer_class(self):
        return UserSerializer

#class UserRelationshipView(RelationshipView):
#    queryset = User.objects.all()

