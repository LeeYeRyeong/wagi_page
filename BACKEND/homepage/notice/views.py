from django.shortcuts import render, redirect, get_object_or_404
from .models import Notion, NotionImage, NotionFile
from .forms import NotionForm, NotionImageForm, NotionFileForm
from django.http import JsonResponse
from django.urls import reverse
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.contrib.auth.decorators import login_required

# create
@login_required(login_url='/login/')
def notice_create(request):
    if request.method == 'POST':
        notion_title = request.POST.get('notion_title', '')
        notion_text = request.POST.get('notion_text', '')
        selected_category = request.POST.get('selectedCategory', 'general')

        # Notion 모델에 저장
        notion = Notion.objects.create(
            notion_title=notion_title,
            notion_text=notion_text,
            category=selected_category
        )

       
        images = request.FILES.getlist('image')
        files = request.FILES.getlist('file')
        for img in images:
            NotionImage.objects.create(notion=notion, image=img)
            images = request.FILES.getlist('image')
        for file in files:
            NotionFile.objects.create(notion=notion, file=file)



        return redirect('notice:notice_list')

    return render(request, 'Notice_manager_writing.html')

def get_notices_by_category(request):
    category = request.GET.get('category') 
    notices = [] 
    if category=='정기활동' :
        notices = Notion.objects.filter(category=category).order_by('-write_time')
    elif category == '행사':
        notices = Notion.objects.filter(category=category).order_by('-write_time')
    elif category == '공모전':
        notices = Notion.objects.filter(category=category).order_by('-write_time')

     #pagination처리
    page = request.GET.get('page')
    paginator = Paginator(notices, 8)
    try:
        page_obj = paginator.page(page)
    except PageNotAnInteger: #page 선택 안 했을 때
        page = 1
        page_obj = paginator.page(page)
    except EmptyPage: #notices수 보다 더 큰 page 입력했을 때 
        page = paginator.num_pages
        page_obj = paginator.page(page)
    
    #page수 많으면 그 뒤에 넘기는 거 '>'로 보이게
    leftIndex = (int(page)-2)
    if leftIndex <1:
        leftIndex = 1
    
    rightIndex = (int(page)+2)
    if rightIndex > paginator.num_pages:
        rightIndex = paginator.num_pages
    custom_range = range(leftIndex, rightIndex+1)

    return render(request, 'Notice_main.html', {'notices': notices, 'page_obj':page_obj, 'paginator':paginator, 'custom_range':custom_range})



# read

def notice_list(request):
    notices = Notion.objects.all().order_by('-write_time')

    #pagination처리
    page = request.GET.get('page')
    paginator = Paginator(notices, 8)
    try:
        page_obj = paginator.page(page)
    except PageNotAnInteger: #page 선택 안 했을 때
        page = 1
        page_obj = paginator.page(page)
    except EmptyPage: #notices수 보다 더 큰 page 입력했을 때 
        page = paginator.num_pages
        page_obj = paginator.page(page)
    
    #page수 많으면 그 뒤에 넘기는 거 '>'로 보이게
    leftIndex = (int(page)-2)
    if leftIndex <1:
        leftIndex = 1
    
    rightIndex = (int(page)+2)
    if rightIndex > paginator.num_pages:
        rightIndex = paginator.num_pages
    custom_range = range(leftIndex, rightIndex+1)

    return render(request, 'Notice_main.html', {'notices': notices, 'page_obj':page_obj, 'paginator':paginator, 'custom_range':custom_range})



def notice_detail(request, notion_id):
    notice = get_object_or_404(Notion, pk=notion_id)
    images = NotionImage.objects.filter(notion=notice)
    files = NotionFile.objects.filter(notion=notice)
    return render(request, 'Notice_manager_record.html', {'notice': notice, 'images': images, 'files': files})

@login_required(login_url='/login/')
def edit_notice(request, notion_id):
    notice = get_object_or_404(Notion, pk=notion_id)
    images = NotionImage.objects.filter(notion=notice)
    notion=Notion.objects.get(id=notion_id)
    images.delete()

    if request.method == 'POST':
        notion.notion_title = request.POST['notion_title']
        notion.notion_text = request.POST['notion_text']
        notion.category = request.POST['selectedCategory'] 

        # Notion 모델에 저장
        notion.save()

        # NotionImage 모델에 저장
        images = request.FILES.getlist('image')
        for img in images:
            NotionImage.objects.create(notion=notion, image=img)

        return redirect(reverse('notice:notice_detail', kwargs={'notion_id': notice.id}))

    return render(request, 'notice_manager_edit.html' ,{'notice': notice, 'images': images})