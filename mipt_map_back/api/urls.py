from django.urls import path
from .views import *

urlpatterns = [
    path('create/', ScheduleCreate.as_view()),
    path('get_all/', ScheduleList.as_view()),
    path('drop/<int:pk>', ScheduleDelete.as_view()),
]
