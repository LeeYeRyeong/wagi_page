from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import People
import json

def show_people_1(request):
    people_data = People.objects.values('user_name', 'user_image', 'user_bio', 'user_portfolio1','user_portfolio2', 'generation_number')
    return render(request, 'people_1.html', {'people_data':people_data})

def show_people_2(request):
    people_data = People.objects.values('user_name', 'user_image', 'user_bio', 'user_portfolio1','user_portfolio2', 'generation_number')
    return render(request, 'people_2.html', {'people_data':people_data})


