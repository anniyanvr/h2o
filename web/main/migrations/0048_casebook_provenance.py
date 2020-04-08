# Generated by Django 2.2.10 on 2020-03-16 22:24

from django.db import migrations
from main.models import Casebook

def casebook_provenance(app, schema):
    for casebook in Casebook.objects.filter(old_casebook__isnull=False).select_related('old_casebook').all():
        casebook.provenance = casebook.old_casebook.provenance
        casebook.save()

class Migration(migrations.Migration):

    dependencies = [
        ('main', '0047_auto_20200316_1727'),
    ]

    operations = [
        migrations.RunPython(casebook_provenance, migrations.RunPython.noop)
    ]