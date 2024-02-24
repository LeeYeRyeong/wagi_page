from django.db import models

# 합격자 학번
class PassId(models.Model):
    studentId = models.CharField(max_length=20, unique=True)
    time=models.CharField(max_length=40, null=True)
    
    def __str__(self):
        return self.studentId
    
# 불합격자 학번
class FailId(models.Model):
    studentId = models.CharField(max_length=20, unique=True)
    
    def __str__(self):
        return self.studentId
    
# 알림 보낼 메일
class SendMail(models.Model):
    user_mail = models.CharField(max_length=50, unique=True)