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

    },
    "form": {
        "buttons": {
            "submit": {
                "title": "Submit!"
            }
        }
    }
  }
}'''


USER_TYPES = (
    (1, 'researcher'),
    (2, 'moderator'),
    (3, 'coordinator')
)

# necessary for local uploads only
def upload_to(instance, filename):
    instance.uuid = uuid.uuid4().hex
    return 'file/%s' % instance.uuid


class Department(models.Model):
    name = models.CharField(max_length=256)
    settings = models.TextField(default=schema)

    def __str__(self):
        return self.name


class Usertype(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    usertype = models.CharField(choices=USER_TYPES, max_length=50)
    department = models.ForeignKey('Department', related_name='moderator', blank=True, null=True)

    def __str__(self):
        return self.usertype


class Document(models.Model):

    datesubmitted = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=300, default='Untitled')
    path = models.CharField(max_length=50, default='')  # TODO: error handling here

    def __str__(self):
        return self.name

    class Meta:
        permissions = (
            ('view_document', 'View document'),
        )


class Grant(models.Model):
    open = models.BooleanField(default=True)
    number = models.CharField(max_length=100)
    department = models.ForeignKey('Department', related_name='grants')
    document = models.ForeignKey('Document', related_name='grants', default=None, null=True, blank=True)
    status = models.TextField(default='New', max_length=160)
    pistatus = models.TextField(default='New', max_length=160)
    institutionstatus = models.TextField(default='New', max_length=160)
    agencystatus = models.TextField(default='New', max_length=160)    
    questions = models.TextField(default=schema, blank=True, null=True)
    answers = models.TextField(default='', blank=True, null=True)
    metadatarequested = models.BooleanField(default=False)
    uploadrequested = models.BooleanField(default=False)
    institution = models.BooleanField(default=False)
    pi = models.CharField(max_length=255, default='anonymous', null=True)

    def __str__(self):
        return self.number + " / " + self.department.name

    class Meta:
        permissions = (
            ('view_grant', 'View Grant'),
        )

    def save(self, *args, **kwargs):
        if not self.questions:
            self.questions = self.department.settings
        super(Grant, self).save(*args, **kwargs)
