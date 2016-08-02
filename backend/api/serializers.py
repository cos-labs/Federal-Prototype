from rest_framework_json_api import serializers, relations
from api.models import Department, Usertype, Document, Grant
from django.contrib.auth.models import User


class DocumentSerializer(serializers.ModelSerializer):
    # department = serializers.HyperlinkedRelatedField(view_name='department-detail', read_only=True)
    class Meta:
        model = Document
        fields = ('url', 'name', 'path', 'datesubmitted')
        readonly_fields = ('file_link')

    class JSONAPIMeta:
        resource_name = "documents"


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('id', 'name', 'settings')

    class JSONAPIMeta:
        resource_name = "departments"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    class JSONAPIMeta:
        resource_name = "users"


class UsertypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usertype
        fields = ('id', 'department', 'usertype', 'user')

    class JSONAPIMeta:
        resource_name = "usertypes"


class GrantSerializer(serializers.ModelSerializer):

    # this requires extensive testing! I'm not sure if it actually works, though I believe it does
    department = relations.ResourceRelatedField(
        queryset=Department.objects,
        related_link_url_kwarg='department_pk'  # this line is scary
    )

    document = relations.ResourceRelatedField(
        queryset=Document.objects,
        related_link_url_kwarg='document_pk'  # this line is scary
    )

    class Meta:
        model = Grant
        fields = ('id', 'number', 'status', 'document', 'department', 'questions', 'answers')

    class JSONAPIMeta:
        resource_name = "grants"
#
# class DynamicformSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Dynamicform
#         fields = ('id', 'questions', 'answers', 'grant')
#     class JSONAPIMeta:
#         resource_name = "dynamicforms"
