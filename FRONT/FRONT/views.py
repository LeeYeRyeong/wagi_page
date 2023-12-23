# FRONT/views.py 파일

from django.shortcuts import render

def people_view(request):
    # 뷰의 기능을 작성
    return render(request, 'people.html', context={})
