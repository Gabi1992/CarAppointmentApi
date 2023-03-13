from django.http import HttpResponse
from django.shortcuts import render
from . models import megrendelo



def index(request):
    return HttpResponse("működik!")

def ugyfel(request):
    return HttpResponse("Ez is működik!")

def contact(request):
    return HttpResponse("Contact!")

def pricing(request):
    return HttpResponse("Pricing!")

def services(request):
    return HttpResponse("Services!")


# Create your views here.
