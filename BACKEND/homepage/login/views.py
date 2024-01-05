from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login

# Create your views here.
def autn_login(request):
    if request.method =='POST':
        form=AuthenticationForm(request, request.POST)
        if form.is_valid():
            auth_login(request, form.get_user())
            return render(request, 'main.html')
        else:
            form = AuthenticationForm()
        context={'form':form}
        return render(request, 'login.html', context)
    else:
        return render(request, 'login.html')
    

