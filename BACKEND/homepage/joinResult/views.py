from django.shortcuts import render, redirect
from datetime import date
from .models import PassId, FailId, SendMail
from django import forms
from joinInfo.models import JoinInfo # 유저인포 받아와서 합불여부 html에 반영하기


# 메인페이지에 있는 join 버튼
def join_button(request):
  return render(request, 'join.html')

# join 버튼 눌렀을 때 
def inquiry(request):
    current_date = date.today() # 현재 날짜
    start_j_date = date(2023, 11, 10) # 지원서 제출 시작 날짜
    end_j_date = date(2023, 11, 17) # 지원서 제 출 끝나는 날짜
    start_r_date = date(2023, 11, 19) # 합격자 조회 시작 날짜
    end_r_date = date(2023, 11, 30) # 합격자 조회 끝나는 날짜
    isDate = 0
    if start_j_date <= current_date <= end_j_date:
        isDate = 1
        return render(request, 'inquiry.html',{'isDate':isDate})
    elif start_r_date <= current_date <= end_r_date:
        isDate = 2
        return render(request, 'inquiry.html',{'isDate':isDate})
    else: # 기간 아닐 경우, 메일 입력 받기
        return redirect('joinResult:writeMail')
    
# 메일 폼
class MailForm(forms.ModelForm):
    class Meta:
        model = SendMail
        fields = ['user_mail']

# 메일 입력 받는 페이지
def writeMail(request):
    if request.method == 'POST':
        input_mail = MailForm(request.POST)
        if input_mail.is_valid():
            input_mail.save()
            return render(request, 'join.html')
    else:
        input_mail = MailForm()
    return render(request, 'write_mail.html', {'input_mail':input_mail}) #메일 입력하고 메인 페이지로 돌아가기

# 메일 입력 받고 나오는 페이지

# 지원서 제출 기간에 메일 알림 가도록


# 합격자 조회 기간일 때 학번 입력 받기
def result(request):
    if request.method == 'POST':
        inputId = request.POST.get('inputId')
        inputId_int = int(inputId)
        if PassId.objects.filter(studentId=inputId): # 합격자일 때
            join_info_object = JoinInfo.objects.get(user_number=inputId_int)
            return render(request, 'result_pass.html',{'number':inputId, 'name':join_info_object.user_name})
        elif FailId.objects.filter(studentId=inputId): # 불합격자일 때
            join_info_object = JoinInfo.objects.get(user_number=inputId_int)
            return render(request, "result_fail.html",{'number':inputId, 'name':join_info_object.user_name})
        else:
           return redirect('joinResult:inquiry')
    return render(request, "inquiry.html")


# 지원서 작성 페이지로 이동
def write_form(request):
    return redirect('joinResult:inquiry') # 지원서 작성 폼으로 연결하기, 내가 하는 거 아님