from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import People
import json

def show_people(request):
    people_data = People.objects.values('user_name', 'user_image', 'user_bio', 'user_portfolio1','user_portfolio2', 'generation_number')
    #for person in people_data:
        #person['user_image'] = request.build_absolute_uri(person['user_image'])
    return render(request, 'people.html', {'people_data':people_data})

# Create your views here.
