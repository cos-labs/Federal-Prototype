from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.contrib.auth.models import Group
from django.db import models
import uuid
from django.http import HttpResponse
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

    #def __init__(self):
    #    super(Agency, self).__init__() 
    #    self.users = self.user_set

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


class Institution(Group):
    
    def __str__(self):
        return self.name


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
    institution = models.ForeignKey('Institution', related_name='grants', default='none', null=True, blank=True)
    pi = models.ForeignKey(User, null=True)
    
    _institution = None
    _pi = None

    def __init__(self, *args, **kwargs):
        super(Grant, self).__init__(*args, **kwargs)
        self._institution = self.institution
        self._pi = self.pi

    def __str__(self):
        return self.number + " / " + self.agency.name

    class Meta:
        permissions = (
            ('view_grant', 'View Grant'),
            ('modify_grant', 'Modify Grant'),
            ('assign_grant_to_pi', 'Assign Grant to PI'),
            ('assign_grant_to_institution', 'Assign Grant to Institution'),
        )

    def save(self, *args, **kwargs):

        if not self.schema:
            self.schema = self.agency.schema

        # Dont update fields without permission:
        if self.schema != self._schema and not agency.user_set.filter(username=request.user.username).exists():
            self.schema = self._schema
        if self.institution != self._institution and not request.user.has_perm('assign_grant_to_institution'):
            self.institution = self._institution    
        if self.pi != self._pi and not request.user.has_perm('assign_grant_to_pi'):
            self.pi = self._pi

        super(Grant, self).save(*args, **kwargs)

        # Fix permissions
        assign_perm('view_grant', self.agency, self)
        assign_perm('modify_grant', self.agency, self)
        assign_perm('view_grant', self.institution, self)
        assign_perm('modify_grant', self.institution, self)
        assign_perm('view_grant', self.pi, self)
        assign_perm('modify_grant', self.pi, self)
        

    

