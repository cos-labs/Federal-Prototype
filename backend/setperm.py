from django.contrib.auth.models import User, Group
from guardian.shortcuts import assign_perm
from api.models import Document, GrandID

managers = Group.objects.create(name='managers')
researchers = Group.objects.create(name='researchers')

# Assign manager permissions
assign_perm("change_document", managers, document)
assign_perm("view_document", managers, document)
assign_perm("delete_document", managers, document)
assign_perm("view_grantid", managers, grantid)


# Assign researcher permissions
assign_perm("add_document", researchers, document)




# Add users for testing
#user1 = User.