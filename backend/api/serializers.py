from rest_framework_json_api import serializers, relations
from api.models import Agency, Document, Grant
from django.contrib.auth.models import User


class AgencySerializer(serializers.ModelSerializer):
    
    grants = relations.ResourceRelatedField(
        many=True,
        queryset=Grant.objects,
        related_link_view_name='agency-grant-list',
        related_link_url_kwarg='agency_pk',
        self_link_view_name='agency-relationships', 
    )
    
    class Meta:
        model = Agency
        fields = ('id', 'name', 'schema', 'grants')

    class JSONAPIMeta:
        resource_name = "agencies"


class DocumentSerializer(serializers.ModelSerializer):
    # department = serializers.HyperlinkedRelatedField(view_name='department-detail', read_only=True)
    class Meta:
        model = Document
        fields = ('url', 'name', 'path', 'datesubmitted')
        readonly_fields = ('file_link')

    class JSONAPIMeta:
        resource_name = "documents"



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    class JSONAPIMeta:
        resource_name = "users"


class GrantSerializer(serializers.ModelSerializer):

    # this requires extensive testing! I'm not sure if it actually works, though I believe it does
    agency = relations.ResourceRelatedField(
        queryset=Agency.objects,
        related_link_url_kwarg='agency_pk'  # this line is scary
    )

    document = relations.ResourceRelatedField(
        queryset=Document.objects,
        related_link_url_kwarg='document_pk'  # this line is scary
    )

    class Meta:
        model = Grant
        fields = (
            'id',
            'open',
            'number',
            'pistatus',
            'status',
            'institutionstatus',
            'agencystatus',
            'metadatarequested',
            'uploadrequested',
            'document',
            'agency',
            'schema',
            'metadata',
            'institution',
            'pi'
        )

    class JSONAPIMeta:
        resource_name = "grants"

