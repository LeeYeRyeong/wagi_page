from django.shortcuts import render, redirect, get_object_or_404
from .models import Notion, NotionImage, NotionFile
from .forms import NotionForm, NotionImageForm, NotionFileForm
from django.http import JsonResponse
from django.urls import reverse

# create
def notice_create(request):
    if request.method == 'POST':
        notion_title = request.POST.get('notion_title', '')
        notion_text = request.POST.get('notion_text', '')
        selected_category = request.POST.get('selectedCategory', 'general')  # 기본값은 'general'

        # Notion 모델에 저장
        notion = Notion.objects.create(
            notion_title=notion_title,
            notion_text=notion_text,
            category=selected_category
        )

        # NotionImage 모델에 저장 (이 부분은 필요에 따라 수정)
        images = request.FILES.getlist('image')
        for img in images:
            NotionImage.objects.create(notion=notion, image=img)

        # 이후 필요한 처리 추가...

        return redirect('notice_list')

    return render(request, 'Notice_manager_writing.html')

def get_notices_by_category(request):
    category = request.GET.get('category') 
    notices = [] 
    if category=='regularActivity' :
        notices = Notion.objects.filter(category=category).order_by('-write_time')
    elif category == 'event':
        notices = Notion.objects.filter(category=category).order_by('-write_time')
    elif category == 'competition':
        notices = Notion.objects.filter(category=category).order_by('-write_time')

    return render(request, 'Notice_main.html', {'notices': notices})


# read

def notice_list(request):
    notices = Notion.objects.all().order_by('-write_time')
    return render(request, 'Notice_main.html', {'notices': notices})



def notice_detail(request, notion_id):
    notice = get_object_or_404(Notion, pk=notion_id)
    images = NotionImage.objects.filter(notion=notice)
    return render(request, 'Notice_manager_record.html', {'notice': notice, 'images': images})

def edit_notice(request, notion_id):
    notice = get_object_or_404(Notion, pk=notion_id)
    images = NotionImage.objects.filter(notion=notice)
    notion=Notion.objects.get(id=notion_id)
    images.delete()

    if request.method == 'POST':
        notion.notion_title = request.POST['notion_title']
        notion.notion_text = request.POST['notion_text']
        notion.category = request.POST['selectedCategory'] # 기본값은 'general'

        # Notion 모델에 저장
        notion.save()

        # NotionImage 모델에 저장 (이 부분은 필요에 따라 수정)
        images = request.FILES.getlist('image')
        for img in images:
            NotionImage.objects.create(notion=notion, image=img)

        return redirect(reverse('notice_detail', kwargs={'notion_id': notice.id}))

    return render(request, 'notice_manager_edit.html' ,{'notice': notice, 'images': images})