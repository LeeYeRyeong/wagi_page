from django import forms
from .models import Notion, NotionImage, NotionFile

class NotionForm(forms.ModelForm):
    class Meta:
        model = Notion
        fields = ['category', 'notion_title', 'notion_text']

class NotionImageForm(forms.ModelForm):
    class Meta:
        model = NotionImage
        fields = ['image']

class NotionFileForm(forms.ModelForm):
    class Meta:
        model = NotionFile
        fields = ['file']