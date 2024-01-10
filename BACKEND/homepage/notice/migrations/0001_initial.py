# Generated by Django 5.0.1 on 2024-01-09 18:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('write_time', models.DateTimeField(auto_now_add=True)),
                ('category', models.CharField(choices=[('정기활동', '정기활동'), ('행사', '행사'), ('공모전', '공모전')], default='general', max_length=20)),
                ('notion_title', models.CharField(max_length=60)),
                ('notion_text', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='NotionFile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(blank=True, null=True, upload_to='file/')),
                ('notion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notice.notion')),
            ],
        ),
        migrations.CreateModel(
            name='NotionImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='image/')),
                ('notion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notice.notion')),
            ],
        ),
    ]
