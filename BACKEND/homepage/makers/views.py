
from django.shortcuts import render



def show_makers(request):
    return render(request, 'makers.html')

