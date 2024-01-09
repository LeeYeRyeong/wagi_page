from django.shortcuts import render, redirect, get_object_or_404
from .models import Notion, NotionImage, NotionFile
from .forms import NotionForm, NotionImageForm, NotionFileForm
from django.http import JsonResponse

# create
def notice_create(request):
    if request.method == 'POST':
        form = NotionForm(request.POST)
        image_forms = [NotionImageForm(request.POST, request.FILES, prefix='image') for _ in range(1)]  # 5는 예시입니다. 필요한 만큼 조절해주세요.
        file_forms = [NotionFileForm(request.POST, request.FILES, prefix='file') for _ in range(1)]

        if form.is_valid() and all(image_form.is_valid() for image_form in image_forms) and all(file_form.is_valid() for file_form in file_forms):
            new_notion = form.save()

            for image_form in image_forms:
                if image_form.cleaned_data.get('image'):
                    NotionImage.objects.create(notion=new_notion, image=image_form.cleaned_data['image'])

            for file_form in file_forms:
                if file_form.cleaned_data.get('file'):
                    NotionFile.objects.create(notion=new_notion, file=file_form.cleaned_data['file'])

            return redirect('notice_list')
    else:
        form = NotionForm()
        image_forms = [NotionImageForm(prefix='image') for _ in range(1)] 
        file_forms = [NotionFileForm(prefix='file') for _ in range(1)]  

    return render(request, 'notice/Notice_manager_writing.html', {'form': form, 'image_forms': image_forms, 'file_forms': file_forms})

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

