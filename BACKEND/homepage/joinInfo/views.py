from django.shortcuts import render,redirect, get_object_or_404
from django import forms
from .models import JoinInfo
from django.http import Http404
from django.contrib import messages

# Create your views here.

class ApplicantForm(forms.ModelForm):
    class Meta:
        model = JoinInfo
        fields = ['user_name', 'user_number', 'user_major', 'user_phone_number', 'user_file']

def apply_club_user_info_view(request):
    if request.method == 'POST':
        form = ApplicantForm(request.POST, request.FILES)
        idcheck=request.POST.get('user_number')
        #기존에 한번 지원한 친구들은 빠꾸맥이기~ 어쩔수 엇ㅂ어 안하면 오류나; 정신똑바로차리고살아야지이런각박한세상속에서
        if JoinInfo.objects.filter(user_number=idcheck).exists():
            error_message = '이미 지원 완료된 학번입니다.<br>관련 문의는 인스타그램 @sswu_wagi로 부탁드립니다.'
            messages.error(request, error_message, extra_tags='safe')
            return render(request, 'join_info.html', {'form': form})
        
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

