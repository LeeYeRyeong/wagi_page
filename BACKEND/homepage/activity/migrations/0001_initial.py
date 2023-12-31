# Generated by Django 5.0.1 on 2024-01-09 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Activity_mt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mt_image', models.ImageField(upload_to='mt_images/')),
            ],
        ),
        migrations.CreateModel(
            name='Activity_project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_image', models.ImageField(upload_to='project_images/')),
            ],
        ),
        migrations.CreateModel(
            name='Activity_study',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('study_image', models.ImageField(upload_to='study_images/')),
            ],
        ),
    ]
