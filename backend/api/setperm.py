# Run this code from the django shell after migrating in order to establish usergroups and related permissions
from django.contrib.auth.models import Group, User
from guardian.shortcuts import assign_perm
from api.models import Department, Usertype, Document

# Establish user groups
managers = Group.objects.create(name='managers')
researchers = Group.objects.create(name='researchers')

# Assign manager permissions
assign_perm("api.change_document", managers)
assign_perm("api.view_document", managers)
assign_perm("api.delete_document", managers)
assign_perm("api.view_grant", managers)

# Assign researcher permissions
assign_perm("api.add_document", researchers)

# TESTING
# Add users, departments, docs for testing
d1 = Department(name="DOE")
d1.save()
d2 = Department(name="DOD")
d2.save()

u1 = User.objects.create_user(username="user1", password="password1")
u1.save()
u1type = Usertype(user=u1, usertype="manager", department=d1)
u1type.save()
u1.groups.add(managers)

u2 = User.objects.create_user(username="user2", password="password2")
u2.save()
u2type = Usertype(user=u2, usertype="researcher", department=d2)
u2type.save()
u2.groups.add(researchers)

doc1 = Document(date_published="2016-12-20 00:00", title="DOEdoc", publisher="blah", institution="blah", status="unread", file_link="blah", PI_first_name="first",
    PI_last_name="last", PI_email="this@that.com", author_list="1, 2, 3", department=d1)
doc1.save()

#Should all print true
u1.has_perm("api.change_document")
u1.has_perm("api.view_grant")
u2.has_perm("api.add_document")

#Should all print false
u1.has_perm("api.change_department")
u2.has_perm("view_document")
u2.has_perm("delete_document")
