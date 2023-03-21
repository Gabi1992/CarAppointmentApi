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




# Create your views here.
