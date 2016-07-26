from rest_framework import serializers
from api.models import Department, Usertype, Document, Grant, Dynamicform
from django.contrib.auth.models import User


class DocumentSerializer(serializers.HyperlinkedModelSerializer):
    # department = serializers.HyperlinkedRelatedField(view_name='department-detail', read_only=True)
    class Meta:
        model = Document
        fields = ('url', 'datesubmitted','title','filelink')
        readonly_fields = ('filelink')


class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ('url', 'name', 'settings')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'password')


class UsertypeSerializer(serializers.HyperlinkedModelSerializer):
    department = serializers.HyperlinkedRelatedField(view_name='department-detail', read_only=True)

    class Meta:
        model = Usertype
        fields = ('url', 'department', 'usertype', 'user')


class GrantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Grant
        fields = ('url', 'number', 'department')
        # fields = ('url', 'number')

class DynamicformSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dynamicform
        fields = ('url', 'questions', 'answers', 'grant')
