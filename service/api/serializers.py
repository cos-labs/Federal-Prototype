from rest_framework_json_api import serializers, relations
from api.models import Agency, Document, Grant, Institution, Schema
from django.contrib.auth.models import User, Group


class AgencySerializer(serializers.ModelSerializer):
    
    grants = relations.ResourceRelatedField(
        many=True,
        queryset=Grant.objects,
        related_link_view_name='agency-grant-list',
        related_link_url_kwarg='agency_pk',
        self_link_view_name='agency-relationships', )

    user_set = relations.ResourceRelatedField(
        many=True,
        queryset=User.objects,
    ) 
 
    class Meta:
        model = Agency
        fields = (
            'id',
            'name',
            'grants',
            'user_set',
        )

    class JSONAPIMeta:
        resource_name = "agencies"


class DocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = ('url', 'name', 'path', 'datesubmitted')
        readonly_fields = ('file_link')

    class JSONAPIMeta:
        resource_name = "documents"



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'username',
        )

    class JSONAPIMeta:
        resource_name = "users"


class UserPrivateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'groups',
        )

    class JSONAPIMeta:
        resource_name = "users"



class InstitutionSerializer(serializers.ModelSerializer):

    schemas = relations.ResourceRelatedField(
        many=True,
        queryset=Schema.objects,
        related_link_url_kwarg='schema_pk'
    )
    
    class Meta:
        model = Institution
        fields = (
            'id',
            'name',
            'schemas',
            'user_set',
        )

    class JSONAPIMeta:
        resource_name = 'institutions'


class SchemaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Schema
        fields = (
            'id',
            'name',
            'content',
        )

    class JSONAPIMeta:
        resource_name = 'institutions'



class GrantSerializer(serializers.ModelSerializer):

    

    agency = relations.ResourceRelatedField(
        queryset=Agency.objects,
        related_link_url_kwarg='agency_pk'
    )
    document = relations.ResourceRelatedField(
        allow_null=True,
        queryset=Document.objects,
        related_link_url_kwarg='document_pk'
    )
    #    institution = relations.ResourceRelatedField(
    #        allow_null=True,
    #        queryset=Institution.objects,
    #        related_link_url_kwarg='institution_pk'
    #    )

    def update(self, instance, validated_data):
        # Dont update fields without permission:
        if self.schema != self._schema and not request.user.has_perm('set_schema'):
            self.schema = self._schema
        if self.pi != self._pi and not request.user.has_perm('assign_grant_to_pi'):
            self.pi = self._pi
        if self.institution:
            if self.institution != self._institution and not request.user.has_perm('assign_grant_to_institution'):
                self.institution = self._institution    
        return super(GrantSerializer, self).save(*args, **kwargs)
    
    class Meta:
        model = Grant
        fields = (
            'agency',
            'agencystatus',
            'document',
            'id',
            'institution',
            'institutionstatus',
            'metadata',
            'metadatarequested',
            'number',
            'open',
            'pi',
            'pistatus',
            'schema',
            'status',
            'uploadrequested', )

    class JSONAPIMeta:
        resource_name = "grants"

