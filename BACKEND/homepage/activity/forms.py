from django import forms
from .models import Activity_mt, Activity_study, Activity_project

class ActivityForm_mt(forms.ModelForm):
    class Meta:
        model = Activity_mt
        fields = ['mt_image']


class ActivityForm_study(forms.ModelForm):
    class Meta:
        model = Activity_study
        fields = ['study_image']


class ActivityForm_project(forms.ModelForm):
    class Meta:
        model = Activity_project
        fields = ['project_image']
