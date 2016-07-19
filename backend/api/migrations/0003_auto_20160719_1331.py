# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-19 13:31
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_usertype_department'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='document',
            name='department',
        ),
        migrations.AddField(
            model_name='usertype',
            name='department',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='moderator', to='api.Department'),
        ),
    ]
