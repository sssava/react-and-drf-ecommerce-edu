from django.shortcuts import render
from rest_framework import generics
from .serializers import *

# Create your views here.


class ProductAPIList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductAPIGet(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_object(self):
        item = self.kwargs.get('pk')
        return Product.objects.get(id=item)
