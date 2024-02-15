from django.shortcuts import render, redirect
from datetime import date
from .models import PassId, FailId, SendMail
from joinInfo.models import JoinInfo # 유저인포 받아와서 합불여부 html에 반영하기
from django.core.mail import EmailMessage
from django.http import JsonResponse

#  join 버튼 눌렀을 떄
def join_button(request):
    current_date = date.today() # 현재 날짜
    start_j_date = date(2024, 2, 1) # 지원서 제출 시작 날짜
    end_j_date = date(2024, 2, 27) # 지원서 제 출 끝나는 날짜
    start_r_date = date(2024, 2, 18) # 합격자 조회 시작 날짜
    end_r_date = date(2024, 2, 27) # 합격자 조회 끝나는 날짜
    isDate = 0
    if start_j_date <= current_date <= end_j_date: # 지원서 제출 기간
        isDate = 1
        return render(request, 'inquiry.html',{'isDate':isDate})
    elif start_r_date <= current_date <= end_r_date: # 합격자 조회 기간
        isDate = 2
        return render(request, 'inquiry.html',{'isDate':isDate})
    else:
        isDate = 0
        if request.method=='GET':
            data={'result':'show',}
            return JsonResponse(data)

# 메일 입력 받음
def writeMail(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        email = request.POST.get('email')

        if not email:
            return JsonResponse({'noEmail': True})

        # email 형식이 올바른지 확인
        if '@' not in email or '.' not in email:
            return JsonResponse({'wrongEmail': True})

        index = email.index('.')
        try:
            email[index + 1]
        except IndexError:
            return JsonResponse({'wrongEmail': True})

        # 이미 등록된 email인지 확인
        if SendMail.objects.filter(user_mail=email).exists():
            return JsonResponse({'emailExists': True})
        
        # email 형식이 정상인 경우
        user_mail = SendMail(user_mail=email)
        user_mail.save()
        return JsonResponse({'works': True})




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
        if PassId.objects.filter(studentId=inputId).exists(): # 합격자일 때
            join_info_object = JoinInfo.objects.get(user_number=inputId_int)
            data = {'result': 'pass', 'number': inputId, 'name': join_info_object.user_name}
            return JsonResponse(data)
        elif FailId.objects.filter(studentId=inputId).exists(): # 불합격자일 때
            join_info_object = JoinInfo.objects.get(user_number=inputId_int)
            data = {'result': 'fail', 'number': inputId, 'name': join_info_object.user_name, }
            return JsonResponse(data)
        else:
           return redirect('joinResult:inquiry')   
    return render(request, 'inquiry.html')

# 지원서 작성 페이지로 이동
def write_form(request):
    return redirect('/join/') 