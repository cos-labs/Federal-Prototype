from rest_framework import serializers
from zoo.models import Animal, Enclosure, Zookeeper


class AnimalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Animal
        fields = ('url', 'name', 'species', 'enclosure')


class EnclosureSerializer(serializers.HyperlinkedModelSerializer):
    animals = serializers.HyperlinkedRelatedField(many=True, view_name='animal-detail', read_only=True)
    zookeepers = serializers.HyperlinkedRelatedField(many=True, view_name='zookeeper-detail', read_only=True)

    class Meta:
        model = Enclosure
        fields = ('url', 'name', 'animals', 'zookeepers')


class ZookeeperSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Zookeeper
        fields = ('url', 'name', 'enclosure')
