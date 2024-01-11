from django.http import JsonResponse
from django.shortcuts import render
from .models import People

def show_people(request):
    people_data = People.objects.values('user_name', 'user_image', 'user_bio', 'user_portfolio1','user_portfolio2', 'generation_number')
    return JsonResponse(list(people_data), safe=False)

# Create your views here.