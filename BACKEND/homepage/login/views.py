from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login
from django.contrib import auth 

# Create your views here.
def login(request):
    if request.method =='POST':
        username=request.POST['username']
        password=request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        
        if user is not None: 
            auth_login(request, user)
            return render(request, 'home.html')
        else:
            return render(request, 'login.html', {'error': 'username or password is incorrect'})
        
    else:
        return render(request, 'login.html')
    

from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login
from django.contrib import auth 
from django.http import HttpResponse

# Create your views here.
def login(request):
    if request.method =='POST':
        username=request.POST['username']
        password=request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        
        if user is not None: 
            auth_login(request, user)
            return render(request, 'home.html')
        else:
            return render(request, 'login.html', {'error': 'username or password is incorrect'})
        
    else:
        return render(request, 'login.html')
    

def home(request):
    # "/health" 경로로 들어온 요청에 대해서만 health check 응답을 반환
    if request.path == '/health':
        # Health check 로직 추가 가능
        # 예: 데이터베이스 연결 확인, 외부 서비스 연결 확인 등

        # Health check이 성공하면 200 상태 코드를 반환
        return HttpResponse(status=200)

    # "/health" 이외의 다른 경로에 대해서는 일반적인 홈 페이지를 렌더링
    return render(request, 'home.html')

