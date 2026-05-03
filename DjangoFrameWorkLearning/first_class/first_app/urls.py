from django.contrib import admin
from django.urls import path
from .views import home
urlpatterns = [
    path("home/", home),
    # path("first_app/about", ),
    # path("first_app/contact", ),
]