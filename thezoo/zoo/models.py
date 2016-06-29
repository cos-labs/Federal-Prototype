from django.db import models

# Create your models here.

class Animal(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=True, default='')
    species = models.CharField(max_length=100)
    enclosure = models.ForeignKey('Enclosure', related_name='animals')

    class Meta:
        ordering = ('created',)

class Enclosure(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        ordering = ('name',)

class Zookeeper(models.Model):
    name = models.CharField(max_length=100)
    enclosure = models.ForeignKey('Enclosure', related_name='zookeepers')

    class Meta:
        ordering = ('name',)