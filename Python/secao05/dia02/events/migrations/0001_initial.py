# Generated by Django 5.0.2 on 2024-02-22 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('date', models.DateTimeField()),
                ('location', models.CharField(max_length=200)),
                ('event_type', models.CharField(choices=[('C', 'Conference'), ('S', 'Seminar'), ('W', 'Workshop'), ('O', 'Other')], max_length=50)),
                ('is_remote', models.BooleanField(default=False)),
                ('image', models.ImageField(blank=True, upload_to='events/img')),
            ],
        ),
    ]
