from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import People
import json

def show_people(request):
    return render(request, 'people.html')

def send_people_data(request):
    people_data = People.objects.values('user_name', 'user_image', 'user_bio', 'user_portfolio1','user_portfolio2', 'generation_number')
    return redirect('people', people_data)

# Create your views here.