from django.contrib import admin
from django.urls import path, include
from .views import *


urlpatterns = [
    path('', ProductAPIList.as_view(), name="product-list"),
    path('product/<int:pk>/', ProductAPIGet.as_view(), name="product-get")
]
