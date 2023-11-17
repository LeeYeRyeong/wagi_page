from django.shortcuts import render,redirect
from django import forms
from .models import JoinInfo

# Create your views here.

class ApplicantForm(forms.ModelForm):
    class Meta:
        model = JoinInfo
        fields = ['user_name', 'user_number', 'user_major', 'user_phone_number']

def apply_club_user_info_view(request):
    if request.method == 'POST':
        form = ApplicantForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('application_success')
    else:
        form = ApplicantForm()

    return render(request, 'join_info.html', {'form': form})

