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

def upload_to(instance, filename):
    instance.uuid = uuid.uuid4().hex
    return 'file/%s' % (instance.uuid)

class Department(models.Model):
    name = models.CharField(max_length=50)


class Usertype(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    usertype = models.CharField(choices=USER_TYPES, max_length=50)
    department = models.ForeignKey('Department', related_name='moderator', blank=True, null=True)


class Document(models.Model):
    date_submitted = models.DateTimeField(auto_now_add=True)
    date_published = models.DateTimeField()
    title = models.CharField(max_length=200)
    publisher = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    status = models.CharField(choices=STATUS_CHOICES, max_length=50)
    department = models.ForeignKey('Department', related_name="document")

    uuid = models.CharField(max_length=32, default='')
    file_link = models.FileField(upload_to=upload_to, default='')

    PI_first_name = models.CharField(max_length=50)
    PI_last_name = models.CharField(max_length=50)
    PI_email = models.EmailField(max_length=100)

    author_list = models.CharField(max_length=500)
    # submitter = models.ForeignKey('auth.User', related_name='documents')

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
