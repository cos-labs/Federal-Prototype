from rest_framework_json_api import serializers, relations
from api.models import Department, Usertype, Document, Grant, Dynamicform
from django.contrib.auth.models import User


class DocumentSerializer(serializers.ModelSerializer):
    # department = serializers.HyperlinkedRelatedField(view_name='department-detail', read_only=True)
    class Meta:
        model = Document
        fields = ('url', 'name', 'path')
        readonly_fields = ('file_link')


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('id', 'name', 'settings')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')


class UsertypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usertype
        fields = ('id', 'department', 'usertype', 'user')


class GrantSerializer(serializers.ModelSerializer):

    # this requires extensive testing! I'm not sure if it actually works, though I believe it does
    department = relations.ResourceRelatedField(
        queryset=Department.objects,
        related_link_url_kwarg='department_pk'  # this line is scary
    )

    class Meta:
        model = Grant
        fields = ('id', 'number', 'department')


class DynamicformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dynamicform
        fields = ('id', 'questions', 'answers', 'grant')
