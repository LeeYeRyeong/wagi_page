from django.shortcuts import render, get_object_or_404
from django.http import Http404
from django.core.paginator import Paginator
from django import forms
from .models import Application
from joinInfo.models import JoinInfo

# Create your views here.

class ApplicantInfo(forms.ModelForm):
    class Meta:
        model = Application
        fields = ['introduction', 'motivation', 'project_experience', 'study_experience']

def applicant_form(request):

    if request.method == 'POST':
        form = ApplicantInfo(request.POST)
        
        if form.is_valid():
            app_sub = form.save()
            name = ''
            # JoinInfo 모델에서 지원서 제출의 기본 키를 사용하여 user_name을 가져옴
            try:
                obj = JoinInfo.objects.get(pk=app_sub.pk)
                name = obj.user_name
            except JoinInfo.DoesNotExist:
                # JoinInfo가 존재하지 않는 경우 404 오류를 발생시킴
                raise Http404('오류가 발생했습니다. 다시 시도해주세요.')
            
            # 성공 페이지를 가져온 user_name과 함께 렌더링
            return render(request, 'success.html', {'name': name})
    else:
        # 폼이 제출되지 않았다면 ApplicantInfo 폼의 새 인스턴스를 생성
        form = ApplicantInfo()

    # 폼 인스턴스와 함께 폼 페이지를 렌더링
    return render(request, 'form.html', {'form': form})

# 지원 성공 페이지를 렌더링하기 위한 뷰 함수를 정의
def application_success(request):
    return render(request, 'success.html')

def admin_join(request):
    page = request.GET.get('page', '1')  # 페이지
    join_list = JoinInfo.objects.order_by('id')
    paginator = Paginator(join_list, 10)  # 페이지당 10개씩 보여주기
    page_obj = paginator.get_page(page)
    context = {'join_list':page_obj}
    return render(request, 'admin_join.html', context)


def join_detail(request, join_id):
    join_info = get_object_or_404(JoinInfo, pk=join_id)
    application_info = get_object_or_404(Application, pk=join_id)
    combined_context = {'application_info': application_info, 'join_info': join_info}
    return render(request, 'join_detail.html', combined_context)