from django.shortcuts import render, redirect
from datetime import date
from .models import PassId, FailId, SendMail
from django import forms
from joinInfo.models import JoinInfo # 유저인포 받아와서 합불여부 html에 반영하기
from django.core.mail import EmailMessage


# 메인페이지에 있는 join 버튼
def join_button(request):
  return render(request, 'join.html')

# join 버튼 눌렀을 때 
def inquiry(request):
    current_date = date.today() # 현재 날짜
    start_j_date = date(2023, 11, 10) # 지원서 제출 시작 날짜
    end_j_date = date(2023, 12, 5) # 지원서 제 출 끝나는 날짜
    start_r_date = date(2023, 12, 19) # 합격자 조회 시작 날짜
    end_r_date = date(2023, 12, 30) # 합격자 조회 끝나는 날짜
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
            return render(request, 'will_send_mail.html',{'mail':input_mail}) # 메일 입력하고 나오는 페이지
    else:
        input_mail = MailForm()
    return render(request, 'write_mail.html', {'input_mail':input_mail}) 

# 지원서 제출 기간에 메일 알림 가도록
def send_mail(request):
    current_date = date.today() # 현재 날짜
    send_mail_date = date(2023, 12, 25) # 메일 보내는 날짜(지원서 제출 시작 날짜)
    if current_date == send_mail_date:
        subject = "WAGI"	 # 타이틀
        
        receivers = SendMail.objects.values_list('user_mail', flat=True) # 메일 리스트 불러오기
        if receivers:
            to = receivers	 # 수신할 메일 주소
            from_email = "" # 송신할 메일 주소
            message = "메일 보내기 테스트"  # 본문 내용
            EmailMessage(subject=subject, body=message, to=to, from_email=from_email).send()
            return render(request, 'send_mail.html')   
        else:
            return render(request, 'no_send_mail_date.html')
    else: # 메일 보내는 기간 아닐 경우
        return render(request, 'no_send_mail_date.html')

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
    return render(request, "join_info.html") 