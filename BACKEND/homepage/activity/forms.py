from django import forms
from .models import Activity_mt, Activity_study, Activity_project

class MultipleFileInput(forms.ClearableFileInput):
    allow_multiple_selected = True

class MultipleFileField(forms.FileField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault("widget", MultipleFileInput())
        super().__init__(*args, **kwargs)

    def clean(self, data, initial=None):
        single_file_clean = super().clean
        if not isinstance(data, (list, tuple)):
            data = [data]
        result = [single_file_clean(d, initial) for d in data]
        return result


class ActivityForm_mt(forms.Form):
    mt_image = MultipleFileField(required=False)
    
    

class ActivityForm_study(forms.Form):
    study_image = MultipleFileField(required=False)
    
    

class ActivityForm_project(forms.Form):
    project_image = MultipleFileField(required=False)