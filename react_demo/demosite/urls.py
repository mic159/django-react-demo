from django.urls import path
from react_demo.app import views


urlpatterns = [
    path('', views.index),
]
