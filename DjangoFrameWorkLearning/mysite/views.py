from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    #return HttpResponse('Hello World')
    #return HttpResponse('<h3>Hello World</h3>')  #home directory
    #return HttpResponse('<h3>This is Our Home Page</h3>') #without home directory

    return render(request,'home.html')