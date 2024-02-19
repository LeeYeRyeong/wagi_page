from django.shortcuts import render, redirect, get_object_or_404
from .models import Activity_mt, Activity_study, Activity_project
from .forms import ActivityForm_mt, ActivityForm_study, ActivityForm_project
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

@csrf_exempt #POSTMAN사용때매 설정
@login_required(login_url='/login/')
def upload_activity(request):
    if request.method == 'POST':
        mt_form = ActivityForm_mt(request.POST, request.FILES, prefix='mt_form')
        study_form = ActivityForm_study(request.POST, request.FILES, prefix='study_form')
        project_form = ActivityForm_project(request.POST, request.FILES, prefix='project_form')

        if mt_form.is_valid():
            for mt_image in request.FILES.getlist('mt_form-mt_image'):#이미지 여러개면 for문 돌려서 다 저장
                mt_instance = Activity_mt.objects.create(mt_image=mt_image)
                # 이미지 모델 저장 후에 ID 설정(istance만들어서 id주는건 원본에서 하길래 그대로 유지함)
                mt_instance.image_id = mt_instance.id
                mt_instance.save()

        if study_form.is_valid():
            for study_image in request.FILES.getlist('study_form-study_image'):
                study_instance = Activity_study.objects.create(study_image=study_image)
                study_instance.image_id = study_instance.id
                study_instance.save()

        if project_form.is_valid():
            for project_image in request.FILES.getlist('project_form-project_image'):
                project_instance = Activity_project.objects.create(project_image=project_image)
                project_instance.image_id = project_instance.id
                project_instance.save()
        
        return redirect('success_page')
    else:
        mt_form = ActivityForm_mt(prefix='mt_form')
        study_form = ActivityForm_study(prefix='study_form')
        project_form = ActivityForm_project(prefix='project_form')

    return render(request, 'upload_activity.html', {'mt_form': mt_form, 'study_form': study_form, 'project_form': project_form})

@login_required(login_url='/login/')
def success_page(request):
    mt_images = Activity_mt.objects.all()
    study_images = Activity_study.objects.all()
    project_images = Activity_project.objects.all()

    images = list(mt_images) + list(study_images) + list(project_images)

    return render(request, 'success_page.html', {'images': images})


def activities_page(request):
    mt_images = Activity_mt.objects.all()
    study_images = Activity_study.objects.all()
    project_images = Activity_project.objects.all()

    images = list(mt_images) + list(study_images) + list(project_images)

    return render(request, 'activities.html', {'images': images})


@login_required(login_url='/login/')
def edit_page(request):
    mt_images = Activity_mt.objects.all()
    study_images = Activity_study.objects.all()
    project_images = Activity_project.objects.all()

    if request.method == 'POST':
        delete_mt_images = request.POST.getlist('delete_mt_images')
        delete_study_images = request.POST.getlist('delete_study_images')
        delete_project_images = request.POST.getlist('delete_project_images')

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
        # 각 이미지 모델별로 아이디를 이용하여 삭제
        activity = get_object_or_404(model, id=image_id)
        image_field = getattr(activity, image_field_name)
        print(f"Deleting image {image_id} from {model.__name__}")
        image_field.delete()
        activity.delete()


def edit_images(model, image_ids, form_class, request):
    for image_id in image_ids:
        activity = get_object_or_404(model, id=image_id)
        form = form_class(request.POST, request.FILES, instance=activity)
        if form.is_valid():
            form.save()
