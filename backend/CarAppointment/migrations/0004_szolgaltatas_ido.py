# Generated by Django 4.2 on 2023-04-19 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Carappointment', '0003_remove_megrendelo_auto_megrendelo_auto'),
    ]

    operations = [
        migrations.AddField(
            model_name='szolgaltatas',
            name='ido',
            field=models.CharField(blank=True, max_length=200, verbose_name='Idő'),
        ),
    ]
