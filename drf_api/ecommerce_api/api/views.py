from django.shortcuts import render

# Create your views here.


def home(requests):
    context = {}
    return render(requests, 'api/index.html', context)
