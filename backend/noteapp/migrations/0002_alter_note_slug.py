# Generated by Django 5.0.6 on 2024-06-19 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('noteapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
    ]