from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models
import uuid


USER_TYPES = (
    (1, 'researcher'),
    (2, 'moderator')
)

STATUS_CHOICES = (
    (1, 'read'),
    (2, 'unread'),
    (3, 'archived')
)

# def upload_to(instance, filename):
#     instance.uuid = uuid.uuid4().hex
#     return 'file/%s' % (instance.uuid)

class Department(models.Model):
    name = models.CharField(max_length=50)


class Usertype(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    usertype = models.CharField(choices=USER_TYPES, max_length=50)
    department = models.ForeignKey('Department', related_name='moderator', blank=True, null=True)


class Document(models.Model):
    name = models.CharField(max_length=300, default='')
    path = models.CharField(max_length=50, default='')
    # department = models.ForeignKey('Department', related_name="document")

    class Meta:
        permissions = (
            ('view_document', 'View document'),
        )


class Grant(models.Model):
    number = models.CharField(max_length=100)
    department = models.ForeignKey('Department', related_name='grants')
    document = models.ForeignKey('Document', related_name='grants')

    class Meta:
        permissions = (
            ('view_grant', 'View Grant'),
        )
