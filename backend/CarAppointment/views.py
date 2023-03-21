<<<<<<< HEAD
from django.http import HttpResponse
from django.shortcuts import render
from . models import megrendelo
from calendar import HTMLCalendar


def index(request):
    return HttpResponse("Home!")

def ugyfel(request):
    return HttpResponse("Ügyfél!")

def contact(request):
    return HttpResponse("Contact!")

def pricing(request):
    return HttpResponse("Pricing!")

def services(request):
    return HttpResponse("Services!")



=======
from django.shortcuts import render
>>>>>>> 5657c204ca62905745cda5bd8cf27328c0ba689e

# Create your views here.
