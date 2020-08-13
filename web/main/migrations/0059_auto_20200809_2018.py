# Generated by Django 2.2.13 on 2020-08-09 20:18

import django.core.validators
from django.db import migrations, models
import main.models
import re


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0058_auto_20200809_1358'),
    ]

    operations = [
        migrations.AddField(
            model_name='casebook',
            name='edition_slug',
            field=models.CharField(blank=True, max_length=300, null=True, validators=[django.core.validators.RegexValidator(re.compile('^[-\\w]+\\Z'), "Enter a valid 'slug' consisting of Unicode letters, numbers, underscores, or hyphens.", 'invalid')]),
        ),
        migrations.AddField(
            model_name='historicalcasebook',
            name='edition_slug',
            field=models.CharField(blank=True, max_length=300, null=True, validators=[django.core.validators.RegexValidator(re.compile('^[-\\w]+\\Z'), "Enter a valid 'slug' consisting of Unicode letters, numbers, underscores, or hyphens.", 'invalid')]),
        ),
        migrations.AlterField(
            model_name='commontitle',
            name='slug',
            field=models.CharField(max_length=300, validators=[django.core.validators.RegexValidator(re.compile('^[-\\w]+\\Z'), "Enter a valid 'slug' consisting of Unicode letters, numbers, underscores, or hyphens.", 'invalid')]),
        ),
        migrations.AlterField(
            model_name='user',
            name='public_url',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True, validators=[django.core.validators.RegexValidator(re.compile('^[-\\w]+\\Z'), "Enter a valid 'slug' consisting of Unicode letters, numbers, underscores, or hyphens.", 'invalid'), main.models.validate_unused_prefix]),
        ),
    ]
