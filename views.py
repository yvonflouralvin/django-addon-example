from django.shortcuts import render 
from .models import Property
from django.http import JsonResponse 

# Create your views here.
def index(request):
    properties = Property.objects.all()
    return JsonResponse({
        'properties': (properties),
    })