from django.shortcuts import render
from .models import People

def show_people(request):
    people_data = People.objects.all()
    return render(request, 'people.html', {'people_data': people_data})

# Create your views here.