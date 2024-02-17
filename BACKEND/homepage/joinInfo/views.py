from django.shortcuts import render,redirect, get_object_or_404
from django import forms
from .models import JoinInfo
from django.http import Http404

# Create your views here.

class ApplicantForm(forms.ModelForm):
    class Meta:
        model = JoinInfo
        fields = ['user_name', 'user_number', 'user_major', 'user_phone_number', 'user_file']

def apply_club_user_info_view(request):
    if request.method == 'POST':
        form = ApplicantForm(request.POST, request.FILES)
        if form.is_valid():
            app_sub=form.save()
            name = ''
            try:
                obj = JoinInfo.objects.get(pk=app_sub.pk)
                name = obj.user_name
            except JoinInfo.DoesNotExist:
                raise Http404('An error occurred. Please try again.')
            
            # join_success.html로 이동, user_name 전달
            return render(request, 'application/join_success.html', {'name': name})
    else:
        form = ApplicantForm()

    return render(request, 'join_info.html', {'form': form})

