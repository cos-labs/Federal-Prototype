from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models
import uuid

schema = '''{
  "schema": {
    "title":"Describe the document",
    "description":"The meta data associated with the document that was uploaded.",
    "type":"object",
    "properties": {

      "document-name": {
        "type":"string",
        "title":"Document Name"
      },

      "date-published": {
        "type":"string",
        "title":"Date Published"
      },

      "publisher": {
        "type":"string",
        "title":"Publisher"
      },

      "institution": {
        "type":"string",
        "title":"institution"
      },

      "pi": {
        "type":"string",
        "title":"Principal Investigator"
      },

      "pi-email": {
        "type":"string",
        "title":"Principal Investigator Email"
      },

      "author-list": {
        "type":"string",
        "title":"Author(s)"
      }
    }
  },


  "options": {
    "helper": "The meta data associated with the document that was uploaded.",
    "fields": {

      "document-name": {
        "size": 256,
        "helper": "Please enter the documents name.",
        "placeholder": "documents name",
        "focus" : false
      },

     "date-published": {
       "format": "date-time",
        "helper": "Please enter when the document was published.",
        "placeholder": "e.g. 5/5/1995"
      },

     "publisher": {
        "size": 256,
        "helper": "Please enter the publisher.",
        "placeholder": "Publisher"
      },

     "institution": {
        "size": 256,
        "helper": "Please enter the institution.",
        "placeholder": "Institution"
      },

     "pi": {
        "size": 156,
        "helper": "Please enter the Principal Investigator.",
        "placeholder": "e.g. John Doe"
      },

     "pi-email": {
        "format": "email",
        "size": 256,
        "helper": "Please enter the Principal Investigator Email address.",
        "placeholder": "e.g. JohnDoe@mail.com"
      },

     "author-list": {
        "size": 256,
        "helper": "Please enter the auther(s), if you have more than author use commas to separate them.",
        "placeholder": "e.g. Cameron, Blandford Carolyn Stewart, Ryan Mason"
      }

    }
  }
};
'''

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
    settings = models.TextField(default=schema)

    class Meta:
        permissions = (
            ('view_grant', 'View Grant'),
        )
