from django.db.models import query
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *

class ScheduleCreate(generics.CreateAPIView):
    serializer_class = ScheduleSerializer

class ScheduleList(generics.ListAPIView):
    permissions_classes = [IsAuthenticated]
    serializer_class = ScheduleSerializer
    queryset = Schedule.objects.all()

class ScheduleDelete(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ScheduleSerializer
    queryset = Schedule.objects.all()


