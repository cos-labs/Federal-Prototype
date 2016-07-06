# Run this code from the django shell after migrating in order to establish usergroups and related permissions

from django.contrib.auth.models import Group
from guardian.shortcuts import assign_perm

managers = Group.objects.create(name='managers')
researchers = Group.objects.create(name='researchers')

# Assign manager permissions
assign_perm("api.change_document", managers)
assign_perm("api.view_document", managers)
assign_perm("api.delete_document", managers)
assign_perm("api.view_grant", managers)

# Assign researcher permissions
#assign_perm("add_document", researchers, document)

# Add users for testing
