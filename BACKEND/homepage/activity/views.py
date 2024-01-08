from django.shortcuts import render, redirect, get_object_or_404
from .models import Activity_mt, Activity_study, Activity_project
from .forms import ActivityForm_mt, ActivityForm_study, ActivityForm_project
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

def upload_activity(request):
    if request.method == 'POST':
        mt_form = ActivityForm_mt(request.POST, request.FILES, prefix='mt_form')
        study_form = ActivityForm_study(request.POST, request.FILES, prefix='study_form')
        project_form = ActivityForm_project(request.POST, request.FILES, prefix='project_form')

        if mt_form.is_valid() and study_form.is_valid() and project_form.is_valid():
            mt_instance = mt_form.save(commit=False)
            study_instance = study_form.save(commit=False)
            project_instance = project_form.save(commit=False)

            # 각 이미지 모델에 대한 추가 로직 수행 (필요하면)
            mt_instance.save()
            study_instance.save()
            project_instance.save()

            # 이미지 모델들이 저장된 후에 이미지 ID 설정
            mt_instance.image_id = mt_instance.id
            study_instance.image_id = study_instance.id
            project_instance.image_id = project_instance.id

            mt_instance.save()
            study_instance.save()
            project_instance.save()

            return redirect('success_page')
    else:
        mt_form = ActivityForm_mt(prefix='mt_form')
        study_form = ActivityForm_study(prefix='study_form')
        project_form = ActivityForm_project(prefix='project_form')

    return render(request, 'upload_activity.html', {'mt_form': mt_form, 'study_form': study_form, 'project_form': project_form})

def success_page(request):
    mt_images = Activity_mt.objects.all()
    study_images = Activity_study.objects.all()
    project_images = Activity_project.objects.all()

    images = list(mt_images) + list(study_images) + list(project_images)

    return render(request, 'success_page.html', {'images': images})


def edit_page(request):
    mt_images = Activity_mt.objects.all()
    study_images = Activity_study.objects.all()
    project_images = Activity_project.objects.all()

    if request.method == 'POST':
        delete_mt_images = request.POST.getlist('delete_images')
        delete_study_images = request.POST.getlist('delete_images')
        delete_project_images = request.POST.getlist('delete_images')

        # 이미지 삭제
        delete_images(Activity_mt, delete_mt_images, 'mt_image')
        delete_images(Activity_study, delete_study_images, 'study_image')
        delete_images(Activity_project, delete_project_images, 'project_image')

        # 이미지 다시 불러오기
        mt_images = Activity_mt.objects.all()
        study_images = Activity_study.objects.all()
        project_images = Activity_project.objects.all()

    return render(request, 'edit_page.html', {'mt_images': mt_images, 'study_images': study_images, 'project_images': project_images})


def delete_images(model, image_ids, image_field_name):
    for image_id in image_ids:
        activity = get_object_or_404(model, id=image_id)
        image_field = getattr(activity, image_field_name)
        activity.delete_image(image_field)
        #activity.delete()

def edit_images(model, image_ids, form_class, request):
    for image_id in image_ids:
        activity = get_object_or_404(model, id=image_id)
        form = form_class(request.POST, request.FILES, instance=activity)
        if form.is_valid():
            form.save()