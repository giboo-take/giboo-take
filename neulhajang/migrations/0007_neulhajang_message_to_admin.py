# Generated by Django 4.2.4 on 2023-08-31 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('neulhajang', '0006_alter_commitmentinnerphotos_inner_photo_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='neulhajang',
            name='message_to_admin',
            field=models.CharField(default=0, max_length=1000),
            preserve_default=False,
        ),
    ]
