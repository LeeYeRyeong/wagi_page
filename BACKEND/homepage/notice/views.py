from django.shortcuts import render, redirect, get_object_or_404
from .models import Notion, NotionImage, NotionFile
from .forms import NotionForm, NotionImageForm, NotionFileForm
from django.http import JsonResponse

# create
def notice_create(request):
    if request.method == 'POST':
        n = Notion()
        ni = NotionImage()
        n.notion_title = request.POST['notion_title']
        n.notion_text = request.POST['notion_text']
        NotionImage.image = request.POST['image']
        n.save()
        ni.save()

        return redirect('notice_list')

    return render(request, 'Notice_manager_writing.html')

def get_notices_by_category(request, category):
    category = request.GET.get('category') 
    if category :
        notices = Notion.objects.filter(category=category).order_by('-write_time')
    else:
        notices = Notion.objects.all().order_by('-write_time')

    data = [{'id': notice.id, 'title': notice.notion_title} for notice in notices]

    return JsonResponse({'notices': data})


# read

def notice_list(request):
    notices = Notion.objects.all().order_by('-write_time')
    return render(request, 'notice/Notice_main.html', {'notices': notices})



def notice_detail(request, notion_id):
    notice = get_object_or_404(Notion, pk=notion_id)
    images = NotionImage.objects.filter(notion=notice)
    files = NotionFile.objects.filter(notion=notice)
    return render(request, 'notice_detail.html', {'notice': notice, 'images': images, 'files': files})

