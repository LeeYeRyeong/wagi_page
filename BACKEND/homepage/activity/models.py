from django.db import models
import os

class Activity_mt(models.Model):
    mt_image = models.ImageField(upload_to='mt_images/', blank=True)

    def delete(self, *args, **kwargs):
        self.delete_image(self.mt_image)
        super().delete(*args, **kwargs)

    def delete_image(self, image_field):
        if image_field:
            image_field.delete()

    def __str__(self):
        return f'{self.id} - Activity_mt'


class Activity_study(models.Model):
    study_image = models.ImageField(upload_to='study_images/', blank=True)

    def delete(self, *args, **kwargs):
        self.delete_image(self.study_image)
        super().delete(*args, **kwargs)

    def delete_image(self, image_field):
        if image_field:
            # os.remove(image_field.path)
            image_field.delete()

    def __str__(self):
        return f'{self.id} - Activity_study'


class Activity_project(models.Model):
    project_image = models.ImageField(upload_to='project_images/', blank=True)

    def delete(self, *args, **kwargs):
        self.delete_image(self.project_image)
        super().delete(*args, **kwargs)

    def delete_image(self, image_field):
        if image_field:
            # os.remove(image_field.path)
            image_field.delete()

    def __str__(self):
        return f'{self.id} - Activity_project'
