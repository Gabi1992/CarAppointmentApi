from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('home/', views.index, name="Teszt!"),
    path('ugyfel/', views.ugyfel, name="Ügyfél"),
    path('contact/', views.contact, name="Contact"),
    path('pricing/', views.pricing, name="Pricing"),
    path('services/', views.services, name="Services"),
]