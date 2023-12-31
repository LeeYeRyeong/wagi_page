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
            return render(request, 'login/basic.html')
        else:
            return render(request, 'login/login.html', {'error': 'username or password is incorrect'})
        
    else:
        return render(request, 'login/login.html')
    

