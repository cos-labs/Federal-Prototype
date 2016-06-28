from __future__ import unicode_literals
from django.db import models


class Document(models.Model):
	date_submitted = models.DateTimeField(auto_now_add=True),
	date_published = models.DateTimeField(),
	title = models.CharField(max_length=200),
	publisher = models.CharField(max_length=100),
	institution = models.CharField(max_length=100),
	#departments = models.ManyToManyField(Department),
	# grant_id

	# Need revision
	status = models.CharField(max_length=50),
	file_link = models.CharField(),

	primary_investigator = models.ForeignKey('Author'),
	#authors = models.ManyToManyField(Author),


class Author(models.Model):
	name_first = models.CharField(max_length=50),
	name_middle = models.CharField(max_length=50, blank=True, default=''),
	name_last = models.CharField(max_length=50),
	email = models.EmailField(max_length=100),
	documents = models.ManyToManyField(Document),


class Department(models.Model):
	name = models.CharField(max_length=50),
	documents = models.ManyToManyField(Document),
	# Admins or Users?

#User and Admin Groups