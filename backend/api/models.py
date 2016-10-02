from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.contrib.auth.models import Group
from django.db import models
import uuid
from guardian.shortcuts import assign_perm

defaultSchema = '''{
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


class Agency(Group):
    schema = models.TextField(default=defaultSchema)
 
    def __str__(self):
        return self.name


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
    agency = models.ForeignKey('Agency', related_name='grants')
    document = models.ForeignKey('Document', related_name='grants', default=None, null=True, blank=True)
    status = models.TextField(default='New', max_length=160)
    pistatus = models.TextField(default='New', max_length=160)
    institutionstatus = models.TextField(default='New', max_length=160)
    agencystatus = models.TextField(default='New', max_length=160)
    schema = models.TextField(default=defaultSchema, blank=True, null=True)
    metadata = models.TextField(default='', blank=True, null=True)
    metadatarequested = models.BooleanField(default=False)
    uploadrequested = models.BooleanField(default=False)
    institution = models.BooleanField(default=False)
    pi = models.CharField(max_length=255, default='anonymous', null=True)

    def __str__(self):
        return self.number + " / " + self.agency.name

    class Meta:
        permissions = (
            ('view_grant', 'View Grant'),
        )

    def save(self, *args, **kwargs):
        if not self.schema:
            self.schema = self.agency.schema
        super(Grant, self).save(*args, **kwargs)
        assign_perm('view_grant', self.agency, self)
