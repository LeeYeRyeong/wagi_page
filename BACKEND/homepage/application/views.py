from datetime import timezone
from django.shortcuts import render, redirect, get_object_or_404
from django.http import Http404
from django import forms
from django.core.paginator import Paginator
from .models import Application
from joinInfo.models import JoinInfo
from django.contrib.auth.decorators import login_required

# Create your views here.

# forms.ModelForm을 상속받아 지원자 정보를 입력받는 폼을 정의
class ApplicantInfo(forms.ModelForm):
    class Meta:
        model = Application
        fields = ['introduction', 'motivation', 'project_experience', 'study_experience']

        widgets = {'introduction': forms.Textarea(attrs={'class':'inputmodel', 'placeholder':'내용을 입력하세요'}),
            'motivation': forms.Textarea(attrs={'class':'inputmodel', 'placeholder': '내용을 입력하세요'}),
            'project_experience': forms.Textarea(attrs={'class':'inputmodel', 'placeholder':'내용을 입력하세요'}),
            'study_experience': forms.Textarea(attrs={'class':'inputmodel', 'placeholder': '내용을 입력하세요'})
            }

# 지원자 정보를 입력받는 뷰 함수
def applicant_form(request):
    if request.method == 'POST':
        form = ApplicantInfo(request.POST)
        # 폼이 유효한 경우 데이터를 저장하고 페이지 이동
        if form.is_valid():
            app_sub = form.save()
            name = ''
            try:
                obj = JoinInfo.objects.get(pk=app_sub.pk)
                name = obj.user_name
            except JoinInfo.DoesNotExist:
                raise Http404('An error occurred. Please try again.')
            
            # join_success.html로 이동, user_name 전달
            return render(request, 'application/join_success.html', {'name': name})
    else:
        form = ApplicantInfo()

    return render(request, 'application/form.html', {'form': form})

# 지원 성공 페이지를 렌더링하는 뷰 함수
def join_success(request):
    return render(request, 'application/join_success.html')

#각 지원자 정보
@login_required(login_url='/login/')
def admin_join(request):
    page = request.GET.get('page', '1')  # 페이징 기능 추가
    join_list = JoinInfo.objects.order_by('id')
    paginator = Paginator(join_list, 6)  # 페이지당 6개씩 보여주기
    page_obj = paginator.get_page(page)
    context = {'join_list':page_obj}
    return render(request, 'application/admin_join.html', context)


#각 지원자당 상세페이지
@login_required(login_url='/login/')
def join_detail(request, join_id):
    join_info = get_object_or_404(JoinInfo, pk=join_id)
    application_info = get_object_or_404(Application, pk=join_id)
    combined_context = {'application_info': application_info, 'join_info': join_info}
    return render(request, 'application/join_detail.html', combined_context)